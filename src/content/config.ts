import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        featured: z.boolean().default(false),
        image: z.string().optional(),
    }),
});

export const collections = {
    blog,
};