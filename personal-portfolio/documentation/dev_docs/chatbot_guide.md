# Chatbot Guide: Personal Portfolio Project

This guide provides context for the AI assistant (Roo) interacting with the `personal-portfolio` codebase.

## Project Overview

This project is a personal portfolio website built using the Astro framework. It showcases the owner's skills, projects, resume, and provides contact information. The goal is to present a professional online presence.

## Technologies Used

*   **Framework:** Astro (v^5.7.5)
*   **Styling:** CSS (`personal-portfolio/src/styles/global.css`), Tailwind CSS
*   **Language:** Astro components (`.astro`), TypeScript (implied by `tsconfig.json`), React (`.jsx`, `.tsx`)
*   **Package Manager:** npm (implied by `package.json`, `package-lock.json`)
*   **Deployment Adapter:** Vercel (`@astrojs/vercel`)

## Directory Structure

```
personal-portfolio/
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── documentation/          # Contains documentation files
│   ├── layout-baselayout.md
│   ├── page-about.md
│   ├── page-contact.md
│   ├── page-index.md
│   ├── page-projects.md
│   ├── page-resume.md
│   ├── project-setup.md
│   └── styles-global.md
├── public/                 # Static assets
│   └── favicon.svg
├── src/                    # Source code
│   ├── layouts/            # Reusable page layouts
│   │   └── BaseLayout.astro
│   ├── pages/              # Site pages/routes
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── resume.astro
│   └── styles/             # Global styles
│       └── global.css
```

## Documentation Files

The `/personal-portfolio/documentation/` directory contains markdown files explaining different parts of the codebase:

*   **Setup & Config:** For project setup and configuration details, see `personal-portfolio/documentation/project-setup.md`.
*   **Base Layout:** For details on the main site layout, see `personal-portfolio/documentation/layout-baselayout.md`.
*   **Index Page:** For details on the main page (`/`), see `personal-portfolio/documentation/page-index.md`.
*   **About Page:** For details on the About page (`/about`), see `personal-portfolio/documentation/page-about.md`.
*   **Contact Page:** For details on the Contact page (`/contact`), see `personal-portfolio/documentation/page-contact.md`.
*   **Projects Page:** For details on the Projects page (`/projects`), see `personal-portfolio/documentation/page-projects.md`.
*   **Resume Page:** For details on the Resume page (`/resume`), see `personal-portfolio/documentation/page-resume.md`.
*   **Global Styles:** For details on the global CSS, see `personal-portfolio/documentation/styles-global.md`.

## Documentation-Code Relationship

Documentation files generally correspond to specific source code files:

*   `project-setup.md`: Relates to `astro.config.mjs`, `package.json`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`.
*   `layout-baselayout.md`: Documents `src/layouts/BaseLayout.astro`.
*   `page-index.md`: Documents `src/pages/index.astro`.
*   `page-about.md`: Documents `src/pages/about.astro`.
*   `page-contact.md`: Documents `src/pages/contact.astro`.
*   `page-projects.md`: Documents `src/pages/projects.astro`.
*   `page-resume.md`: Documents `src/pages/resume.astro`.
*   `styles-global.md`: Documents `src/styles/global.css`.

## Standing Rule

Documentation in `/personal-portfolio/documentation/` should be automatically updated by ROO when corresponding code changes are made.