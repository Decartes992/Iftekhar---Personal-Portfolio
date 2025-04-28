# Index Page

Documentation for `src/pages/index.astro`.

## Purpose
This file defines the content for the home page of the personal portfolio website. It serves as the initial landing page for visitors.

## Layout
The page uses the `BaseLayout.astro` component to provide a consistent header, footer, and basic page structure. The content specific to the index page is placed within the `BaseLayout`.

## Content
The main content of the index page includes:
- A main heading: "Welcome to My Portfolio!"
- Placeholder paragraphs indicating that detailed content is forthcoming and mentioning the types of information (skills, projects, experience) that will eventually be present on the site.
- A small interactive click counter demo using a React component.
- A section displaying the 3 most recent blog posts fetched from the 'blog' content collection.

## Structure and Components
The page structure includes standard HTML elements (`<h1>`, `<p>`) wrapped by the `BaseLayout` component. It utilizes the `BlogPostCard` React component to display individual blog posts and the `HomePageClickCounter` React component for the interactive demo.