import { prisma } from "@/config/prisma";
import { CashMovementCreateInput, CashMovementUpdateInput } from "./cashMovement.types";

export class CashMovementService {
  getAll() {
    return prisma.cashMovement.findMany({ include: { invoice: true } });
  }

  getById(id: number) {
    return prisma.cashMovement.findUnique({ where: { id } });
  }

  create(data: CashMovementCreateInput) {
    return prisma.cashMovement.create({ data });
  }

  update(id: number, data: CashMovementUpdateInput) {
    return prisma.cashMovement.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.cashMovement.delete({ where: { id } });
  }
}