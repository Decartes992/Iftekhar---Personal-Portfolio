# Iftekhar - Personal Portfolio

A modern personal portfolio website built with Astro, featuring React components and Tailwind CSS.

## Features

- 🚀 Built with Astro for optimal performance
- ⚛️ React components for interactive elements
- 🎨 Tailwind CSS for modern styling
- 📱 Fully responsive design
- 🌙 Dark/light theme support
- 📧 Contact form integration
- 📝 Blog and project showcase
- 🔍 **Dead code detection tools** for maintaining clean codebase

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Code Quality Tools

### Dead Code Detection
This project includes comprehensive dead code detection tools:

```bash
# Analyze for unused files and exports
npm run analyze:dead-code

# Generate JSON report
npm run analyze:dead-code:json

# Verbose analysis with details
npm run analyze:dead-code:verbose
```

See [Dead Code Detection Documentation](./docs/DEAD_CODE_DETECTION.md) for detailed usage.

### Linting
```bash
# Lint markdown files
npm run lint:md
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── content/        # Blog posts and project data
├── layouts/        # Page layouts
├── pages/          # Page routes
├── scripts/        # Utility scripts
└── styles/         # Global styles

scripts/
├── dead-code-analyzer.mjs  # Main dead code detection
└── dead-code-reporter.mjs  # JSON report generation
```

## Contributing

1. Run dead code analysis before submitting PRs
2. Follow the existing code style
3. Update documentation as needed

## License

MIT License
