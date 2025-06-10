# Project Dashboard Component

This document describes the `ProjectDashboard` React component, located at `personal-portfolio/src/components/ProjectDashboard.jsx`.

## Description

The `ProjectDashboard` component is responsible for displaying common summary data for a project, such as the technology stack breakdown and project duration/timeline. It is designed to be included on individual project detail pages.

## Props

- `project`: An object containing the project data, typically sourced from Astro Content Collections frontmatter.

## Implementation Details

- The component is implemented using React and styled with Tailwind CSS.
- It accesses project data through the `project` prop.
- Currently, it includes placeholder comments for implementing the data display and styling.

## Usage

The `ProjectDashboard` component is used within the project detail page template (`personal-portfolio/src/pages/blog/[...slug].astro`) to display the common dashboard elements.

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import ProjectDashboard from '../../components/ProjectDashboard.jsx'; // Import the component

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<BaseLayout title={post.data.title}>
  <ProjectDashboard project={post} client:load /> {/* Include the component */}
  <article class="prose lg:prose-xl mx-auto py-8">
    <h1 class="text-4xl font-bold mb-2">{post.data.title}</h1>
    <p class="text-gray-600 text-sm mb-4">{post.data.pubDate.toDateString()}</p>
    <Content />
  </article>
</BaseLayout>
```

**Note:** The `client:load` directive is added to ensure the React component is interactive on the client-side. This was not explicitly added in the previous step, but is necessary for React components in Astro. I will add this in the next step when updating the project page documentation.

## Future Enhancements

- Implement the actual display logic for technology stack and project timeline.
- Apply comprehensive Tailwind CSS styling.
- Consider adding more common project metrics or data visualizations.