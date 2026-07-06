import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    pov: z.number().int().min(1).max(3).optional(),
    lang: z.enum(['en', 'ko']).default('en'),
    draft: z.boolean().default(false),
    ogTitle: z.string().optional(),
  }),
});

export const collections = { posts };
