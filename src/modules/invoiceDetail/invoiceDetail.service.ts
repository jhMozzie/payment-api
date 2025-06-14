import { prisma } from "@/config/prisma"
import {
  InvoiceDetailCreateInput,
  InvoiceDetailUpdateInput
} from "@/modules/invoiceDetail/invoiceDetail.types"

export class InvoiceDetailService {
  getAll() {
    return prisma.invoiceDetail.findMany()
  }

  getById(id: number) {
    return prisma.invoiceDetail.findUnique({ where: { id } })
  }

  create(data: InvoiceDetailCreateInput) {
    return prisma.invoiceDetail.create({ data })
  }

  update(id: number, data: InvoiceDetailUpdateInput) {
    return prisma.invoiceDetail.update({ where: { id }, data })
  }

  delete(id: number) {
    return prisma.invoiceDetail.delete({ where: { id } })
  }
}