import { z } from "zod";
import { createPaymentSchema, updatePaymentSchema } from "@/modules/payment/payment.schema";

export type PaymentCreateInput = z.infer<typeof createPaymentSchema>;
export type PaymentUpdateInput = z.infer<typeof updatePaymentSchema>;