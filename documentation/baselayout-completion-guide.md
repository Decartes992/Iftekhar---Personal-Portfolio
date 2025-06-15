# BaseLayout Completion Guide

This document summarizes the current state of `src/layouts/BaseLayout.astro` and provides guidance on how to finish and improve it according to the repository's design plans.

## Current State

`BaseLayout.astro` establishes global styles, the header, footer placeholder, and scripts for theme management and page transitions. Key sections include:

- **Imports and Props** – Global CSS, `ViewTransitions`, `Header`, `ThemeToggleButton`, and basic props (`title`, `description`).
- **Head Section** – Meta tags, font preloads, the `ViewTransitions` component, and an inline script that detects the initial theme and applies the `data-theme` attribute plus the `dark` class.
- **Body** –
  - Skip‑link for accessibility.
  - `<Header />` component.
  - `<main>` wrapper using `<slot>` for page content.
  - A simple footer containing copyright text and a site‑updated timestamp.
  - Inline scripts for timestamp updates, view transition classes, and a subtle button click animation.
  - External `/scripts/theme-toggle.js` (deferred) for theme toggle handling.

Overall the layout works but lacks polish—footer componentization, consistent styling, SEO defaults, and progressive enhancement for new features described in the documentation.

## Missing or Incomplete Features

1. **Footer Component** – Only a basic placeholder exists. The UI overhaul plan outlines a richer footer with newsletter signup and social links. Create a `Footer.astro` component and replace the inline markup.
2. **Metadata Defaults** – Additional meta tags (Open Graph, Twitter Card) are recommended for SEO. Add props or defaults in the layout for these tags.
3. **Font Loading Optimization** – The docs suggest preloading fonts with `link rel="preload" as="font" type="font/woff2" crossorigin`. Add these for the Inter and Satoshi variable fonts.
4. **View Transition Classes** – The script toggles `is-animating`; ensure the class is defined in global CSS for fade/slide effects.
5. **Accessibility & ARIA** – The skip‑link uses the class `skip-link`; add styles in global CSS and ensure focus outlines are visible. Header navigation should also reflect focus management guidelines.
6. **Cleanup Inline Scripts** – Move the button pulse effect and timestamp logic into small client scripts under `src/scripts/` and load them with `type="module"` and `defer` to keep the layout concise.
7. **Head Tag Improvements** – Include `<Astro.clientAddress />` or `<Astro.host />` if server rendering is used. Also add `<meta name="theme-color">` that updates with the current theme via JavaScript.
8. **Structured Data and Analytics** – The UI plan references JSON‑LD, analytics, and meta tags. Provide a slot or component area to inject these as needed.

## Completion Steps

1. **Create `Footer.astro`**
   - Move the footer markup into a new component under `src/components`.
   - Add props for social links and copyright year.
   - Import and use this component inside `BaseLayout.astro`.
2. **Enhance Head Metadata**
   - Extend the props interface to accept optional `ogImage`, `ogTitle`, and `ogDescription`.
   - Add Open Graph and Twitter meta tags falling back to `title` and `description`.
   - Include viewport and generator tags as already present.
3. **Refactor Inline Scripts**
   - Extract the timestamp script and button‑pulse logic into separate files in `public/scripts` or `src/scripts`.
   - Load them with `type="module"` and the `defer` attribute.
4. **Optimize Font Loading**
   - Preload the variable font files and provide `font-display: swap` in CSS.
5. **Add Theme‑Color Meta**
   - Inside the theme script, update `<meta name="theme-color">` based on the applied theme to match the primary background color.
6. **Document Usage**
   - Update this guide as changes land so contributors know how to maintain the layout.

Following these steps will align `BaseLayout.astro` with the design and theme system improvements described in the repository documentation.
