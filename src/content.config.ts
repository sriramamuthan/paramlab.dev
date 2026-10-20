import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Posts live in src/content/posts/<series>/<slug>.mdx; the folder decides the series.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    episode: z.number().int().nonnegative().optional(),
    youtube: z.string().optional(), // YouTube video id
    repoTag: z.string().optional(), // git tag in the series repo this post covers
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
