import { z } from "zod";

export const createPaymentSchema = z.object({
  invoice_id: z.number().int(),
  collector_id: z.number().int(),
  payment_date: z.string().datetime({ message: "Invalid date format" }),
  amount: z.number().min(0),
  notes: z.string().optional(),
  payment_channel: z.enum([
    "cash", "bcp", "bbva", "yape", "plin", "interbank", "others", "undeclared"
  ])
});

export const updatePaymentSchema = createPaymentSchema.partial();