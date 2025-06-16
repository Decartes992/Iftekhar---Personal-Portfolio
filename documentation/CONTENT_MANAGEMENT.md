[← Home](../README.md) | [Documentation Overview](README.md) | [Architecture](ARCHITECTURE.md) | [Components](COMPONENTS.md) | [Style Guide](STYLE_GUIDE.md)

---

# Content Management System (CMS) Guide

This project uses Astro's Content Collections for managing blog posts and projects. All content is stored as Markdown files in `src/content/`.

## Content Collections

### Blog Posts
- Location: `src/content/blog/`
- Each post is a Markdown file with frontmatter and content
- Frontmatter fields:
  - `title`: Post title
  - `pubDate`: Publication date
  - `description`: Short description
  - `tags`: Array of tags for categorization
  - `featuredImage`: Path to featured image (optional)

### Projects
- Location: `src/content/projects/`
- Each project is a Markdown file with frontmatter and content
- Frontmatter fields:
  - `title`: Project title
  - `description`: Short description
  - `image`: Optional image path
  - `demoUrl`: URL to live demo
  - `codeUrl`: URL to source code
  - `tags`: Technologies used
  - `relatedPosts`: Array of related blog post slugs (optional)

## Adding New Content
1. Create a new Markdown file in the appropriate collection directory
2. Add the required frontmatter fields
3. Write content using Markdown syntax
4. The content will be automatically available in the site

## Advanced Features

### Dynamic Content Loading
```js
// Load all blog posts sorted by date
const allPosts = await Astro.glob('../content/blog/*.md');
const sortedPosts = allPosts.sort(
  (a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate)
);
```

### Frontmatter Validation
```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    featuredImage: z.string().optional()
  })
});

export const collections = { blog };
```

### Content Relations
```markdown
---
title: My Project
relatedPosts: ['my-first-post', 'astro-tips']
---
```

```js
// Access related posts in a project template
const { relatedPosts } = Astro.props;
const allPosts = await Astro.glob('../content/blog/*.md');
const related = allPosts.filter(post =>
  relatedPosts.includes(post.file.split('/').pop().replace('.md', ''))
);
```

### Image Optimization
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---
<Image
  src={heroImage}
  alt="Hero image"
  width={1200}
  height={630}
  formats={['avif', 'webp', 'jpg']}
/>
```

### Content Filtering
```js
// Filter projects by tag
const allProjects = await Astro.glob('../content/projects/*.md');
const filteredProjects = allProjects.filter(project =>
  project.frontmatter.tags.includes('react')
);
```

## Example Blog Post

```markdown
---
title: 'My First Post'
pubDate: 2025-01-01
description: 'This is my first blog post.'
tags: ['blogging', 'astro']
featuredImage: '../../public/images/post-cover.jpg'
---

# Welcome to my blog!

This is my first post using Astro Content Collections.

![Optimized Image](../../public/images/post-image.jpg)
```

For more details, see [Astro Content Collections Documentation](https://docs.astro.build/en/guides/content-collections/).

---

> **Related Documentation**
> - [Project Architecture](ARCHITECTURE.md)
> - [Component Reference](COMPONENTS.md)
> - [Style Guide](STYLE_GUIDE.md)