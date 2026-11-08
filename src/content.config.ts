import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projects live in src/content/projects/<lang>/<slug>.md
// Use the same <slug> in both languages so the language toggle works.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    repo: z.url().optional(),
    demo: z.url().optional(),
    image: z.string().optional(), // path under /public, e.g. /projects/x.png
    imageAlt: z.string().optional(),
    order: z.number().default(100), // lower = shown first
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
