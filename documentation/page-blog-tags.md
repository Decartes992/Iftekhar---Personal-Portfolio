# Blog Tag Page Template

This document describes the `personal-portfolio/src/pages/blog/tags/[tag].astro` file.

## Purpose

The blog tag page template is used to display a list of blog posts associated with a specific tag. It dynamically fetches blog posts from the Astro Content Collection and filters them based on the tag provided in the URL.

## Location

`personal-portfolio/src/pages/blog/tags/[tag].astro`

## Functionality

- Uses `getStaticPaths` to generate a page for each unique tag found in the blog posts' frontmatter.
- Fetches all blog posts and filters them to include only those that have the specified tag.
- Sorts the filtered blog posts, usually in descending order by publication date.
- Renders a list of blog post titles and links for the posts matching the tag.
- Uses the `BaseLayout` for consistent site structure and styling.

## Usage

Tag-specific blog post lists can be accessed via URLs like `/blog/tags/tag-name/`, where `tag-name` corresponds to a tag used in the blog posts.