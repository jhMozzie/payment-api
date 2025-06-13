import { z } from "zod";

export const createBankAccountSchema = z.object({
  collector_id: z.number().int(),
  bank_name: z.string().min(3, "Bank name is required"),
  account_number: z.string().min(5, "Account number is required"),
  cci: z.string().min(5, "CCI is required"),
  is_primary: z.boolean().optional(),
});

export const updateBankAccountSchema = createBankAccountSchema.partial();
