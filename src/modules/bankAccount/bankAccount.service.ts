import { prisma } from "@/config/prisma";
import {
  BankAccountCreateInput,
  BankAccountUpdateInput,
} from "./bankAccount.types";

export class BankAccountService {
  getAll() {
    return prisma.bankAccount.findMany();
  }

  getById(id: number) {
    return prisma.bankAccount.findUnique({ where: { id } });
  }

  create(data: BankAccountCreateInput) {
    return prisma.bankAccount.create({ data });
  }

  update(id: number, data: BankAccountUpdateInput) {
    return prisma.bankAccount.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.bankAccount.delete({ where: { id } });
  }
}