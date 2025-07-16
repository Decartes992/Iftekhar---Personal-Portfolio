# Astro Configuration (`astro.config.mjs`)

**Purpose:** This file defines the main configuration for the Astro project, controlling build settings, integrations, and deployment adapters.

**Reference:** [Astro Configuration Documentation](https://docs.astro.build/en/guides/configuring-astro/)

## Current Configuration

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Specifies Server-Side Rendering (SSR) output
  adapter: vercel({}), // Uses the Vercel adapter for deployment
  integrations: [
    react(), // Enables React component usage
    tailwind() // Enables Tailwind CSS utility classes
  ],
});
```

## Key Settings Explained

*   **`output: 'server'`**: Configures Astro to build the application for server-side rendering (SSR). This is necessary for dynamic features and deployment to serverless or edge platforms like Vercel.
*   **`adapter: vercel({})`**: Integrates the `@astrojs/vercel` adapter. This adapter modifies the build output to be compatible with Vercel's serverless and edge function environments, enabling seamless deployment.
*   **`integrations: [react(), tailwind()]`**: An array containing the integrations used in the project:
    *   `react()`: Provided by `@astrojs/react`, this allows importing and rendering React (`.jsx`, `.tsx`) components within Astro (`.astro`) files.
    *   `tailwind()`: Provided by `@astrojs/tailwind`, this sets up Tailwind CSS, including PostCSS configuration, allowing the use of Tailwind utility classes throughout the project.