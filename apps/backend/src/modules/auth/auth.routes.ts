import { Router } from "express";
import { validate } from "@/core/validation/validate";
import { AuthController } from "./auth.controller";
import { SignUpSchema, SignInSchema } from "./auth.dto";

export function registerAuthRoutes(router: Router, controller: AuthController): void {
  const r = Router();

  // Public routes — no authGuard
  r.post("/signup", validate({ body: SignUpSchema }), controller.signUp);
  r.post("/signin", validate({ body: SignInSchema }), controller.signIn);

  router.use("/auth", r);
}
