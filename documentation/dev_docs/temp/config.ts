import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(), // Made optional as pubDate will be primary
    pubDate: z.date(), // Added pubDate
    description: z.string(),
    tags: z.array(z.string()).optional(), // Added tags
    image: z.string().optional(), // Added optional image
    author: z.string().default('Iftekhar Rafi'), // Added author with default
    category: z.string().optional(), // Added optional category
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
    startDate: z.date().optional(), // Added startDate
    endDate: z.date().optional(), // Added endDate
    status: z.string().optional(), // Added status (e.g., "Completed", "In Progress")
    client: z.string().optional(), // Added client for project
    repoUrl: z.string().url().optional(), // Specific repo URL if different from codeUrl
    techStack: z.array(z.string()).optional(), // More specific than technologies, if needed
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};