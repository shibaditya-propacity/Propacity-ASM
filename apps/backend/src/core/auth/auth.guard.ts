import type { Request, Response, NextFunction } from "express";
import { AppError } from "@/core/errors/app-error";

// Stub: in production this verifies the RS256 JWT and populates req.user
export function authGuard(req: Request, _res: Response, next: NextFunction): void {
  // Stub implementation — replace with real JWT verification
  if (!req.headers["authorization"]) {
    next(
      new AppError({
        code: "AUTH_MISSING_TOKEN",
        message: "No authorization header",
        publicMessage: "Authentication required.",
        statusCode: 401,
      })
    );
    return;
  }
  // In production: verify JWT, load user, attach to req.user
  req.user = { id: "stub-user-id", tenantId: "stub-tenant-id", permissions: ["growth.view"] };
  next();
}
