import { z } from "zod";

export const createCollectorSchema = z.object({
    firstname: z.string().min(3, "First name must have at least 3 characters"), 
    lastname: z.string().min(3, "Last name must have at least 3 characters"),
    phone: z.string().length(9, "Phone must have at least 9 characters").optional().default(""),
    user_id: z.number().optional()
})

export const updateCollectorSchema = createCollectorSchema.partial();