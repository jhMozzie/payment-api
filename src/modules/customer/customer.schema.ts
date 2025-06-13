import { z } from 'zod';

export const createCustomerSchema = z.object({
    name: z.string().min(5, "Name must have at least 3 characters"),
    tax_id: z.string().length(11, "Tax ID must have at least 11 characters"),
    address: z.string().min(5, "Address must have at least 5 characters")
})

export const updateCustomerSchema = createCustomerSchema.partial();
