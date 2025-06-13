import { prisma } from "@/config/prisma";
import { PaymentCreateInput, PaymentUpdateInput } from "@/modules/payment/payment.types";

export class PaymentService {
  getAll() {
    return prisma.payment.findMany();
  }

  getById(id: number) {
    return prisma.payment.findUnique({ where: { id } });
  }

  create(data: PaymentCreateInput) {
    return prisma.payment.create({ data });
  }

  update(id: number, data: PaymentUpdateInput) {
    return prisma.payment.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.payment.delete({ where: { id } });
  }
}