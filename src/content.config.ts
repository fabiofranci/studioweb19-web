import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    loader: () => [],
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        updatedDate: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    loader: () => [],
    schema: z.object({
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        featured: z.boolean().default(false),
    }),
});

const services = defineCollection({
    loader: () => [],
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = {
    blog,
    projects,
    services,
};