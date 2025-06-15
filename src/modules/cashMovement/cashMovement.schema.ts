import { z } from "zod";

export const createCashMovementSchema = z.object({
  invoice_id: z.number().int().optional(),
  source: z.enum(["payment", "other"]),
  movement_date: z.string().datetime(),
  amount: z.number().min(0),
  channel: z.enum(["declared", "undeclared"]),
  description: z.string().min(1),
  delivery_method: z.enum(["cash", "bank_transfer"]).optional(),
  delivered_to: z.string().optional().nullable()
});

export const updateCashMovementSchema = createCashMovementSchema.partial();

