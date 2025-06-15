import { z } from "zod"

export const createInvoiceDetailSchema = z.object({
  invoice_id: z.number().int(),
  product_id: z.number().int(),
  quantity: z.number().positive(),
  unit_price: z.number().positive(),
})

export const updateInvoiceDetailSchema = createInvoiceDetailSchema.partial()