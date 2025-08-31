import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.enum(['announcement', 'research', 'education', 'event']),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastModified: z.date(),
    author: z.string().optional(),
    layout: z.string().default('../../layouts/Layout.astro'),
  }),
});

export const collections = {
  'news': newsCollection,
  'pages': pagesCollection,
};
