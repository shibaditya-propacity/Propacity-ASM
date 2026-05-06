import express, { Router } from "express";
import cors from "cors";
import { errorHandler } from "@/core/errors/error-handler";
import { registerAuthRoutes } from "@/modules/auth/auth.routes";
import { AuthController } from "@/modules/auth/auth.controller";
import { AuthService } from "@/modules/auth/auth.service";
import { AuthRepository } from "@/modules/auth/auth.repository";
import { registerGrowthRoutes } from "@/modules/growth/growth.routes";
import { GrowthController } from "@/modules/growth/growth.controller";
import { GrowthService } from "@/modules/growth/growth.service";
import { GrowthRepository } from "@/modules/growth/growth.repository";
import { registerBrandAuditRoutes } from "@/modules/brand-audit/brand-audit.routes";

export function createApp(): express.Application {
  const app = express();

  const allowedOrigin = process.env["ALLOWED_ORIGIN"];
  app.use(
    cors({
      origin: allowedOrigin
        ? allowedOrigin.split(",").map((o) => o.trim())
        : true,
      credentials: true,
    }),
  );
  app.use(express.json({ limit: "1mb" }));

  const apiRouter = Router();

  // Auth module wiring (public routes — no authGuard)
  const authRepo = new AuthRepository();
  const authService = new AuthService(authRepo);
  const authController = new AuthController(authService);
  registerAuthRoutes(apiRouter, authController);

  // Growth module wiring
  const growthRepo = new GrowthRepository();
  const growthService = new GrowthService(growthRepo);
  const growthController = new GrowthController(growthService);
  registerGrowthRoutes(apiRouter, growthController);

  // Brand Audit module (self-wired)
  registerBrandAuditRoutes(apiRouter);

  app.use("/api/v1", apiRouter);
  app.use(errorHandler);

  return app;
}
