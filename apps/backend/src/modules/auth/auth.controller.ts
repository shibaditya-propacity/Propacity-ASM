import type { Request, Response, NextFunction } from "express";
import { ok, created } from "@/core/http/response";
import { AuthService } from "./auth.service";
import type { SignUpInput, SignInInput } from "./auth.dto";

export class AuthController {
  constructor(private readonly service: AuthService) {}

  signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await this.service.signUp(req.validated.body as SignUpInput);
      created(res, result);
    } catch (err) {
      next(err);
    }
  };

  signIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await this.service.signIn(req.validated.body as SignInInput);
      ok(res, result);
    } catch (err) {
      next(err);
    }
  };
}
