import z from 'zod';

export const createPostSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Title is required')
      .max(255, 'Title must be less than 255 characters'),
    content: z.string().min(1, 'Content is required'),
    category: z.string().min(1, 'Category is required'),
    tags: z.array(z.string()).default([]).optional(),
  }),
});

export const updatePostSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Title is required')
      .max(255, 'Title must be less than 255 characters'),
    content: z.string().min(1, 'Content is required'),
    category: z.string().min(1, 'Category is required'),
    tags: z.array(z.string()).default([]).optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number').transform(Number),
  }),
});
