# Personal Portfolio Website Plan (Using Astro)

## Goals
*   Find a full-time job
*   Attract freelance clients
*   Showcase work and build personal brand

## Content Requirements
*   Resume Details (Work Experience, Education, Certifications)
*   Projects (Descriptions, Tech Used, Links, Visuals)
*   Skills (Technical & Soft)
*   Contact Information (Email, Professional Links)
*   About Me/Bio

## Phase 1: Content Gathering & Organization
1.  **Compile Information:** Gather all necessary details as listed under "Content Requirements".
2.  **Structure Content:** Organize the gathered information logically. Consider using Markdown files (e.g., `src/content/about.md`) or a `src/data/` directory with JSON/YAML files (e.g., `src/data/projects.json`).

## Phase 2: Design & Website Structure
1.  **Define Sections/Pages:**
    *   Home/Landing Page (`src/pages/index.astro`)
    *   About (`src/pages/about.astro`)
    *   Projects (`src/pages/projects.astro`)
    *   Skills/Resume (`src/pages/resume.astro` or integrated)
    *   Contact (`src/pages/contact.astro` or integrated)
2.  **Visual Style:**
    *   **Theme:** Dark theme by default, with a user-toggleable light theme.
    *   **Aesthetics:** Incorporate graphical elements, illustrations, and subtle animations.
    *   **Layout:** Clean, modern, and responsive design.
3.  **Website Flow (Conceptual):**
    ```mermaid
    graph TD
        A[Home Page] --> B(About);
        A --> C(Projects);
        A --> D(Skills/Resume);
        A --> E(Contact);
        C --> F{Project Detail Page (Optional)};
        D --> G{Downloadable Resume Link};
        E --> H{Contact Method (e.g., Email Link)};
    ```

## Phase 3: Technical Implementation (Using Astro)
1.  **Project Setup (Astro):**
    *   Initialize a new Astro project: `npm create astro@latest` (or yarn/pnpm).
    *   Choose a starter template (e.g., "Empty" or "Blog").
    *   Project Structure:
        *   `src/pages/`: `.astro` files for pages.
        *   `src/layouts/`: Reusable page layout components (e.g., `BaseLayout.astro`).
        *   `src/components/`: Reusable UI components (e.g., `Header.astro`, `ProjectCard.astro`, `ThemeToggle.jsx/astro`).
        *   `src/styles/`: Global CSS (e.g., `global.css`).
        *   `src/content/` or `src/data/`: For Markdown or data files.
        *   `public/`: Static assets (images, fonts, resume PDF).
2.  **Build Layouts & Pages:** Create the main site layout and individual pages using `.astro` components. Fetch/import content.
3.  **CSS Styling:**
    *   Implement global styles and theme variables (`src/styles/global.css`).
    *   Use scoped `<style>` tags within components.
    *   Implement dark/light themes using CSS variables.
    *   Add styles for graphics and animations.
4.  **JavaScript & Interactivity:**
    *   Use standard `<script>` tags for basic client-side JS.
    *   Create components for theme toggle and complex interactions/animations (using Astro scripts or integrating a UI framework like React/Vue/Svelte via `npx astro add [framework]`).

## Phase 4: Deployment
1.  **Choose Hosting:** GitHub Pages, Netlify, Vercel.
2.  **Build:** Run `npm run build` (or equivalent).
3.  **Deploy:** Upload the contents of the `dist/` folder.

## Phase 5: Iteration & Future Enhancements
*   Refine content and design based on feedback.
*   Add more complex animations or interactions.
*   Consider adding a blog section.
*   Implement a contact form backend if needed (may require different hosting/services).