import { z } from "zod";
import { createBankAccountSchema, updateBankAccountSchema } from "@/modules/bankAccount/bankAccount.schema";

export type BankAccountCreateInput = z.infer<typeof createBankAccountSchema>;
export type BankAccountUpdateInput = z.infer<typeof updateBankAccountSchema>;