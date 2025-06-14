import { z } from "zod"

export const createInvoiceDetailSchema = z.object({
  invoice_id: z.number().int(),
  product_id: z.number().int(),
  product_name: z.string().min(1),
  unit: z.string().min(1),
  quantity: z.number().positive(),
  unit_price: z.number().positive(),
  subtotal: z.number().positive(),
  has_igv_included: z.boolean()
})

export const updateInvoiceDetailSchema = createInvoiceDetailSchema.partial()