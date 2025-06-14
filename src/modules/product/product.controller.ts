import { Request, Response } from "express"
import { ProductService } from "@/modules/product/product.service"
import { createProductSchema, updateProductSchema } from "@/modules/product/product.schema"

const service = new ProductService()

export class ProductController {
  async getAll(req: Request, res: Response) {
    const products = await service.getAll()
    res.json(products)
    return;
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const product = await service.getById(id)
    if (!product) {
      res.status(404).json({ message: "Product not found" })
      return;
    }
    res.json(product)
    return;
  }

  async create(req: Request, res: Response) {
    const parsed = createProductSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json(parsed.error.format())
      return;
    }

    const product = await service.create(parsed.data)
    res.status(201).json(product)
    return;
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const parsed = updateProductSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json(parsed.error.format())
      return;
    }

    const product = await service.update(id, parsed.data)
    res.json(product)
    return;
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const product = await service.delete(id)
    res.status(204).send()
    return;
  }
}