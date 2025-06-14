import { z } from "zod";
import { createProductSchema, updateProductSchema } from "@/modules/product/product.schema";

export type ProductCreateInput = z.infer<typeof createProductSchema>;
export type ProductUpdateInput = z.infer<typeof updateProductSchema>;