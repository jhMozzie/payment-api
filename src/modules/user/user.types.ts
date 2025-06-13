import { z } from "zod";
import { createUserSchema, updateUserSchema } from "@/modules/user/user.schema";

export type UserCreateInput = z.infer<typeof createUserSchema>;
export type UserUpdateInput = z.infer<typeof updateUserSchema>;