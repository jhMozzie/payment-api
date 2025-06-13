import { z } from "zod";

export const createInvoiceSchema = z.object({
  customer_id: z.number().int(),
  collector_id: z.number().int(),
  issue_date: z.string().datetime({ message: "Invalid date format" }),
  total: z.number().min(0),
  comments: z.string().default(""),

  payment_method: z.enum(["cash", "credit"]),
  payment_channel: z.enum(["boleta", "factura", "nota_venta"]),
  status: z.enum(["unpaid", "partial", "paid"]),
});

export const updateInvoiceSchema = createInvoiceSchema.partial();