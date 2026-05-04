import type { Request, Response, NextFunction } from "express";
import { AppError } from "./app-error";
import { ZodError } from "zod";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      ok: false,
      error: { code: err.code, message: err.publicMessage, details: err.details },
    });
    return;
  }

  if (err instanceof ZodError) {
    res.status(400).json({
      ok: false,
      error: { code: "VALIDATION_ERROR", message: "Invalid request data.", details: err.flatten() },
    });
    return;
  }

  console.error("[unhandled error]", err);
  res.status(500).json({
    ok: false,
    error: { code: "INTERNAL_ERROR", message: "Something went wrong on our end." },
  });
}
