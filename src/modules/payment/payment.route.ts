import { Router } from "express";
import { PaymentController } from "@/modules/payment/payment.controller";
import { validate } from "@/middlewares/validate";
import { createPaymentSchema, updatePaymentSchema } from "@/modules/payment/payment.schema";

const controller = new PaymentController();
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validate(createPaymentSchema), controller.create);
router.put("/:id", validate(updatePaymentSchema), controller.update);
router.delete("/:id", controller.delete);

export default router;