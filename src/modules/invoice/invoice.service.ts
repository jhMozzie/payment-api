import { prisma } from "@/config/prisma";
import { InvoiceCreateInput, InvoiceUpdateInput } from "@/modules/invoice/invoice.types";

export class InvoiceService {
  getAll() {
    return prisma.invoice.findMany();
  }

  getById(id: number) {
    return prisma.invoice.findUnique({ where: { id } });
  }

  create(data: InvoiceCreateInput) {
    return prisma.invoice.create({ data });
  }

  update(id: number, data: InvoiceUpdateInput) {
    return prisma.invoice.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.invoice.delete({ where: { id } });
  }
}