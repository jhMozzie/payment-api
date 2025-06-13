import { ZodSchema } from "zod";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const validate = (schema: ZodSchema): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        message: "Validation error",
        errors: result.error.errors,
      });
      return; // ✅ agregamos un return explícito para que no siga
    }

    req.body = result.data;
    next(); // ✅ si todo está bien, pasa al siguiente middleware/controlador
  };
};