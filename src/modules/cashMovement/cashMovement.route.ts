import { Router } from "express";
import { CashMovementController } from "@/modules/cashMovement/cashMovement.controller";

const router = Router();
const controller = new CashMovementController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;