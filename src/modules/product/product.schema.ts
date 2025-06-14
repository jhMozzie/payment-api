import { z } from "zod"

export const createProductSchema = z.object({
  name: z.string().min(1),
  unit: z.string().min(1),
  estimated_price: z.number().min(0).optional(),
  active: z.boolean().optional(),
})

export const updateProductSchema = createProductSchema.partial()