import type { Request, Response, NextFunction } from "express";
import { prisma } from "@/core/prisma/client";
import { AppError } from "@/core/errors/app-error";

// Allowed email domain. Any address ending with this string is permitted.
// TODO: move to ALLOWED_EMAIL_DOMAIN env var if this needs to differ per environment.
const ALLOWED_DOMAIN = "@propacity.in";

/**
 * propacityEmailGuard
 *
 * Ensures the requesting user has a Propacity email address.
 * Must be used after authGuard (which populates req.user from the JWT).
 *
 * Fast path  — JWT already carries the email claim (tokens issued after the
 *              email-in-JWT change). No extra DB query needed.
 *
 * Fallback   — Older tokens were issued without an email claim. In that case
 *              the guard fetches the user's email from the DB by their ID so
 *              existing sessions don't break. The user just needs to sign in
 *              once more to get a fresh token and avoid this DB hit on future
 *              requests.
 *
 * Returns 403 Forbidden for any user whose email does not end with
 * ALLOWED_DOMAIN — regardless of their role.
 */
export async function propacityEmailGuard(
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    let email = req.user?.email ?? "";

    // Fallback: token pre-dates the email claim — look up from DB.
    if (!email && req.user?.id) {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: { email: true },
      });
      email = user?.email ?? "";
    }

    if (!email.endsWith(ALLOWED_DOMAIN)) {
      next(
        new AppError({
          code: "PERMISSION_DENIED",
          message: `Workshop creation requires a ${ALLOWED_DOMAIN} email. Got: "${email}"`,
          publicMessage: "Only Propacity team members can schedule workshops.",
          statusCode: 403,
        }),
      );
      return;
    }

    next();
  } catch (err) {
    next(err);
  }
}
