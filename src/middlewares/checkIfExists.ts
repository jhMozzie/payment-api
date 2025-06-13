import { Request, Response, NextFunction } from "express";

/**
 * Middleware reutilizable para verificar si un recurso existe antes de continuar.
 *
 * @param fetchFn - Función que recibe un ID y retorna una promesa con el recurso (o null si no existe).
 * @param entityName - Nombre de la entidad para personalizar el mensaje de error.
 * @returns Middleware que retorna 404 si el recurso no existe, o continúa con `next()` si sí existe.
 */

export function checkIfExists(
    fetchFn: (id: number) => Promise<any>,
    entityName: string
){
    return async (req: Request, res:Response, next: NextFunction) => {
        const id = parseInt(req.params.id);
        const entity = await fetchFn(id);
        if(!entity) {
            return res.status(404).json({ message: `${entityName} not found` });
        }

        next();
    }
}