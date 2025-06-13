import { z } from "zod";
import { createInvoiceSchema, updateInvoiceSchema } from "@/modules/invoice/invoice.schema";

export type InvoiceCreateInput = z.infer<typeof createInvoiceSchema>;
export type InvoiceUpdateInput = z.infer<typeof updateInvoiceSchema>; 

