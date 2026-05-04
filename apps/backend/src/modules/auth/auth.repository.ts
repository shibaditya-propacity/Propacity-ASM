import { prisma } from "@/core/prisma/client";

export class AuthRepository {
  findUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  createUser(data: {
    tenantId:     string;
    name:         string;
    email:        string;
    role:         string;
    passwordHash: string;
  }) {
    return prisma.user.create({ data });
  }

  /** Finds the default tenant or creates it on first signup. */
  findOrCreateDefaultTenant() {
    return prisma.tenant.upsert({
      where:  { slug: "propacity" },
      create: { slug: "propacity", name: "Propacity" },
      update: {},
    });
  }
}
