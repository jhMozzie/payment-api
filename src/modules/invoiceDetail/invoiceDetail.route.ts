import { Router } from "express"
import { InvoiceDetailController } from "@/modules/invoiceDetail/invoiceDetail.controller"
import { validate } from "@/middlewares/validate"
import {
  createInvoiceDetailSchema,
  updateInvoiceDetailSchema
} from "@/modules/invoiceDetail/invoiceDetail.schema"

const router = Router()
const controller = new InvoiceDetailController()

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", validate(createInvoiceDetailSchema), controller.create)
router.put("/:id", validate(updateInvoiceDetailSchema), controller.update)
router.delete("/:id", controller.delete)

export default router