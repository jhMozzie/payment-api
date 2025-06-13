import { Request, Response } from "express";
import { PaymentService } from "@/modules/payment/payment.service";

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
    const payment = await service.create(req.body);
    res.status(201).json(payment);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const payment = await service.update(id, req.body);
    if (!payment) {
      res.status(404).json({ message: "Payment not found" });
      return;
    }
    res.json(payment);
    return;
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
