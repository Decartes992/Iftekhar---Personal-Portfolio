# Index Page

Documentation for `src/pages/index.astro`.

## Purpose
This file defines the content for the home page of the personal portfolio website. It serves as the initial landing page for visitors.

## Layout
The page uses the `BaseLayout.astro` component to provide a consistent header, footer, and basic page structure. The `BaseLayout` now accepts `title` and `description` props, which are set appropriately for the homepage. The content specific to the index page is placed within the `BaseLayout`.

## Content
The main content of the index page includes the following sections, integrated in the specified order:
- A `Hero` section with dynamic content (headline, subheadline, CTA, image).
- An `About` section providing biographical information.
- A `ProjectsSection` showcasing featured projects.
- A `ContactForm` for user inquiries.

## Structure and Components
The page structure includes the `BaseLayout` component, which provides a consistent header, footer, and basic page structure. The content specific to the index page is placed within the `BaseLayout`. It utilizes various components:
- `Hero.astro`: Displays the hero section with dynamic props.
- `About.astro`: Contains biographical information and creative elements.
- `ProjectsSection.astro`: Showcases featured projects by fetching data from the `projects` content collection and rendering `ProjectCard.astro` for each project. It passes the `title`, `description`, and `technologies` from the project data to `ProjectCard`.
- `ContactForm.astro`: Provides a contact form for user inquiries.

The `ProjectCard.astro` component is used within `ProjectsSection.astro` to display individual project details, accepting `title`, `description`, and `technologies` as props.