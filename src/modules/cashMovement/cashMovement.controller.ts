import { Request, Response } from "express";
import {
  createCashMovementSchema,
  updateCashMovementSchema
} from "@/modules/cashMovement/cashMovement.schema";
import { CashMovementService } from "@/modules/cashMovement/cashMovement.service";

const service = new CashMovementService();

export class CashMovementController {
  async getAll(req: Request, res: Response) {
    const result = await service.getAll();
    res.json(result);
    return;
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const result = await service.getById(id);
    if (!result) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json(result);
    return;
  }

  async create(req: Request, res: Response) {
    const parsed = createCashMovementSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    const data = parsed.data;
    const created = await service.create(data);
    res.status(201).json(created);
    return;
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const parsed = updateCashMovementSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    const updated = await service.update(id, parsed.data);
    if (!updated) {
      res.status(404).json({ message: "Not found" });
      return;
    }

    res.json(updated);
    return;
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleted = await service.delete(id);
    if (!deleted) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.status(204).send();
    return;
  }
}