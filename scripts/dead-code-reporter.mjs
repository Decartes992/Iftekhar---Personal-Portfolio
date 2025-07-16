#!/usr/bin/env node

/**
 * Dead Code Report Generator
 * Outputs dead code analysis results in JSON format for CI/CD integration
 */

import fs from 'fs';
import path from 'path';
import DeadCodeAnalyzer from './dead-code-analyzer.mjs';

class DeadCodeReporter extends DeadCodeAnalyzer {
  constructor(projectRoot, options = {}) {
    super(projectRoot);
    this.options = {
      outputFile: 'dead-code-report.json',
      includeDetailsInConsole: false,
      ...options
    };
  }

  /**
   * Generate detailed JSON report
   */
  async generateJSONReport() {
    await this.analyze();
    
    const report = {
      timestamp: new Date().toISOString(),
      projectRoot: this.projectRoot,
      summary: {
        totalFiles: this.sourceFiles.size,
        entryPoints: this.entryPoints.size,
        deadFiles: this.deadFiles.size,
        filesWithUnusedExports: this.unusedExports.size,
        duplicateComponents: this.duplicateComponents.size
      },
      deadFiles: Array.from(this.deadFiles).map(file => ({
        absolutePath: file,
        relativePath: path.relative(this.projectRoot, file),
        size: this.getFileSize(file),
        lastModified: this.getFileLastModified(file)
      })),
      unusedExports: Array.from(this.unusedExports.entries()).map(([file, exports]) => ({
        file: path.relative(this.projectRoot, file),
        exports: exports
      })),
      duplicateComponents: Array.from(this.duplicateComponents.entries()).map(([name, files]) => ({
        componentName: name,
        files: files.map(file => path.relative(this.projectRoot, file))
      })),
      dependencyGraph: this.buildGraphForReport(),
      recommendations: this.generateRecommendations()
    };

    // Write to file
    const outputPath = path.join(this.projectRoot, this.options.outputFile);
    await fs.promises.writeFile(outputPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report written to: ${this.options.outputFile}`);
    
    if (this.options.includeDetailsInConsole) {
      // Don't run analysis again, just show the report from the data we already have
      console.log('\n' + '='.repeat(60));
      console.log('📋 DEAD CODE ANALYSIS REPORT');
      console.log('='.repeat(60));
      
      // Summary
      console.log(`\n📊 SUMMARY:`);
      console.log(`   Total files analyzed: ${this.sourceFiles.size}`);
      console.log(`   Entry points: ${this.entryPoints.size}`);
      console.log(`   Dead files: ${this.deadFiles.size}`);
      console.log(`   Files with unused exports: ${this.unusedExports.size}`);
      console.log(`   Duplicate components: ${this.duplicateComponents.size}`);
      
      // Dead files
      if (this.deadFiles.size > 0) {
        console.log(`\n💀 DEAD FILES (${this.deadFiles.size}):`);
        this.deadFiles.forEach(file => {
          console.log(`   ❌ ${path.relative(this.projectRoot, file)}`);
        });
        console.log(`\n   ℹ️  These files are never imported and can potentially be removed.`);
      }
      
      // Unused exports
      if (this.unusedExports.size > 0) {
        console.log(`\n🚫 UNUSED EXPORTS:`);
        this.unusedExports.forEach((exports, file) => {
          console.log(`   📄 ${path.relative(this.projectRoot, file)}:`);
          exports.forEach(exp => {
            console.log(`      - ${exp}`);
          });
        });
        console.log(`\n   ℹ️  These exports are never imported and can be removed.`);
      }
      
      // Duplicate components
      if (this.duplicateComponents.size > 0) {
        console.log(`\n👯 DUPLICATE COMPONENTS:`);
        this.duplicateComponents.forEach((files, name) => {
          console.log(`   🔄 ${name}:`);
          files.forEach(file => {
            console.log(`      - ${path.relative(this.projectRoot, file)}`);
          });
        });
        console.log(`\n   ℹ️  Multiple files with the same component name found. Consider consolidating.`);
      }
      
      console.log('\n' + '='.repeat(60));
    } else {
      console.log(`\n📊 Quick Summary:`);
      console.log(`   Dead files: ${report.summary.deadFiles}`);
      console.log(`   Unused exports: ${report.summary.filesWithUnusedExports}`);
      console.log(`   Duplicate components: ${report.summary.duplicateComponents}`);
    }

    return report;
  }

  /**
   * Get file size in bytes
   */
  getFileSize(filePath) {
    try {
      const stats = fs.statSync(filePath);
      return stats.size;
    } catch (error) {
      return 0;
    }
  }

  /**
   * Get file last modified date
   */
  getFileLastModified(filePath) {
    try {
      const stats = fs.statSync(filePath);
      return stats.mtime.toISOString();
    } catch (error) {
      return null;
    }
  }

  /**
   * Build dependency graph for report
   */
  buildGraphForReport() {
    const graph = {};
    
    this.dependencies.forEach((deps, file) => {
      const relativePath = path.relative(this.projectRoot, file);
      graph[relativePath] = {
        dependencies: deps.map(dep => path.relative(this.projectRoot, dep)),
        dependents: (this.dependents.get(file) || []).map(dep => path.relative(this.projectRoot, dep))
      };
    });
    
    return graph;
  }

  /**
   * Generate actionable recommendations
   */
  generateRecommendations() {
    const recommendations = [];
    
    if (this.deadFiles.size > 0) {
      recommendations.push({
        type: 'dead-files',
        priority: 'medium',
        description: `Remove ${this.deadFiles.size} dead files to reduce bundle size`,
        estimatedSavings: `${Array.from(this.deadFiles).reduce((total, file) => total + this.getFileSize(file), 0)} bytes`
      });
    }
    
    if (this.duplicateComponents.size > 0) {
      recommendations.push({
        type: 'duplicate-components',
        priority: 'high',
        description: `Consolidate ${this.duplicateComponents.size} duplicate components`,
        details: Array.from(this.duplicateComponents.keys())
      });
    }
    
    if (this.unusedExports.size > 0) {
      recommendations.push({
        type: 'unused-exports',
        priority: 'low',
        description: `Clean up unused exports in ${this.unusedExports.size} files`
      });
    }
    
    return recommendations;
  }
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const projectRoot = process.argv[2] || process.cwd();
  const outputFile = process.argv[3] || 'dead-code-report.json';
  const verbose = process.argv.includes('--verbose');
  
  const reporter = new DeadCodeReporter(projectRoot, {
    outputFile,
    includeDetailsInConsole: verbose
  });
  
  reporter.generateJSONReport().catch(error => {
    console.error('❌ Report generation failed:', error);
    process.exit(1);
  });
}

export default DeadCodeReporter;