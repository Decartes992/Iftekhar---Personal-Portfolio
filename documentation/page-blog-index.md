# Blog Index Page

This document describes the `personal-portfolio/src/pages/blog/index.astro` file.

## Purpose

The blog index page serves as the main listing page for all blog posts on the portfolio website. It fetches all published blog posts from the Astro Content Collection and displays them in a list, typically sorted by publication date.

## Location

`personal-portfolio/src/pages/blog/index.astro`

## Functionality

- Fetches all entries from the 'blog' content collection using `getCollection('blog')`.
- Sorts the fetched posts in descending order based on the `pubDate` field in their frontmatter (`b.data.pubDate.getTime() - a.data.pubDate.getTime()`).
- Renders a simple unordered list (`<ul>`) where each list item (`<li>`) contains:
    - An anchor tag (`<a>`) linking to the individual blog post page (`/blog/{post.slug}/`), displaying the post's `title`. Includes basic Tailwind styling and focus states.
    - A paragraph tag (`<p>`) displaying the post's `pubDate` formatted as a string.
- Does **not** use the `BlogPostCard.jsx` component for rendering the list items on this index page.
- Uses the `BaseLayout` for consistent site structure and styling.

## Usage

Navigate to the `/blog` path on the website to view the chronological list of all blog posts.