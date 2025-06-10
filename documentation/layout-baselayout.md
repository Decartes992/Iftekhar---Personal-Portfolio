# Base Layout (`src/layouts/BaseLayout.astro`)

This component defines the main HTML structure, head elements, and theme switching logic used across all pages of the portfolio website.

## Purpose

*   Provides a consistent structure (`<header>`, `<main>`, `<footer>`).
*   Includes common `<head>` elements (charset, viewport (`width=device-width, initial-scale=1`), favicon, generator tag).
*   Imports global CSS (`src/styles/global.css`).
*   Includes font preconnect and preload links for performance optimization.
*   Includes the `ViewTransitions` component for page transitions.
*   Injects page-specific content via the `<slot />`.
*   Implements the light/dark theme switching functionality with persistence and system preference detection.
*   Includes a skip link for accessibility.

## Props

*   `title` (string, required): Sets the `<title>` tag for the HTML document.
*   `description` (string, optional): Sets the meta description tag for the HTML document.

## Structure

*   **HTML Shell:** Standard `<!doctype html>`, `<html>`, `<head>`, `<body>`. The `<html>` tag includes a `data-theme` attribute for theme switching.
*   **Head:** Contains meta tags (charset, viewport, favicon, generator, description), font preconnect/preload links, the page `title`, the `ViewTransitions` component, and an inline script for immediate theme application.
*   **Body:**
    *   Skip link (`.skip-link`) for keyboard navigation accessibility.
    *   `<header>`: Contains the main navigation (`<nav>`) and the theme toggle button.
    *   `<main id="main-content">`: Wraps the page content (`<slot />`) and includes an ID for skip links.
    *   `<footer>`: Contains the dynamic copyright year and a client-side updated timestamp.
    *   Inline script for client-side dynamic timestamp update.
    *   Deferred script (`theme-toggle.js`) for theme toggle functionality.
    *   Inline script for managing `is-animating` class for View Transitions.

## Theme Switching Logic

*   **Inline Script (in `<head>`):** Reads theme preference from `localStorage` or system preference (`prefers-color-scheme`) and immediately applies the `data-theme` attribute to the `<html>` element to prevent FOUC.
*   **Deferred Script (`src/scripts/theme-toggle.js`):** Handles user interaction with the theme toggle button, updates the `data-theme` attribute, persists the preference to `localStorage`, respects system changes, syncs across tabs, and handles `astro:after-swap` for View Transitions.
*   **Inline Script (in `<body>`):** Updates the "Site Last Updated" timestamp on `DOMContentLoaded` using client-side JavaScript.

## Styling

*   Relies on `src/styles/global.css` for global layout, typography, colors, theme variables, and base component styles.
*   Component-specific styles are defined within individual component files.

## Hero Component

The `Hero` component is used in `src/pages/index.astro` to display the hero section on the homepage. It accepts props for dynamic content injection, including `headline`, `subheadline`, `ctaText`, `ctaLink`, `imageUrl`, `imageAlt`, and `socialProofLogos`.

### Example Usage in `index.astro`

```astro
import Hero from '../components/Hero.astro';

const heroData = {
  headline: "Welcome to My Portfolio!",
  subheadline: "Discover my projects, skills, and experience.",
  ctaText: "Explore More",
  ctaLink: "#projects",
  imageUrl: "/background-image.jpg",
  imageAlt: "Background Image",
  socialProofLogos: [{ src: "/logo1.png", alt: "Client Logo 1" }]
};

<Hero {...heroData} />
```

This documentation is kept synchronized with the code changes to accurately reflect the structure and functionality of the BaseLayout component.