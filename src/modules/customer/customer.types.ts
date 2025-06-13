import { z } from "zod";
import { createCustomerSchema, updateCustomerSchema } from "@/modules/customer/customer.schema";

export type CustomerCreateInput = z.infer<typeof createCustomerSchema>;
export type CustomerUpdateInput = z.infer<typeof updateCustomerSchema>;