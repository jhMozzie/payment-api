import { Router } from "express";
import { InvoiceController } from "@/modules/invoice/invoice.controller";
import { validate } from "@/middlewares/validate";
import { createInvoiceSchema, updateInvoiceSchema } from "@/modules/invoice/invoice.schema";

const router = Router();
const controller = new InvoiceController();

// Routes for invoice
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validate(createInvoiceSchema), controller.create);
router.put("/:id", validate(updateInvoiceSchema), controller.update);
router.delete("/:id", controller.delete);

export default router;