import { Router } from "express";
import { ProductController } from "@/modules/product/product.controller";
import { validate } from "@/middlewares/validate";
import { createProductSchema, updateProductSchema } from "@/modules/product/product.schema";

const controller = new ProductController();
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validate(createProductSchema), controller.create);
router.put("/:id", validate(updateProductSchema), controller.update);
router.delete("/:id", controller.delete);

export default router;