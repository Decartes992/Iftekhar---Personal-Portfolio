# Debugging Plan for Portfolio Pages (Projects, About, Contact)

## Files to Review:
- `src/components/ProjectsSection.astro`
- `src/pages/projects.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- Related components (`ProjectCard.astro`, `ProjectFilterSort.jsx`, `ProjectCard3D.jsx`, `SkillRadarChart.jsx`, `AnimatedTimeline.jsx`, `ContactForm.jsx`, `ParticleBackground.jsx`, `SectionDivider.jsx`)
- `src/data/aboutData.ts`

## Potential Issues & Tasks:

1.  **`ProjectsSection.astro` / `ProjectCard.astro` - Link Fallbacks:**
    *   Investigate: `demoUrl` and `codeUrl` passed directly; fallback needed checking.
    *   Fix: Modified `ProjectCard.astro` to conditionally render links only if URLs are provided.
    *   Status: Done

2.  **`projects.astro` - Featured Projects Logic:**
    *   Investigate: Logic `projects.slice(0, 2)` selected first two projects, but `ProjectCard3D` received `featured={true}` regardless.
    *   Fix: Updated to filter by `project.data.featured` and pass the correct value.
    *   Status: Done

3.  **`projects.astro` / `ProjectsSection.astro` - Inconsistent Tag Property:**
    *   Investigate: `projects.astro` used `project.data.tags || []`. `ProjectsSection.astro` used `project.data.tags || project.data.technologies`.
    *   Fix: Standardized both to use `project.data.tags || project.data.technologies || []`.
    *   Status: Done

4.  **`about.astro` - Hardcoded Data:**
    *   Investigate: Skills and Experience data were hardcoded.
    *   Fix: Moved data to `src/data/aboutData.ts` and updated `about.astro` to import it.
    *   Status: Done (Enhancement)

5.  **General - Component Prop Handling:**
    *   Investigate: Ensure client components receive and use props correctly.
    *   Fix: Added missing props (`bgColor`, `flipX`, `width` for `SectionDivider`; `maxConnectDistance`, `minSize`, `maxSize`, `minSpeed`, `maxSpeed` for `ParticleBackground`) with default values based on component definitions.
    *   Status: Done

6.  **General - Check for Errors:**
    *   Task: Run `get_errors` on reviewed files.
    *   Fixes:
        *   Updated `src/content/config.ts` to include optional `tags`, `image`, `demoUrl`, `codeUrl`, `featured` in `projectsCollection` schema.
        *   Fixed missing props in `SectionDivider` and `ParticleBackground` calls (see point 5).
        *   Removed comment causing false positive error in `projects.astro`.
    *   Status: Done (No errors reported after fixes)

## Debugging Log:

*   **April 30, 2025** - Created initial debugging plan. Identified potential issues 1-5. Added task 6.
*   **April 30, 2025** - Ran error check (Task 6). Found and fixed schema issues in `config.ts` and missing props in component calls (`SectionDivider`, `ParticleBackground`) across `projects.astro`, `about.astro`, `contact.astro`. Standardized tag usage (Task 3). Corrected featured projects logic (Task 2). Re-ran error check, confirmed no errors.
*   **April 30, 2025** - Addressed link fallbacks (Task 1) by conditionally rendering links in `ProjectCard.astro`.
*   **April 30, 2025** - Refactored hardcoded data (Task 4) from `about.astro` into `src/data/aboutData.ts`.