import { prisma } from "@/core/prisma/client";

interface AuditLogParams {
  tenantId: string;
  actorId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  metadata?: Record<string, unknown>;
}

export class AuditService {
  async log(params: AuditLogParams): Promise<void> {
    await prisma.auditLog.create({ data: params });
  }
}

export const auditService = new AuditService();
