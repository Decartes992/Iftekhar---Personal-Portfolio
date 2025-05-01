import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    demoUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    featured: z.boolean().optional(),
    type: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};