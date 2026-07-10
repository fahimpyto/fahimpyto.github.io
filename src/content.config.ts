import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    techStack: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    pypiUrl: z.string().optional(),
    featured: z.boolean().default(false),
    category: z.string().default('project'),
    status: z.enum(['active', 'maintenance', 'archived']).default('active'),
  }),
});

export const collections = { blog, projects };
