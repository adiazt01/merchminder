import { z } from 'zod';

export const createProductSchema = z .object({
    name: z.string().min(3).max(255),
    price: z.string(),
    description: z.optional(z.string().max(255)),
});