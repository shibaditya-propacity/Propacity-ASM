import type { Request, Response, NextFunction } from "express";
import { AppError } from "@/core/errors/app-error";

// Stub: in production this resolves the tenant from req.user and sets DB context
export function tenantGuard(req: Request, _res: Response, next: NextFunction): void {
  if (!req.user?.tenantId) {
    next(
      new AppError({
        code: "TENANT_MISSING",
        message: "Tenant not resolved",
        publicMessage: "Tenant context missing.",
        statusCode: 401,
      })
    );
    return;
  }
  req.tenant = { id: req.user.tenantId };
  next();
}
