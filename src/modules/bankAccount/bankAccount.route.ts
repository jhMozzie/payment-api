// src/modules/bankAccount/bankAccount.route.ts
import { Router } from "express";
import { BankAccountController } from "@/modules/bankAccount/bankAccount.controller";
import { validate } from "@/middlewares/validate";
import {
  createBankAccountSchema,
  updateBankAccountSchema,
} from "@/modules/bankAccount/bankAccount.schema";

const router = Router();
const controller = new BankAccountController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validate(createBankAccountSchema), controller.create);
router.put("/:id", validate(updateBankAccountSchema), controller.update);
router.delete("/:id", controller.delete);

export default router;