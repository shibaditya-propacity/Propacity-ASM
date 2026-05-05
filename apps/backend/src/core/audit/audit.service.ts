import { prisma } from "@/core/prisma/client";
import type { Prisma } from "@prisma/client";

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
    await prisma.auditLog.create({
      data: {
        tenantId: params.tenantId,
        actorId: params.actorId,
        action: params.action,
        resourceType: params.resourceType,
        resourceId: params.resourceId,
        metadata: params.metadata as Prisma.InputJsonValue | undefined,
      },
    });
  }
}

export const auditService = new AuditService();
