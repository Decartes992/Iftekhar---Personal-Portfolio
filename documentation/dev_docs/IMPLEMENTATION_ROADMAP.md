# Personal Portfolio Project - Implementation Roadmap (Dynamic Features)

This roadmap outlines the proposed order and tasks for implementing the dynamic features planned in DYNAMIC_FEATURES_PLAN.md.

## Phase 1: Project Setup & Configuration (Foundation)

**Goal:** Configure the Astro project according to the architectural decisions in Section II of DYNAMIC_FEATURES_PLAN.md before building features.

**Tasks:**

*   [ ] 1.1. Configure Astro Output: Modify `astro.config.mjs` to set `output: 'server'`.
*   [ ] 1.2. Add Vercel Adapter: Install and configure `@astrojs/vercel` in `astro.config.mjs`.
*   [ ] 1.3. Add React Integration: Install and configure `@astrojs/react` in `astro.config.mjs`.
*   [ ] 1.4. Add Tailwind CSS: Install and configure Tailwind CSS, including `tailwind.config.js` and necessary PostCSS settings in `astro.config.mjs`.
*   [ ] 1.5. Set up Content Collections: Create `src/content/config.ts` and define initial schemas for blog and projects. Create corresponding content folders (`src/content/blog/`, `src/content/projects/`). Add sample content.
*   [ ] 1.6. Set up Task Tracking: Create the `personal-portfolio/documentation/dev_docs/To Do/` folder.
*   [ ] 1.7. Update Documentation: Ensure `project-setup.md` reflects the new config (Server output, React, Tailwind, Vercel adapter). Update `chatbot_guide.md` if major structural changes occurred.

## Phase 2: Core Dynamic Features

**Goal:** Implement the essential dynamic functionalities.

**Tasks (Suggested Order):**

*   [ ] 2.1. Implement Contact Form (3.1):
    *   [ ] Create the frontend React component for the form (using Tailwind for styling).
    *   [ ] Implement client-side validation.
    *   [ ] Create the Astro API route (`src/pages/api/contact.ts`) to handle POST requests.
    *   [ ] Implement server-side validation in the API route.
    *   [ ] Integrate with the chosen email service API (e.g., Resend) using environment variables.
    *   [ ] Create/update documentation for the form component and API route.
*   [ ] 2.2. Implement Blog Section (3.2):
    *   [ ] Create the main blog listing page (`src/pages/blog/index.astro`) fetching data from Content Collections.
    *   [ ] Create the individual blog post page template (`src/pages/blog/[slug].astro`).
    *   [ ] Implement category/tag pages (`src/pages/blog/tags/[tag].astro`).
    *   [ ] Add basic styling using Tailwind.
    *   [ ] Create/update documentation.
*   [ ] 2.3. Implement Project Listing & Filtering (3.3):
    *   [ ] Create/update the main projects page (`src/pages/projects.astro`) to list projects from Content Collections.
    *   [ ] Implement the filtering/sorting UI (React component using Tailwind).
    *   [ ] Implement the filtering/sorting logic (likely client-side JS fetching all project data initially, or using an API route if data becomes very large).
    *   [ ] Create/update documentation.

## Phase 3: Enhancements - Visualizations & Interactivity

**Goal:** Add the more complex interactive and visual elements. (Order within this phase can be flexible).

**Tasks:**

*   [ ] 3.1. Implement Core Page Updates (Part 1 - 3.6):
    *   [ ] Update Homepage (`index.astro`) to dynamically display recent blog post cards.
    *   [ ] Update Footer (in `BaseLayout.astro`) with dynamic year and potentially "last updated" info.
*   [ ] 3.2. Implement Interactive Visualizations (3.4):
    *   [ ] Implement the "common dashboard" elements on project pages (Tech Stack, Duration).
    *   [ ] Choose one specific project and implement its unique visualization (e.g., architecture diagram or performance chart) as a proof-of-concept. Research and select the specific JS library (e.g., Mermaid.js, Chart.js) for this first visualization.
    *   [ ] Implement skill visualizations on the Resume/Skills page.
    *   [ ] Create/update relevant documentation.
*   [ ] 3.3. Implement Games/Interactive Demos (3.5):
    *   [ ] Choose one specific project demo or small game element to implement first.
    *   [ ] Select technology (React/JS or a library like Phaser).
    *   [ ] Implement and embed it on the relevant page.
    *   [ ] Create/update documentation.

## Phase 4: Polish & Final Review

**Goal:** Refine styling, ensure responsiveness, and perform final checks.

**Tasks:**

*   [ ] 4.1. Styling & Responsiveness: Thorough review and refinement of Tailwind styles across all pages and components. Test on various screen sizes.
*   [ ] 4.2. Accessibility Check: Perform basic accessibility checks (semantic HTML, keyboard navigation, color contrast).
*   [ ] 4.3. Documentation Review: Ensure all documentation is accurate and up-to-date.
*   [ ] 4.4. Code Cleanup: Refactor code where needed, remove console logs, etc.

## Phase 5: Deployment & Launch

**Goal:** Deploy the website to Vercel and make it live.

**Tasks:**

*   [ ] 5.1. Configure Vercel Environment Variables: Add all necessary secrets (e.g., Resend API key) to Vercel dashboard settings.
*   [ ] 5.2. Deploy to Preview: Trigger a deployment to Vercel's preview environment.
*   [ ] 5.3. End-to-End Testing: Thoroughly test all features (contact form submission, blog loading, filtering, visualizations, responsiveness) on the preview deployment.
*   [ ] 5.4. Configure Custom Domain (5.4): Add and verify custom domain in Vercel and update DNS records.
*   [ ] 5.5. Production Deployment: Promote the preview deployment to production or trigger a production deployment from the main branch.
*   [ ] 5.6. Final Live Testing.