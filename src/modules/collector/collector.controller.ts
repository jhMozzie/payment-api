import { Request, Response } from "express";
import { CollectorService } from "@/modules/collector/collector.service";

const service = new CollectorService();

export class CollectorController {
  async getAll(req: Request, res: Response) {
    const collectors = await service.getAll();
    res.json(collectors);
    return;
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const collector = await service.getById(id);
    if (!collector) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json(collector);
    return;
  }

  // async create(req: Request, res: Response) {
  //   const collector = await service.create(req.body);
  //   res.status(201).json(collector);
  //   return;
  // }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const collector = await service.update(id, req.body);
    if(!collector){
      res.status(404).json({ message: "Collector Not found" });
      return;
    }
    res.json(collector);
    return;
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const collector = await service.delete(id);
    if (!collector) {
      res.status(404).json({ message: "Collector Not found" });
      return;
    }
    res.status(204).send();
    return;
  }
}
