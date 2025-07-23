# How to Use This Guide

Welcome to the comprehensive codebase guide for this project. This document is the master reference for all architecture, components, data structures, and styling decisions. It is designed to power a chatbot or assist any developer in quickly understanding and navigating the codebase.

**Example questions you can ask the chatbot:**
- What props does the `AnimatedTimeline.jsx` component accept?
- Explain the data schema for a blog post.
- Which components are used on the `projects.astro` page?
- How does the theme toggle script work?
- What CSS variables define the primary color palette?

---

# Project Core Architecture

## Base Layout (`BaseLayout.astro`)

**Purpose:**
- Serves as the foundational HTML structure for all pages.
- Provides global styling, head metadata, and shared layout elements.

**Props:**
| Prop Name   | Type   | Required? | Description                                      |
|------------|--------|-----------|--------------------------------------------------|
| title      | string | Yes       | Page title, used in the <title> tag.             |
| description| string | No        | Meta description for SEO. Defaults to portfolio.  |
| lastUpdated| Date   | No        | Date the content was last updated (for footer).   |

**Slots:**
- `<slot />` is used to inject page-specific content into the main layout.

**Global Scripts:**
- **Theme Initialization Script:**
  - Reads the user's theme preference from `localStorage` or system settings.
  - Sets the `data-theme` attribute and toggles the `dark` class on `<html>` to prevent Flash of Unstyled Content (FOUC).
- **Page Load & Interaction Script:**
  - Handles scroll-driven header style changes.
  - Adds micro-interaction pulse effect to buttons.
  - Initializes AOS (Animate on Scroll) for scroll animations.
  - Cleans up event listeners on page transitions.

**Shared Components:**
- Includes `Header.astro` and `Footer.astro` on every page.
- Also includes a custom cursor (`CustomCursor.jsx`).

---

## Design System & Styling

### Theme Variables (from `src/styles/global.css`)

**Styling Philosophy:**
- Uses CSS custom properties (variables) to power a themeable design system.
- Variables are grouped for light (`:root`) and dark (`[data-theme="dark"]`) modes.
- Tailwind utility classes are mapped to these variables for consistency.

**Key Variable Groups:**

- **Primary Palette:**
  - `--clr-primary-50` to `--clr-primary-900`: Shades of the primary color.
- **Secondary & Accent:**
  - `--clr-secondary`, `--clr-accent`, and their light/dark variants.
- **Neutrals:**
  - `--clr-neutral-100` to `--clr-neutral-950`: Grayscale for backgrounds, borders, etc.
- **Semantic Colors:**
  - `--clr-text-base`, `--clr-bg-base`, etc. for text and background in both themes.
- **Gradients:**
  - `--gradient-primary`, `--gradient-secondary`, etc.
- **Glassmorphism:**
  - `--glass-bg`, `--glass-border`, `--glass-shadow` for glass effects.
- **Typography:**
  - `--font-primary`, `--font-display`, `--font-code`, etc.
  - Font sizes: `--fs-xs` to `--fs-6xl`.
- **Spacing, Border Radius, Transitions:**
  - `--space-*`, `--rounded-*`, `--transition-*`.

### Tailwind Configuration (`tailwind.config.js`)

**Integration:**
- Tailwind is configured to use the CSS variables from `global.css` for all core colors, backgrounds, and text utilities.
- This makes all Tailwind classes theme-aware and consistent with the design system.

**Customization:**
- **Fonts:**
  - Custom font families: `Inter Variable` (primary), `Satoshi Variable` (display), `JetBrains Mono` (code), `Playfair Display` (accent).
- **Colors:**
  - All primary, secondary, accent, and neutral colors are mapped to CSS variables.
- **Font Sizes:**
  - Tailwind font sizes are mapped to the custom scale defined in CSS variables.
- **Animations & Keyframes:**
  - Custom animations: fade-in, slide, pulse, shake, float, gradient-shift, etc.
- **Plugins:**
  - Includes `@tailwindcss/typography` and `@tailwindcss/forms` for enhanced prose and form styling.

---

## Content Schemas (`src/content/config.ts`)

### Blog Collection

| Field Name    | Type           | Description                                 |
|---------------|----------------|---------------------------------------------|
| title         | string         | Post title                                  |
| date          | date (optional)| Optional date (legacy, use pubDate)         |
| pubDate       | date           | Publication date (primary)                  |
| description   | string         | Short description                           |
| tags          | array<string> (optional) | Tags for categorization         |
| image         | string (optional) | Optional image path                     |
| author        | string (default: 'Iftekhar Rafi') | Author name         |
| category      | string (optional) | Optional category                        |

### Projects Collection

