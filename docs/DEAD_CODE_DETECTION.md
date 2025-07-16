# Dead Code Detection

This project includes comprehensive dead code detection tools to help maintain a clean and efficient codebase.

## Features

- **Dead File Detection**: Identifies files that are never imported or referenced
- **Unused Export Detection**: Finds exported functions/components that are never used
- **Duplicate Component Detection**: Spots components with the same name in different files
- **Astro-Specific Analysis**: Understands Astro's content collections and component patterns
- **JSON Reporting**: Generates detailed reports for CI/CD integration

## Usage

### Quick Analysis
```bash
npm run analyze:dead-code
```

### JSON Report Generation
```bash
npm run analyze:dead-code:json
```

### Verbose Analysis
```bash
npm run analyze:dead-code:verbose
```

## Understanding the Results

### Dead Files
Files that are never imported and can potentially be removed:
- ❌ Component files not used in any pages
- ❌ Utility files with no references
- ❌ Content files not accessed via collections

### Unused Exports
Functions, components, or variables exported but never imported:
- 🚫 Named exports without references
- 🚫 Utility functions that are no longer needed

### Duplicate Components
Multiple files with the same component name:
- 👯 Different implementations of the same component
- 👯 Legacy versions alongside new versions

## Current Analysis Results

As of the latest analysis:
- **6 dead files** identified (mostly unused React components)
- **1 duplicate component** found (ContactForm in both .jsx and .astro versions)
- **2 unused exports** detected

## Recommendations

1. **Review ContactForm Components**: Choose between the React (.jsx) and Astro (.astro) versions
2. **Remove Unused Components**: Clean up unused React components like HomePageClickCounter
3. **Content Cleanup**: Remove sample content files that aren't being used

## Integration with CI/CD

The JSON reporter can be integrated into your build pipeline:

```bash
# Generate report
npm run analyze:dead-code:json

# Check if there are any dead files (exit code 1 if found)
node -e "const report = require('./dead-code-report.json'); process.exit(report.summary.deadFiles > 0 ? 1 : 0)"
```

## Configuration

The analyzer can be configured by modifying the scripts in `/scripts/`:
- `dead-code-analyzer.mjs`: Main analysis logic
- `dead-code-reporter.mjs`: JSON report generation

## Exclusions

Some files are automatically excluded from dead code detection:
- Configuration files (astro.config.mjs, tailwind.config.js, etc.)
- Page files in src/pages/ (considered entry points)
- Public scripts referenced in HTML

## Manual Review Required

Always manually review results before deleting files:
- Some files may be used dynamically
- Content files might be needed for future features
- Test files and documentation should be preserved