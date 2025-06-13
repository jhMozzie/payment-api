import { Router } from "express";
import { UserController } from "@/modules/user/user.controller";
import { validate } from "@/middlewares/validate";
import {
  createUserSchema,
  updateUserSchema,
} from "@/modules/user/user.schema";

const router = Router();
const controller = new UserController();

// Obtener todos los usuarios
router.get("/", controller.getAll);

// Obtener usuario por ID
router.get("/:id", controller.getById);

// Crear nuevo usuario (valida con Zod)
router.post("/", validate(createUserSchema), controller.create);

// Actualizar usuario por ID
router.put("/:id", validate(updateUserSchema), controller.update);

// Eliminar usuario
router.delete("/:id", controller.delete);

export default router;