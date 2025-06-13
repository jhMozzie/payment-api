import { Request, Response } from "express";
import { UserService } from "@/modules/user/user.service";
import { createUserSchema, updateUserSchema } from "@/modules/user/user.schema";

const service = new UserService();

export class UserController {
  async getAll(_: Request, res: Response) {
    const users = await service.getAll();
    res.json(users);
    return;
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await service.getById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
    return;
  }

  async create(req: Request, res: Response) {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    const user = await service.create(parsed.data);
    res.status(201).json(user);
    return;
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const parsed = updateUserSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error.format());
      return;
    }

    const user = await service.update(id, parsed.data);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
    return;
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await service.delete(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(204).send();
    return;
  }
}