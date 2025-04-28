# Deployment (Server-Side Rendering - SSR)

This document outlines the process for deploying the Astro personal portfolio website, which is configured for **Server-Side Rendering (SSR)** (`output: 'server'` in `astro.config.mjs`). This differs significantly from deploying a static Astro site.

## Build Process for SSR

Building an SSR project still uses the standard build command:

```bash
npm run build
```

However, unlike a static build which outputs ready-to-serve HTML/CSS/JS files in `dist/`, an SSR build generates:

*   A `dist/server/` directory containing the server entry point (e.g., `entry.mjs`).
*   A `dist/client/` directory containing client-side assets (CSS, JS, images).

The output is not a self-contained static site but rather code intended to be run by a Node.js server environment provided by the hosting platform.

## Hosting for SSR

SSR applications require hosting platforms that support Node.js runtime environments. Static hosting providers like GitHub Pages are **not suitable**. Recommended platforms include:

*   **Vercel:** Offers excellent support for Astro SSR, often with zero configuration when using the correct adapter.
*   **Netlify:** Also supports Astro SSR deployment.
*   **Cloudflare Pages:** Supports Astro SSR via Functions.
*   Other Node.js hosting platforms (e.g., Render, Fly.io, traditional VPS).

**Crucially, deploying an SSR Astro site requires installing and configuring the appropriate adapter for your chosen hosting platform.** This adapter integrates Astro's server output with the platform's specific runtime.

## Deployment to Vercel (Recommended)

Vercel is a common choice for Astro SSR deployment.

1.  **Install Vercel Adapter:** Add the official Astro Vercel adapter:
    ```bash
    npm install @astrojs/vercel/server
    # or yarn add / pnpm add
    ```
2.  **Configure Adapter:** Add the adapter to your `astro.config.mjs`:
    ```javascript
    // astro.config.mjs
    import { defineConfig } from 'astro/config';
    import vercel from '@astrojs/vercel/server'; // Import the adapter
    import react from '@astrojs/react';

    export default defineConfig({
      output: 'server', // Ensure this is 'server'
      adapter: vercel(), // Add the adapter instance
      integrations: [react()],
    });
    ```
    *   **Note:** As of the last review, the Vercel adapter import and usage were commented out in the project's `astro.config.mjs`. This needs to be uncommented and correctly configured for Vercel deployment.
3.  **Connect Repository:** Connect your Git repository (GitHub, GitLab, Bitbucket) to Vercel.
4.  **Configure Project:** Vercel usually auto-detects Astro projects. Ensure the build command is `npm run build` and the framework preset is Astro. Vercel handles the output directory and server setup automatically when the adapter is used.
5.  **Deploy:** Push changes to your main branch or trigger a manual deployment via the Vercel dashboard.

Vercel will then build the project using the adapter, deploy the server and client assets, and provide a URL for the live application.