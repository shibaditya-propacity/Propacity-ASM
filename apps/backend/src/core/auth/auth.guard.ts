import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "@/core/errors/app-error";

const JWT_SECRET = process.env["JWT_SECRET"] ?? "dev-secret-key-not-for-production";

interface JwtPayload {
  sub:      string;
  tenantId: string;
  role:     string;
}

export function authGuard(req: Request, _res: Response, next: NextFunction): void {
  const authHeader = req.headers["authorization"];

  if (!authHeader?.startsWith("Bearer ")) {
    next(
      new AppError({
        code:          "AUTH_MISSING_TOKEN",
        message:       "No bearer token in Authorization header",
        publicMessage: "Authentication required.",
        statusCode:    401,
      })
    );
    return;
  }

  const token = authHeader.slice(7);

  try {
    const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = {
      id:          payload.sub,
      tenantId:    payload.tenantId,
      permissions: [],           // extend with real RBAC when needed
    };
    next();
  } catch {
    next(
      new AppError({
        code:          "AUTH_INVALID_TOKEN",
        message:       "JWT verification failed",
        publicMessage: "Your session has expired. Please sign in again.",
        statusCode:    401,
      })
    );
  }
}
