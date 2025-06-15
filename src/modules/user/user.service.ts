import { prisma } from "@/config/prisma";
import { UserCreateInput, UserUpdateInput } from "@/modules/user/user.types";

export class UserService {
  getAll() {
    return prisma.user.findMany();
  }

  getById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

async create(data: UserCreateInput) {
    const { name, role, email, password_hash, collector } = data;

    // Caso 1: Si es "collector", crea también el Collector vinculado
    if (role === "collector") {
      const [firstname, ...restName] = name.split(" ");
      const lastname = restName.join(" ") || "SinApellido";

      return prisma.user.create({
        data: {
          name,
          email,
          password_hash,
          role,
          collector: {
            create: {
              firstname,
              lastname,
              phone: collector?.phone ?? ""
            },
          },
        },
        include: { collector: true },
      });
    }

    // Caso 2: Si es cualquier otro rol
    return prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        role,
      },
    });
  }

  update(id: number, data: UserUpdateInput) {
    return prisma.user.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.user.delete({ where: { id } });
  }
}