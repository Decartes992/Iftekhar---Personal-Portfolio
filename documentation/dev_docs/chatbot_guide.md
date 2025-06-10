# Chatbot Guide: Personal Portfolio Project

This guide provides context for the AI assistant (Roo) interacting with the `personal-portfolio` codebase.

## Project Overview

This project is a personal portfolio website built using the Astro framework. It showcases the owner's skills, projects, resume, and provides contact information. The goal is to present a professional online presence.

## Technologies Used

*   **Framework:** Astro (v^5.7.5)
*   **Styling:** Tailwind CSS (v^3.4.17), CSS (`personal-portfolio/src/styles/global.css`)
*   **CSS Processing:** PostCSS with autoprefixer
*   **Language:** Astro components (`.astro`), TypeScript (implied by `tsconfig.json`), React (`.jsx`, `.tsx`)
*   **Package Manager:** npm (implied by `package.json`, `package-lock.json`)
*   **Deployment Adapter:** Vercel (`@astrojs/vercel`)

## Directory Structure

```
personal-portfolio/
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.cjs          # PostCSS configuration for Tailwind
├── README.md
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json
├── documentation/              # Contains documentation files
│   ├── accessibility.md
│   ├── api_references.yaml
│   ├── architecture_visualization.md
│   ├── contributing_roadmap.md
│   ├── deployment.md
│   ├── layout-baselayout.md
│   ├── page-about.md
│   ├── page-blog-index.md
│   ├── page-blog-post.md
│   ├── page-blog-tags.md
│   ├── page-contact.md
│   ├── page-index.md
│   ├── page-projects.md
│   ├── page-resume.md
│   ├── project-setup.md
│   ├── ProjectDashboard.md
│   ├── ProjectSpecificViz.md
│   ├── public_assets.md
│   ├── styles-global.md
│   ├── UI_Enhancement_Implementation_Plan.md
│   └── dev_docs/               # Developer documentation
│       ├── chatbot_guide.md
│       └── [other dev docs]
├── public/                     # Static assets
│   ├── favicon.svg
│   ├── images/
│   │   └── iftekhar_photo.jpg
│   └── scripts/
│       └── theme-toggle.js
├── src/                        # Source code
│   ├── components/             # Reusable components
│   │   ├── About.astro
│   │   ├── BlogPostCard.jsx
│   │   ├── Button.astro
│   │   ├── ContactForm.astro
│   │   ├── ContactForm.jsx
│   │   ├── Hero.astro
│   │   ├── HomePageClickCounter.jsx
│   │   ├── ProjectCard.astro
│   │   ├── ProjectDashboard.jsx
│   │   ├── ProjectFilterSort.jsx
│   │   ├── ProjectSpecificViz.jsx
│   │   ├── ProjectsSection.astro
│   │   └── ThemeToggleButton.astro
│   ├── content/                # Content collections
│   │   ├── config.ts
│   │   ├── blog/
│   │   │   └── first-post.md
│   │   └── projects/
│   │       └── sample-project.md
│   ├── layouts/                # Reusable page layouts
│   │   └── BaseLayout.astro
│   ├── pages/                  # Site pages/routes
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── resume.astro
│   │   ├── api/
│   │   │   └── contact.ts
│   │   └── blog/
│   │       ├── [...slug].astro
│   │       ├── index.astro
│   │       └── tags/
│   │           └── [tag].astro
│   ├── scripts/                # Client-side scripts
│   │   └── about-interactive.js
│   └── styles/                 # Global styles
│       └── global.css
```

## Documentation Files

The `/personal-portfolio/documentation/` directory contains markdown files explaining different parts of the codebase:

*   **Setup & Config:** For project setup and configuration details, see `personal-portfolio/documentation/project-setup.md`.
*   **Base Layout:** For details on the main site layout, see `personal-portfolio/documentation/layout-baselayout.md`.
*   **Index Page:** For details on the main page (`/`), see `personal-portfolio/documentation/page-index.md`.
*   **About Page:** For details on the About page (`/about`), see `personal-portfolio/documentation/page-about.md`.
*   **Contact Page:** For details on the Contact page (`/contact`), see `personal-portfolio/documentation/page-contact.md`.
*   **Projects Page:** For details on the Projects page (`/projects`), see `personal-portfolio/documentation/page-projects.md`.
*   **Resume Page:** For details on the Resume page (`/resume`), see `personal-portfolio/documentation/page-resume.md`.
*   **Global Styles:** For details on the global CSS, see `personal-portfolio/documentation/styles-global.md`.

