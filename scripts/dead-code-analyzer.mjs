#!/usr/bin/env node

/**
 * Dead Code Detection Script for Astro + React Project
 * Analyzes the codebase to find unused files, components, and exports
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class DeadCodeAnalyzer {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.sourceFiles = new Set();
    this.dependencies = new Map(); // file -> [dependencies]
    this.dependents = new Map();   // file -> [files that depend on it]
    this.exports = new Map();      // file -> [exported items]
    this.imports = new Map();      // file -> [imported items]
    this.entryPoints = new Set();
    this.deadFiles = new Set();
    this.unusedExports = new Map();
    this.duplicateComponents = new Map();
  }

  /**
   * Main analysis function
   */
  async analyze() {
    console.log('🔍 Starting dead code analysis...\n');
    
    // Step 1: Discover all source files
    await this.discoverSourceFiles();
    
    // Step 2: Identify entry points
    this.identifyEntryPoints();
    
    // Step 3: Parse files and build dependency graph
    await this.buildDependencyGraph();
    
    // Step 4: Find dead files
    this.findDeadFiles();
    
    // Step 5: Find unused exports
    this.findUnusedExports();
    
    // Step 6: Find duplicate components
    this.findDuplicateComponents();
    
    // Step 7: Generate report
    this.generateReport();
  }

  /**
   * Discover all source files in the project
   */
  async discoverSourceFiles() {
    const patterns = [
      'src/**/*.{js,jsx,ts,tsx,astro,md}',
      'public/**/*.{js,ts}',
      '*.{js,mjs,ts,astro}'
    ];

    for (const pattern of patterns) {
      const files = await glob(pattern, { cwd: this.projectRoot });
      files.forEach(file => {
        const fullPath = path.resolve(this.projectRoot, file);
        this.sourceFiles.add(fullPath);
      });
    }

    console.log(`📁 Found ${this.sourceFiles.size} source files`);
  }

  /**
   * Identify entry points (pages, API routes, config files)
   */
  identifyEntryPoints() {
    this.sourceFiles.forEach(file => {
      const relativePath = path.relative(this.projectRoot, file);
      
      // Astro pages are entry points
      if (relativePath.startsWith('src/pages/')) {
        this.entryPoints.add(file);
      }
      
      // Configuration files are entry points
      if (relativePath.match(/^(astro|tailwind|postcss)\.config\./)) {
        this.entryPoints.add(file);
      }
      
      // Public scripts are entry points
      if (relativePath.startsWith('public/') && relativePath.endsWith('.js')) {
        this.entryPoints.add(file);
      }
    });

    console.log(`🚪 Found ${this.entryPoints.size} entry points`);
  }

  /**
   * Build dependency graph by parsing imports/exports
   */
  async buildDependencyGraph() {
    for (const file of this.sourceFiles) {
      await this.parseFile(file);
    }
    
    console.log(`📊 Built dependency graph`);
  }

  /**
   * Parse a single file for imports and exports
   */
  async parseFile(filePath) {
    try {
      const content = await fs.promises.readFile(filePath, 'utf-8');
      const ext = path.extname(filePath);
      
      // Parse based on file type
      if (ext === '.astro') {
        this.parseAstroFile(filePath, content);
      } else if (['.js', '.jsx', '.ts', '.tsx', '.mjs'].includes(ext)) {
        this.parseJavaScriptFile(filePath, content);
      } else if (ext === '.md') {
        this.parseMarkdownFile(filePath, content);
      }
    } catch (error) {
      console.warn(`⚠️  Could not parse ${filePath}: ${error.message}`);
    }
  }

  /**
   * Parse Astro file for imports and components
   */
  parseAstroFile(filePath, content) {
    const imports = [];
    const exports = [];
    
    // Extract frontmatter (everything between ---)
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
    const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
    
    // Parse imports in frontmatter
    const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = importRegex.exec(frontmatter)) !== null) {
      const importPath = this.resolveImportPath(filePath, match[1]);
      if (importPath) {
        imports.push(importPath);
      }
    }
    
    // Check for Astro content collections usage (implies content/config.ts usage)
    if (frontmatter.includes('getCollection') || frontmatter.includes('getEntry')) {
      const contentConfigPath = path.join(this.projectRoot, 'src/content/config.ts');
      if (fs.existsSync(contentConfigPath) && !imports.includes(contentConfigPath)) {
        imports.push(contentConfigPath);
      }
    }
    
    // Parse script tags for external script references
    const scriptRegex = /<script[^>]*src=['"`]([^'"`]+)['"`][^>]*>/g;
    while ((match = scriptRegex.exec(content)) !== null) {
      const scriptPath = this.resolveImportPath(filePath, match[1]);
      if (scriptPath && !imports.includes(scriptPath)) {
        imports.push(scriptPath);
      }
    }
    
    // Parse component usage in template
    const componentRegex = /<(\w+)(?:\s+[^>]*)?(?:\s*\/>|>[\s\S]*?<\/\1>)/g;
    while ((match = componentRegex.exec(content)) !== null) {
      const componentName = match[1];
      // Find if this component was imported
      const importMatch = frontmatter.match(new RegExp(`import\\s+(?:.*\\{\\s*)?${componentName}(?:\\s*\\}.*)?\\s+from\\s+['"\`]([^'"\`]+)['"\`]`));
      if (importMatch) {
        const importPath = this.resolveImportPath(filePath, importMatch[1]);
        if (importPath && !imports.includes(importPath)) {
          imports.push(importPath);
        }
      }
    }
    
    this.dependencies.set(filePath, imports);
    this.exports.set(filePath, exports);
    
    // Update dependents
    imports.forEach(dep => {
      if (!this.dependents.has(dep)) {
        this.dependents.set(dep, []);
      }
      this.dependents.get(dep).push(filePath);
    });
  }

  /**
   * Parse JavaScript/TypeScript file for imports and exports
   */
  parseJavaScriptFile(filePath, content) {
    const imports = [];
    const exports = [];
    
    // Parse imports
    const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = this.resolveImportPath(filePath, match[1]);
      if (importPath) {
        imports.push(importPath);
      }
    }
    
    // Parse exports
    const exportRegex = /export\s+(?:default\s+)?(?:const|let|var|function|class)\s+(\w+)|export\s+\{([^}]+)\}/g;
    while ((match = exportRegex.exec(content)) !== null) {
      if (match[1]) {
        exports.push(match[1]);
      } else if (match[2]) {
        // Parse named exports
        const namedExports = match[2].split(',').map(e => e.trim().split(' as ')[0]);
        exports.push(...namedExports);
      }
    }
    
    // Check for default export
    if (content.includes('export default')) {
      exports.push('default');
    }
    
    this.dependencies.set(filePath, imports);
    this.exports.set(filePath, exports);
    
    // Update dependents
    imports.forEach(dep => {
      if (!this.dependents.has(dep)) {
        this.dependents.set(dep, []);
      }
      this.dependents.get(dep).push(filePath);
    });
  }

  /**
   * Parse Markdown file for asset references
   */
  parseMarkdownFile(filePath, content) {
    const imports = [];
    
    // Look for image references and other assets
    const assetRegex = /!\[.*?\]\(([^)]+)\)|src=['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = assetRegex.exec(content)) !== null) {
      const assetPath = match[1] || match[2];
      if (assetPath && !assetPath.startsWith('http')) {
        const resolvedPath = this.resolveImportPath(filePath, assetPath);
        if (resolvedPath) {
          imports.push(resolvedPath);
        }
      }
    }
    
    this.dependencies.set(filePath, imports);
    this.exports.set(filePath, []);
    
    // Update dependents
    imports.forEach(dep => {
      if (!this.dependents.has(dep)) {
        this.dependents.set(dep, []);
      }
      this.dependents.get(dep).push(filePath);
    });
  }

  /**
   * Resolve import path to absolute path
   */
  resolveImportPath(fromFile, importPath) {
    // Skip external packages
    if (!importPath.startsWith('.') && !importPath.startsWith('/')) {
      return null;
    }
    
    const fromDir = path.dirname(fromFile);
    let resolvedPath;
    
    if (importPath.startsWith('/')) {
      // Absolute path from project root - try both public and src
      const publicPath = path.join(this.projectRoot, 'public', importPath);
      const srcPath = path.join(this.projectRoot, 'src', importPath);
      
      // Check public first
      if (fs.existsSync(publicPath)) {
        resolvedPath = publicPath;
      } else {
        resolvedPath = srcPath;
      }
    } else {
      // Relative path
      resolvedPath = path.resolve(fromDir, importPath);
    }
    
    // Try different extensions if file doesn't exist
    const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '.astro', '.md'];
    
    for (const ext of extensions) {
      const testPath = resolvedPath + ext;
      if (fs.existsSync(testPath)) {
        return testPath;
      }
    }
    
    // Try index files
    for (const ext of ['.js', '.jsx', '.ts', '.tsx', '.astro']) {
      const indexPath = path.join(resolvedPath, 'index' + ext);
      if (fs.existsSync(indexPath)) {
        return indexPath;
      }
    }
    
    return null;
  }

  /**
   * Find files that are never imported
   */
  findDeadFiles() {
    const visited = new Set();
    
    // Start from entry points and traverse
    const traverse = (file) => {
      if (visited.has(file)) return;
      visited.add(file);
      
      const deps = this.dependencies.get(file) || [];
      deps.forEach(dep => traverse(dep));
    };
    
    this.entryPoints.forEach(entryPoint => traverse(entryPoint));
    
    // Files not visited are potentially dead
    this.sourceFiles.forEach(file => {
      if (!visited.has(file)) {
        this.deadFiles.add(file);
      }
    });
    
    console.log(`💀 Found ${this.deadFiles.size} potentially dead files`);
  }

  /**
   * Find unused exports within used files
   */
  findUnusedExports() {
    this.sourceFiles.forEach(file => {
      if (this.deadFiles.has(file)) return;
      
      const exports = this.exports.get(file) || [];
      const dependents = this.dependents.get(file) || [];
      
      // For each export, check if it's actually imported anywhere
      exports.forEach(exportName => {
        let isUsed = false;
        
        dependents.forEach(dependent => {
          try {
            const content = fs.readFileSync(dependent, 'utf-8');
            
            // Check various import patterns
            const importPatterns = [
              new RegExp(`import\\s+${exportName}\\s+from`),
              new RegExp(`import\\s+.*\\{[^}]*${exportName}[^}]*\\}.*from`),
              new RegExp(`<${exportName}[\\s>]`), // Component usage in JSX/Astro
            ];
            
            isUsed = importPatterns.some(pattern => pattern.test(content));
          } catch (error) {
            // Ignore read errors
          }
        });
        
        if (!isUsed && exportName !== 'default') {
          if (!this.unusedExports.has(file)) {
            this.unusedExports.set(file, []);
          }
          this.unusedExports.get(file).push(exportName);
        }
      });
    });
  }

  /**
   * Find duplicate components with similar names or functionality
   */
  findDuplicateComponents() {
    const componentNames = new Map(); // name -> [files]
    
    this.sourceFiles.forEach(file => {
      const basename = path.basename(file, path.extname(file));
      
      // Skip if not a component-like file
      if (!basename.match(/^[A-Z]/) && !file.includes('/components/')) {
        return;
      }
      
      if (!componentNames.has(basename)) {
        componentNames.set(basename, []);
      }
      componentNames.get(basename).push(file);
    });
    
    // Find names with multiple implementations
    componentNames.forEach((files, name) => {
      if (files.length > 1) {
        this.duplicateComponents.set(name, files);
      }
    });
  }

  /**
   * Generate and display the analysis report
   */
  generateReport() {
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
    
    // Recommendations
    console.log(`\n💡 RECOMMENDATIONS:`);
    
    if (this.deadFiles.size > 0) {
      console.log(`   1. Review and remove dead files to reduce bundle size`);
    }
    
    if (this.duplicateComponents.size > 0) {
      console.log(`   2. Consolidate duplicate components to avoid confusion`);
    }
    
    if (this.unusedExports.size > 0) {
      console.log(`   3. Remove unused exports to clean up the codebase`);
    }
    
    if (this.deadFiles.size === 0 && this.unusedExports.size === 0 && this.duplicateComponents.size === 0) {
      console.log(`   🎉 Great! No dead code detected in your project.`);
    }
    
    console.log('\n' + '='.repeat(60));
  }
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const projectRoot = process.argv[2] || process.cwd();
  
  const analyzer = new DeadCodeAnalyzer(projectRoot);
  analyzer.analyze().catch(error => {
    console.error('❌ Analysis failed:', error);
    process.exit(1);
  });
}

export default DeadCodeAnalyzer;