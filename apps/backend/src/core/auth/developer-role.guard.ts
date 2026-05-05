import type { Request, Response, NextFunction } from "express";
import { AppError } from "@/core/errors/app-error";

/**
 * developerRoleGuard
 *
 * Blocks users whose role is "Developer" from the route.
 * Must be used after authGuard (which populates req.user from the JWT).
 * All other roles — Brand Manager, Agency Owner, Growth Consultant, Other, etc. — are permitted.
 */
export function developerRoleGuard(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  if (req.user?.role === "Developer") {
    next(
      new AppError({
        code: "PERMISSION_DENIED",
        message: `Workshop scheduling is not available for the Developer role.`,
        publicMessage: "Developers cannot schedule workshops.",
        statusCode: 403,
      }),
    );
    return;
  }
  next();
}
