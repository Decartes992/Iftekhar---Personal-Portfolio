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

### `astro.config.mjs`

This file contains the configuration for the Astro project.

*   **Purpose:** Configures various aspects of the Astro build process and development server.
*   **Current Configuration:** The current configuration is minimal, using the default settings provided by `defineConfig({})`. This indicates that most Astro settings are using their default values.

### `tsconfig.json`

This file configures TypeScript for the project.

*   **Purpose:** Specifies compiler options and root files for TypeScript compilation.
*   **Key Settings:**
    *   `extends`: Inherits recommended strict TypeScript configurations from `astro/tsconfigs/strict`.
    *   `include`: Specifies which files should be included in the TypeScript project, including Astro-specific type definitions and all files within the project directory.
    *   `exclude`: Specifies which files or directories should be excluded from TypeScript compilation, in this case, the `dist` directory which contains the production build output.

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