import { Request, Response } from "express"
import { InvoiceDetailService } from "@/modules/invoiceDetail/invoiceDetail.service"
import {
  createInvoiceDetailSchema,
  updateInvoiceDetailSchema
} from "@/modules/invoiceDetail/invoiceDetail.schema"

const service = new InvoiceDetailService()

export class InvoiceDetailController {
  async getAll(_: Request, res: Response) {
    const details = await service.getAll()
    res.json(details)
    return;
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const detail = await service.getById(id)
    if (!detail) {
      res.status(404).json({ message: "InvoiceDetail not found" })
      return;
    }
    res.json(detail)
    return;
  }

  async create(req: Request, res: Response) {
    const parsed = createInvoiceDetailSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json(parsed.error.format())
      return;
    }
    const detail = await service.create(parsed.data)
    res.status(201).json(detail)
    return;
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const parsed = updateInvoiceDetailSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json(parsed.error.format())
      return;
    }
    const detail = await service.update(id, parsed.data)
    res.json(detail)
    return;
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const deleted = await service.delete(id)
    if (!deleted) {
      res.status(404).json({ message: "InvoiceDetail not found" })
      return;
    }
    res.status(204).send()
    return;
  }
}