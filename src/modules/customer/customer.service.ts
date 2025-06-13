// src/modules/customer/customer.service.ts
import { prisma } from "@/config/prisma";
import { CustomerCreateInput, CustomerUpdateInput } from "@/modules/customer/customer.types";

export class CustomerService {
  getAll() {
    return prisma.customer.findMany();
  }

  getById(id: number) {
    return prisma.customer.findUnique({ where: { id } });
  }

  create(data: CustomerCreateInput) {
    return prisma.customer.create({ data });
  }

  update(id: number, data: CustomerUpdateInput) {
    return prisma.customer.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.customer.delete({ where: { id } });
  }
}