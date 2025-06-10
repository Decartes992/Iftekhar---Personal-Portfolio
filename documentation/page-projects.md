# Projects Page

Documentation for `src/pages/projects.astro`.

## Purpose
This file defines the content for the "Projects" page of the personal portfolio website. It is used to showcase the projects the portfolio owner has contributed to, with dynamic listing, filtering, and sorting capabilities.

## Data Source
Project data is sourced from Astro Content Collections, specifically the `projects` collection located in `src/content/projects/`. Each project is represented by a Markdown file within this collection.

## Layout
The page uses the `BaseLayout.astro` component to provide a consistent header, footer, and basic page structure. The dynamic project listing and filtering/sorting UI are placed within the `BaseLayout`.

## Functionality: Listing, Filtering, and Sorting
The projects page now dynamically fetches all project entries from the `projects` content collection. The listing, filtering, and sorting logic are handled by a dedicated React component, `ProjectFilterSort.jsx`.

### Filtering
Users can filter the project list based on the following criteria, using checkboxes provided by the `ProjectFilterSort` component:
- Technology
- Project Type
- Skills

The filtering logic in the `ProjectFilterSort` component updates the displayed projects based on the selected filter options.

### Sorting
Users can sort the project list using a dropdown provided by the `ProjectFilterSort` component. The available sorting options are:
- Date (Newest First)
- Alphabetical (by project title)

The sorting logic in the `ProjectFilterSort` component reorders the displayed projects based on the selected sort option.

## Structure and Components
The page structure uses standard HTML elements (`<h1>`, `<p>`) wrapped by the `BaseLayout` component. The core functionality for displaying, filtering, and sorting projects is encapsulated within the `ProjectFilterSort` React component, which is imported and used on this page with the `client:load` directive to ensure interactivity.

- `BaseLayout.astro`: Provides the overall page layout.
- `ProjectFilterSort.jsx`: A React component responsible for receiving the project data (passed as a prop from `projects.astro`), managing filter and sort state, implementing filtering and sorting logic based on user selections, and rendering the filter/sort UI and the list of filtered/sorted projects.
- `ProjectCard.astro`: Represents an individual project card. It now includes the project image (using Astro Assets for optimization and with descriptive alt text), the project title (linked to the project or repository), a description, a list of technologies used (with accessibility attributes), and links to view the project and/or its repository. A subtle lift and shadow animation is applied on hover and focus-within.
- `ProjectsSection.astro`: This component utilizes a responsive CSS grid to display the `ProjectCard` components, adjusting the layout and spacing based on screen size.