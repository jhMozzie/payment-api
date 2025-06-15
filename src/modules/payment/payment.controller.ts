import { Request, Response } from "express";
import { PaymentService } from "@/modules/payment/payment.service";
import {
  createPaymentSchema,
  updatePaymentSchema,
} from "@/modules/payment/payment.schema";

const service = new PaymentService();

export class PaymentController {
  async getAll(req: Request, res: Response) {
    const payments = await service.getAll();
    res.json(payments);
    return;
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const payment = await service.getById(id);
    if (!payment) {
      res.status(404).json({ message: "Payment not found" });
      return;
    }
    res.json(payment);
    return;
  }

  async create(req: Request, res: Response) {
    const parsed = createPaymentSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    // Si notes no está presente, lo colocamos como ""
    const data = {
      ...parsed.data,
      notes: parsed.data.notes ?? "",
    };

    const payment = await service.create(data);
    res.status(201).json(payment);
    return;
  }

async update(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const parsed = updatePaymentSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json(parsed.error.format());
    return;
  }

  // 🧠 Aquí limpiamos el campo notes si lo manda vacío
  const data = {
    ...parsed.data,
    notes: parsed.data.notes === undefined
      ? undefined
      : parsed.data.notes || ""
  };

  const payment = await service.update(id, data);

  if (!payment) {
    res.status(404).json({ message: "Payment not found" });
    return;
  }

  res.json(payment);
}

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const payment = await service.delete(id);
    if (!payment) {
      res.status(404).json({ message: "Payment not found" });
      return;
    }
    res.status(204).send();
    return;
  }
}
