import { prisma } from "../config/prisma";
import { CreateCustomerInput, UpdateCustomerInput } from "./customer.types";

export class CustomerService {
  async getAll() {
    return prisma.customer.findMany();
  }

  async getById(id: number) {
    return prisma.customer.findUnique({ where: { id } });
  }

  async create(data: CreateCustomerInput) {
    return prisma.customer.create({ data });
  }

  async update(id: number, data: UpdateCustomerInput) {
    return prisma.customer.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.customer.delete({ where: { id } });
  }
}