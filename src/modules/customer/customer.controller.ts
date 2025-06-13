import { Request, Response } from "express";
import { CustomerService } from "@/modules/customer/customer.service";

const service = new CustomerService();

export class CustomerController {
  async getAll(req: Request, res: Response) {
    const customers = await service.getAll();
    res.json(customers);
    return;
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const customer = await service.getById(id);

    if (!customer) {
      res.status(404).json({ message: "Not found" });
      return;
    }

    res.json(customer);
    return;
  }

  async create(req: Request, res: Response) {
    const customer = await service.create(req.body);
    res.status(201).json(customer);
    return;
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const updated = await service.update(id, req.body);
    res.json(updated);
    return;
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const customer = await service.delete(id);
    if (!customer) {
      res.status(404).json({ message: "Customer Not found" });
      return;
    }
    res.status(204).send();
    return;
  }
}
