import { z } from "zod";
import { createCollectorSchema, updateCollectorSchema } from "@/modules/collector/collector.schema";

export type CollectorCreateInput = z.infer<typeof createCollectorSchema>;
export type CollectorUpdateInput = z.infer<typeof updateCollectorSchema>;