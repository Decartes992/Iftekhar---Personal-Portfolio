# Project Specific Visualization Component

This document describes the `ProjectSpecificViz` React component, located at `personal-portfolio/src/components/ProjectSpecificViz.jsx`.

## Description

The `ProjectSpecificViz` component is responsible for displaying a basic visualization for a specific project. It is designed to be included on individual project detail pages when project-specific visualization data is available.

## Props

- `vizData`: An array of objects containing the data for the visualization. The structure of this data is dependent on the specific project and visualization type.

## Implementation Details

- The component is implemented using React.
- It accesses visualization data through the `vizData` prop.
- Currently, it provides a simple text-based representation of the data.

## Usage

The `ProjectSpecificViz` component is used within the project detail page template (`personal-portfolio/src/pages/blog/[...slug].astro`) conditionally, only when `vizData` is present in the project's frontmatter.

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import ProjectDashboard from '../../components/ProjectDashboard.jsx';
import ProjectSpecificViz from '../../components/ProjectSpecificViz.jsx'; // Import the component

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
  <ProjectDashboard project={post} client:load />
  {post.data.vizData && <ProjectSpecificViz vizData={post.data.vizData} client:load />} {/* Include the component conditionally */}
  <article class="prose lg:prose-xl mx-auto py-8">
    <h1 class="text-4xl font-bold mb-2">{post.data.title}</h1>
    <p class="text-gray-600 text-sm mb-4">{post.data.pubDate.toDateString()}</p>
    <Content />
  </article>
</BaseLayout>
```

**Note:** The `client:load` directive is added to ensure the React component is interactive on the client-side. This was not explicitly added in the previous step, but is necessary for React components in Astro. I will add this in the next step when updating the project page documentation.

## Future Enhancements

- Implement actual charting or visualization using a library or plain SVG.
- Add more sophisticated data handling and presentation.