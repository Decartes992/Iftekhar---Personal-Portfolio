# Comprehensive Documentation Plan for Personal Portfolio (Astro)

**Version:** 1.0
**Date:** 2025-04-26

## 1. Introduction & Overview

*   **File:** `personal-portfolio/documentation/project_overview.md` (New File)
*   **Content:**
    *   Purpose of the personal portfolio website.
    *   High-level description of the technology stack (Astro, CSS, etc.).
    *   Brief overview of the project structure (key directories like `src`, `public`, `documentation`).
    *   Link to the live deployment (if applicable).
    *   Link to the GitHub repository.

## 2. Project Setup & Configuration

*   **File:** `personal-portfolio/documentation/project-setup.md` (Update Existing)
*   **Content:**
    *   Prerequisites (Node.js version, npm/yarn).
    *   Steps for cloning the repository.
    *   Installation instructions (`npm install`).
    *   How to run the development server (`npm run dev`).
    *   How to build the project (`npm run build`).
    *   Explanation of `astro.config.mjs`: Key configurations, integrations used.
    *   Explanation of `package.json`: Core dependencies, scripts.
    *   Explanation of `tsconfig.json`: TypeScript configuration relevant to Astro.

## 3. Core Layout

*   **File:** `personal-portfolio/documentation/layout-baselayout.md` (Update Existing)
*   **Content:**
    *   Purpose of `BaseLayout.astro` as the foundational layout for all pages.
    *   Explanation of the HTML structure (header, main, footer).
    *   Description of props accepted by the layout (e.g., `title`).
    *   **Theme Switching Logic:** Detailed explanation of how the light/dark theme toggle works (JavaScript involved, CSS variables, local storage usage).
    *   Integration of global styles.

## 4. Styling

*   **File:** `personal-portfolio/documentation/styles-global.md` (Update Existing)
*   **Content:**
    *   Purpose of `src/styles/global.css`.
    *   Explanation of base styles, resets, and utility classes.
    *   Description of CSS variables used, especially for theming.
    *   Notes on responsive design approaches.

## 5. Page Components

*   **General Approach:** Document each page component in its own file within the `documentation` directory.
*   **Files:**
    *   `personal-portfolio/documentation/page-index.md` (Update Existing)
    *   `personal-portfolio/documentation/page-about.md` (Update Existing)
    *   `personal-portfolio/documentation/page-projects.md` (Update Existing)
    *   `personal-portfolio/documentation/page-resume.md` (Update Existing)
    *   `personal-portfolio/documentation/page-contact.md` (Update Existing)
*   **Content (for each page file):**
    *   Purpose and content of the specific page (e.g., `index.astro` is the homepage).
    *   Any specific components imported or used only on this page.
    *   Data fetching or specific logic (if any).
    *   Relationship to `BaseLayout.astro`.

## 6. Public Assets

*   **File:** `personal-portfolio/documentation/public_assets.md` (New File)
*   **Content:**
    *   Explanation of the `public/` directory.
    *   List of key static assets (e.g., `favicon.svg`, images, fonts if any).
    *   How assets in `public/` are served.

## 7. Deployment

*   **File:** `personal-portfolio/documentation/deployment.md` (New File)
*   **Content:**
    *   Instructions or description of the deployment process (e.g., Netlify, Vercel, GitHub Pages).
    *   Build command used for deployment (`npm run build`).
    *   Any environment variables required.

## 8. Future Enhancements / Contribution Guide (Optional)

*   **File:** `personal-portfolio/documentation/contributing_roadmap.md` (New File)
*   **Content:**
    *   Ideas for future features or improvements.
    *   Guidelines for contributing (if the project is open source or collaborative).
    *   Coding style conventions.

## 9. Development Documentation

*   **Directory:** `personal-portfolio/documentation/dev_docs/`
*   **Purpose:** Contains documents relevant to the development *process*, like this plan, guides for tools, etc.
*   **Files:**
    *   `comprehensive_documentation_plan.md` (This file)
    *   `chatbot_guide.md` (Existing)
    *   *(Other development-related documents as needed)*

---

**Next Steps:** Proceed with writing or updating the content for each file listed above based on the actual codebase.