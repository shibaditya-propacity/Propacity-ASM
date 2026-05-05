import { ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";
import { ValidationError } from "@/core/errors/app-error";

type Schemas = { body?: ZodSchema; query?: ZodSchema; params?: ZodSchema };

declare global {
  namespace Express {
    interface Request {
      validated: {
        body?: unknown;
        query?: unknown;
        params?: unknown;
      };
      tenant: { id: string };
      user: {
        id: string;
        tenantId: string;
        email: string;
        permissions: string[];
      };
    }
  }
}

export const validate =
  (schemas: Schemas) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    try {
      req.validated = {
        body: schemas.body ? schemas.body.parse(req.body) : undefined,
        query: schemas.query ? schemas.query.parse(req.query) : undefined,
        params: schemas.params ? schemas.params.parse(req.params) : undefined,
      };
      next();
    } catch (err) {
      next(new ValidationError(err));
    }
  };
