import { Request, Response } from "express";
import { BankAccountService } from "@/modules/bankAccount/bankAccount.service";
import { createBankAccountSchema, updateBankAccountSchema } from "./bankAccount.schema";

const service = new BankAccountService();

export class BankAccountController {
  async getAll(_: Request, res: Response) {
    const accounts = await service.getAll();
    res.json(accounts);
    return;
  }

  /**
   * Returns a bank account by its ID
   * @param req - Request object
   * @param res - Response object
   * @returns The bank account if found, otherwise a 404 error is thrown
   */
  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const account = await service.getById(id);
    if (!account) {
      res.status(404).json({ message: "Bank account not found" });
      return;
    }
    res.json(account);
    return;
  }

  async create(req: Request, res: Response) {
    const parsed = createBankAccountSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    const account = await service.create(parsed.data);
    res.status(201).json(account);
    return;
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const parsed = updateBankAccountSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    const account = await service.update(id, parsed.data);
    res.json(account);
    return;
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const account = await service.delete(id);
    if (!account) {
      res.status(404).json({ message: "Bank account not found" });
      return;
    }

    res.status(204).send();
    return;
  }
}
