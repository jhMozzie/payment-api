import { prisma } from "@/config/prisma";
import { ProductCreateInput, ProductUpdateInput } from "@/modules/product/product.types";

export class ProductService {
  getAll() {
    return prisma.product.findMany()
  }

  getById(id: number) {
    return prisma.product.findUnique({ where: { id } })
  }

  create(data: ProductCreateInput) {
    return prisma.product.create({ data })
  }

  update(id: number, data: ProductUpdateInput) {
    return prisma.product.update({ where: { id }, data })
  }

  delete(id: number) {
    return prisma.product.delete({ where: { id } })
  }
}