| Field Name    | Type           | Description                                 |
|---------------|----------------|---------------------------------------------|
| title         | string         | Project title                               |
| description   | string         | Short description                           |
| technologies  | array<string>  | Technologies used                           |
| tags          | array<string> (optional) | Additional tags                  |
| image         | string (optional) | Optional image path                     |
| demoUrl       | string (url, optional) | URL to live demo                    |
| codeUrl       | string (url, optional) | URL to source code                  |
| featured      | boolean (optional) | Whether project is featured             |
| type          | string         | Project type                                |
| startDate     | date (optional)| Project start date                          |
| endDate       | date (optional)| Project end date                            |
| status        | string (optional) | Project status (e.g., Completed)         |
| client        | string (optional) | Client name                              |
| repoUrl       | string (url, optional) | Repo URL if different from codeUrl   |
| techStack     | array<string> (optional) | More specific tech stack           |

---

# Page Anatomy

## Routing Overview

The project uses Astro's file-based routing. Each file in `src/pages/` maps to a URL path:

| File Path                                 | URL Path                |
|-------------------------------------------|-------------------------|
| src/pages/index.astro                     | /                       |
| src/pages/about.astro                     | /about                  |
| src/pages/projects.astro                  | /projects               |
| src/pages/contact.astro                   | /contact                |
| src/pages/resume.astro                    | /resume                 |
| src/pages/blog/index.astro                | /blog                   |
| src/pages/blog/[...slug].astro            | /blog/[slug]            |
| src/pages/blog/tags/[tag].astro           | /blog/tags/[tag]        |

---

## index.astro (Home Page)

**Purpose:**
- The main portfolio landing page, introducing the developer and providing quick access to key sections.

**Components Used:**
- `Hero.astro` (hero section)
- `ParticleBackground.jsx` (animated background)
- `SectionDivider.jsx` (decorative section dividers)
- `AnimatedStatsCounter.jsx` (animated stats)
- `About.astro` (about section)
- `ProjectsSection.astro` (project showcase)
- `ContactForm.jsx` (contact form)

**Data Usage:**
- Hero and stats data are defined inline in the page.
- All other content is composed from imported components.

---

## about.astro (About Page)

**Purpose:**
- Provides a detailed personal and professional background, including skills and experience.

**Components Used:**
- `SkillRadarChart.jsx` (visualizes skills)
- `AnimatedTimeline.jsx` (professional journey)
- `SectionDivider.jsx` (section transitions)

**Data Usage:**
- Imports `skillsData` and `experienceData` from `src/data/aboutData.ts`.
- Passes this data to the relevant components.

---

## projects.astro (Projects Page)

**Purpose:**
- Showcases featured and all projects, with filtering and sorting capabilities.

**Components Used:**
- `ProjectCard3D.jsx` (featured projects)
- `ProjectFilterSort.jsx` (all projects, filter/sort UI)
- `SectionDivider.jsx` (section transitions)

**Data Usage:**
- Fetches all projects using `getCollection('projects')` from Astro Content Collections.
- Filters for featured projects and passes all project data to components.

---

## contact.astro (Contact Page)

**Purpose:**
- Provides contact information and a form for visitors to reach out.

**Components Used:**
- `ContactForm.jsx` (contact form)
- `ParticleBackground.jsx` (animated background)
- `SectionDivider.jsx` (section transitions)

**Data Usage:**
- All contact details are hardcoded in the page.
- The form is handled by the `ContactForm` component.

---

## resume.astro (Resume Page)

**Purpose:**
- Displays a detailed, interactive resume including skills, work experience, projects, education, and certifications.

**Components Used:**
- `InteractiveResumeSection.jsx` (collapsible sections for each resume area)
- Various icon components from `@heroicons/react/outline`

**Data Usage:**
- Imports `resumeData` and related types from `src/data/aboutData.ts`.
- Groups and maps data to sections and components.

---

## Blog Pages

### blog/index.astro (Blog Listing)

**Purpose:**
- Lists all blog posts, with a featured post and posts grouped by year.

**Components Used:**
- `BlogPostCard.jsx` (for each post)

**Data Usage:**
- Fetches all blog posts using `getCollection('blog')`.
- Sorts and groups posts by year and tag.

---

### blog/[...slug].astro (Blog Post Detail)

**Purpose:**
- Renders a single blog post, including metadata, content, and table of contents.

**Components Used:**
- `Image` from `astro:assets` (for post images)

**Data Usage:**
- Fetches the post by slug using `getEntryBySlug`.
- Renders markdown content and generates a table of contents from headings.

---

### blog/tags/[tag].astro (Tag Archive)

**Purpose:**
- Lists all blog posts associated with a specific tag.

**Components Used:**
- `BlogPostCard.jsx` (for each post)

**Data Usage:**
- Fetches all blog posts and filters by tag.

---

_Phase 2 complete. The above detailed analysis of page composition and routing has been added to `CHATBOT_GUIDE.md`._
