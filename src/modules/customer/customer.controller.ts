import { Request, Response } from "express";
import { CustomerService } from "@/modules/customer/customer.service";
import { createCustomerSchema, updateCustomerSchema } from "@/modules/customer/customer.schema";

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
    const parsed = createCustomerSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }
    const customer = await service.create(req.body);
    res.status(201).json(customer);
    return;
  }

 async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const parsed = updateCustomerSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    const updated = await service.update(id, parsed.data);
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
