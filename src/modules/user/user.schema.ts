import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password_hash: z.string(),
  role: z.enum(["admin", "collector", "viewer"]),
  collector: z
    .object({
      phone: z.string().length(9, "Phone must be 9 digits").optional(),
    })
    .optional(), // collector puede estar presente o no
});

export const updateUserSchema = createUserSchema.partial();