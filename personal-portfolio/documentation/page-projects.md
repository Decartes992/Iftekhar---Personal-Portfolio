# Projects Page

Documentation for `src/pages/projects.astro`.

## Purpose
This file defines the content for the "Projects" page of the personal portfolio website. It is used to showcase the projects the portfolio owner has contributed to, detailing their involvement, contributions, and the technologies used.

## Layout
The page uses the `BaseLayout.astro` component to provide a consistent header, footer, and basic page structure. The content specific to the projects page is placed within the `BaseLayout`.

## Content
The main content of the Projects page includes:
- A main heading: "My Projects"
- An introductory paragraph.
- A detailed section for the "MILTON - AI-Powered Training Decisions" project, which includes:
    - Project Overview
    - My Role & Contributions (covering Frontend, DIF Service, KSA Service, and Documentation)
    - Detailed Contributions within each area (e.g., Implementing User Authentication, Improving DIF Scoring Algorithm, Resolving Bug in KSA Extraction Logic, Updating Architecture Diagram)
    - Technical Skills Demonstrated (e.g., Python, JavaScript/React, Docker, Git, API Development, Understanding of AI/ML Systems)
    - Outcomes & Impact

There is a placeholder comment indicating where other project details can be added.

## Structure and Components
The page structure uses standard HTML elements (`<h1>`, `<p>`, `<article>`, `<h2>`, `<h3>`, `<ul>`, `<li>`) wrapped by the `BaseLayout` component. The `<article>` element is used to semantically group the details for each project. No unique or custom components are used on this page currently, other than the `BaseLayout`.