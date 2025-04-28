# Project Setup

This document provides details about the project setup, key configuration files, and how to run the project.

## Configuration Files

### `package.json`

This file manages the project's dependencies and scripts.

*   **Purpose:** Defines project metadata, dependencies, and executable scripts.
*   **Key Scripts:**
    *   `dev`: Starts the development server using Astro.
    *   `build`: Builds the project for production using Astro.
    *   `preview`: Previews the production build locally using Astro.
    *   `astro`: Provides access to the Astro CLI.
*   **Dependencies:**
    *   `astro`: The core framework for building the website.
    *   `@astrojs/vercel`: Adapter for deploying to Vercel.
    *   `@astrojs/react`: Integration for using React components.
    *   `tailwindcss`: Utility-first CSS framework.
    *   `react`, `react-dom`: React library and DOM bindings.

### `astro.config.mjs`

This file contains the configuration for the Astro project.

*   **Purpose:** Configures various aspects of the Astro build process and development server, including integrations and output settings.
*   **Current Configuration:**
    *   `output: 'server'`: Configures Astro to build a server-side rendered application, suitable for deployment on platforms like Vercel.
    *   `adapter: vercel()`: Specifies the Vercel adapter for serverless deployment.
    *   `integrations: [react(), tailwind()]`: Includes the React and Tailwind CSS integrations, enabling the use of React components and Tailwind utilities within the project.

### `tsconfig.json`

This file configures TypeScript for the project.

*   **Purpose:** Specifies compiler options and root files for TypeScript compilation.
*   **Key Settings:**
    *   `extends`: Inherits recommended strict TypeScript configurations from `astro/tsconfigs/strict`.
    *   `include`: Specifies which files should be included in the TypeScript project, including Astro-specific type definitions and all files within the project directory.
    *   `exclude`: Specifies which files or directories should be excluded from TypeScript compilation, in this case, the `dist` directory which contains the production build output.

### `tailwind.config.js`

This file configures Tailwind CSS.

*   **Purpose:** Customizes Tailwind's default configuration, such as defining custom colors, fonts, spacing, and specifying content files to scan for classes.
*   **Configuration:** Includes paths to all template files (`.astro`, `.html`, `.js`, `.jsx`, `.ts`, `.tsx`, `.md`) to ensure Tailwind generates styles for used classes.

### `postcss.config.js`

This file configures PostCSS.

*   **Purpose:** Processes CSS files, often used with Tailwind CSS to handle features like nesting and autoprefixing.
*   **Configuration:** Includes `tailwindcss/nesting` and `tailwindcss` plugins.

## Running the Project

To run the project locally in development mode, use the following command:

```bash
npm run dev
```

To build the project for production, use:

```bash
npm run build
```

To preview the production build locally, use:

```bash
npm run preview