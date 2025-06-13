import { prisma } from "@/config/prisma";
import {
  CollectorCreateInput,
  CollectorUpdateInput,
} from "@/modules/collector/collector.types";

export class CollectorService {
  getAll() {
    return prisma.collector.findMany();
  }

  getById(id: number) {
    return prisma.collector.findUnique({ where: { id } });
  }

  create(data: CollectorCreateInput) {
    return prisma.collector.create({ data });
  }

  update(id: number, data: CollectorUpdateInput) {
    return prisma.collector.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.collector.delete({ where: { id } });
  }
}
