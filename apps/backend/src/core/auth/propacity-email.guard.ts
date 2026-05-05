import type { Request, Response, NextFunction } from "express";
import { AppError } from "@/core/errors/app-error";

// Allowed email domain for workshop creation.
// All addresses ending with this string are permitted.
// TODO: move to env var (ALLOWED_EMAIL_DOMAIN) if this needs to change per environment.
const ALLOWED_DOMAIN = "@propacity.in";

/**
 * propacityEmailGuard
 *
 * Ensures the authenticated user has a Propacity email address before
 * allowing the request through. Must be used after authGuard (which
 * populates req.user.email from the JWT).
 *
 * Returns 403 Forbidden for any user whose email does not end with
 * the allowed domain — even if they are otherwise authenticated.
 */
export function propacityEmailGuard(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  const email = req.user?.email ?? "";

  if (!email.endsWith(ALLOWED_DOMAIN)) {
    next(
      new AppError({
        code: "PERMISSION_DENIED",
        message: `Workshop creation requires a ${ALLOWED_DOMAIN} email. Got: ${email}`,
        publicMessage: `Only Propacity team members can schedule workshops.`,
        statusCode: 403,
      }),
    );
    return;
  }

  next();
}
