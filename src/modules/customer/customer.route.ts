import { Router } from "express";
import { CustomerController } from "@/modules/customer/customer.controller";
import { validate } from "@/middlewares/validate";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "@/modules/customer/customer.schema";

const router = Router();
const controller = new CustomerController();

// Ruta para obtener todos y crear
router.get("/", controller.getAll);
router.post("/", validate(createCustomerSchema), controller.create);

// Ruta para obtener por ID y eliminar
router.route("/:id").get(controller.getById).delete(controller.delete);

// Ruta para actualizar (con validación)
router.put("/:id", validate(updateCustomerSchema), controller.update);

export default router;
