import { z } from "zod";

// Para crear user con collector opcional
export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password_hash: z.string(),
  role: z.enum(["admin", "collector", "viewer"]),
  collector: z
    .object({
      phone: z.string().length(9, "Phone must be 9 digits").optional()
    })
    .optional()
});

// Para actualizar solo los campos de User, sin tocar collector
export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password_hash: z.string().optional(),
  role: z.enum(["admin", "collector", "viewer"]).optional()
})
.strict();