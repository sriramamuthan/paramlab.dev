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
    audio: z.string().optional(), // narration file under public/, e.g. /audio/ep-00.mp3
    repoTag: z.string().optional(), // git tag in the series repo this post covers
    tags: z.array(z.string()).default([]),
    // Further reading for curious readers: official reports first, then papers, articles and videos.
    reading: z
      .array(
        z.object({
          title: z.string(),
          url: z.url(),
          source: z.string(), // who published it, e.g. "ESA" or "GOTO Conferences (YouTube)"
          kind: z.enum(['report', 'paper', 'article', 'video']),
          group: z.string().optional(), // optional heading, e.g. the incident name
        }),
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
