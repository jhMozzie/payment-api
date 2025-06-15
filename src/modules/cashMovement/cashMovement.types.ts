import { z } from "zod";
import { createCashMovementSchema, updateCashMovementSchema } from "@/modules/cashMovement/cashMovement.schema";

export type CashMovementCreateInput = z.infer<typeof createCashMovementSchema>;
export type CashMovementUpdateInput = z.infer<typeof updateCashMovementSchema>;