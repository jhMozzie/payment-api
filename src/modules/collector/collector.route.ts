import { Router } from "express";
import { CollectorController } from "@/modules/collector/collector.controller";
import { validate } from "@/middlewares/validate";
import {
    createCollectorSchema,
    updateCollectorSchema,
} from "@/modules/collector/collector.schema";

const router = Router();
const controller = new CollectorController();

// Ruta para obtener todos y crear
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validate(createCollectorSchema), controller.create);
router.put("/:id", validate(updateCollectorSchema), controller.update);
router.delete("/:id", controller.delete);

export default router;