## WebSocket Implementation

The project utilizes Vite's built-in WebSocket support for Hot Module Replacement (HMR). Key aspects of the WebSocket implementation include:

### WebSocket Configuration

*   Vite automatically sets up a WebSocket server for HMR.
*   The WebSocket connection is used for live reloading and HMR.

### Handling WebSocket Connections

*   The `crossws` package provides cross-platform WebSocket support.
*   WebSocket connections are handled internally by Vite for HMR.

### Important Considerations

*   The `skipWebSocketTokenCheck` option can be used to skip token checks for WebSocket connections.
*   The WebSocket server is configured to handle connections and messages for HMR.

## Tailwind CSS Configuration

The project uses Tailwind CSS v3.4.17 for styling with the following setup:

### Dependencies

*   `@astrojs/tailwind`: "^6.0.2" (Astro integration for Tailwind)
*   `tailwindcss`: "^3.4.17" (dev dependency)
*   `@tailwindcss/postcss`: "^4.1.4" (dev dependency)
*   `autoprefixer`: "^10.4.21" (dev dependency)
*   `postcss`: "^8.5.3" (dev dependency)

### Configuration Files

*   **`tailwind.config.js`**: Configures content paths to scan for Tailwind classes:
    ```js
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"]
    ```

*   **`postcss.config.cjs`**: Processes CSS with Tailwind and autoprefixer:
    ```js
    module.exports = {
      plugins: {
        '@tailwindcss/postcss': {},  // Note: Should be 'tailwindcss' for standard setup
        autoprefixer: {},
      },
    };
    ```

### Integration with Astro

*   Tailwind is integrated via the `@astrojs/tailwind` adapter in the Astro configuration
*   Styles are processed during build and development
*   Classes can be used in `.astro`, `.jsx`, and `.tsx` files

### Known Configuration Issues

*   **PostCSS Plugin Issue**: The `postcss.config.cjs` currently uses `@tailwindcss/postcss` instead of the standard `tailwindcss` plugin. This may cause issues with the `npx tailwindcss init` command.
*   **Recommended Fix**: Update `postcss.config.cjs` to use `tailwindcss` as the plugin name instead of `@tailwindcss/postcss`.

## Version Control Configuration

The project includes a comprehensive `.gitignore` file that excludes:

*   **Build artifacts**: `dist/`, `.astro/`, `.vercel/output/`
*   **Dependencies**: `node_modules/`, `jspm_packages/`
*   **Environment files**: `.env*` files
*   **OS-specific files**: `.DS_Store`, `Thumbs.db`, `*.stackdump`
*   **Editor files**: `.vscode/`, `.idea/`, `*.swp`, `*.swo`
*   **Logs and runtime data**: `*.log`, `*.pid`, coverage reports
*   **Cache directories**: `.cache/`, `.npm`, `.eslintcache`
*   **Development documentation**: `personal-portfolio\documentation\dev_docs` (temporary planning files)

## Documentation-Code Relationship

Documentation files generally correspond to specific source code files:

*   `project-setup.md`: Relates to `astro.config.mjs`, `package.json`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.cjs`.
*   `layout-baselayout.md`: Documents `src/layouts/BaseLayout.astro`.
*   `page-index.md`: Documents `src/pages/index.astro`.
*   `page-about.md`: Documents `src/pages/about.astro`.
*   `page-contact.md`: Documents `src/pages/contact.astro`.
*   `page-projects.md`: Documents `src/pages/projects.astro`.
*   `page-resume.md`: Documents `src/pages/resume.astro`.
*   `page-blog-index.md`: Documents `src/pages/blog/index.astro`.
*   `page-blog-post.md`: Documents `src/pages/blog/[...slug].astro`.
*   `page-blog-tags.md`: Documents `src/pages/blog/tags/[tag].astro`.
*   `styles-global.md`: Documents `src/styles/global.css`.
*   `public_assets.md`: Documents `public/` directory assets.
*   `accessibility.md`: Documents accessibility features across components.
*   `deployment.md`: Documents deployment configuration and process.

## Standing Rule

Documentation in `/personal-portfolio/documentation/` should be automatically updated by ROO when corresponding code changes are made.