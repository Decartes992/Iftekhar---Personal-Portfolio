# Blog Post Page Template

This document describes the `personal-portfolio/src/pages/blog/[...slug].astro` file.

## Purpose

The blog post page template is used to render individual blog posts based on their unique slug. It dynamically fetches the content of a specific post from the Astro Content Collection and displays its title, frontmatter (like publication date), and the rendered content.

## Location

`personal-portfolio/src/pages/blog/[...slug].astro`

## Functionality

- **Dynamic Route (SSR):** As the project uses `output: 'server'`, this page functions as a dynamic route. It does not use `getStaticPaths`.
- **Data Fetching:** It retrieves the `slug` from `Astro.params`. It then uses `getEntryBySlug('blog', slug)` to fetch the specific blog post entry from the content collection.
- **404 Handling:** If `getEntryBySlug` does not find a matching post, it returns a 404 Not Found response.
- **Rendering:**
    - It uses `post.render()` to get the `<Content />` component for the post's body.
    - It displays the post's title (`post.data.title`) in an `<h1>` tag.
    - It displays the post's date (`post.data.date`), formatted using `toLocaleDateString`, in a `<p>` tag.
    - It renders the main post body using the `<Content />` component within an `<article>` tag.
- **Styling:** Applies Tailwind CSS typography styles using the `prose` and `lg:prose-xl` classes on the `<article>` element for readability.
- **Layout:** Uses the `BaseLayout` for consistent site structure and styling, passing `post.data.title` as the page title.
- **Components:** Does **not** include interactive visualization components like `ProjectDashboard.jsx` or `ProjectSpecificViz.jsx`.

## Usage

Individual blog posts are accessed via URLs like `/blog/post-slug/`, where `post-slug` corresponds to the slug of the blog post file in `src/content/blog/`.