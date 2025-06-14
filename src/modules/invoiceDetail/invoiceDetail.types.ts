import { z } from "zod";
import { createInvoiceDetailSchema, updateInvoiceDetailSchema } from "@/modules/invoiceDetail/invoiceDetail.schema";

export type InvoiceDetailCreateInput = z.infer<typeof createInvoiceDetailSchema>;
export type InvoiceDetailUpdateInput = z.infer<typeof updateInvoiceDetailSchema>;