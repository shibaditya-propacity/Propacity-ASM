import express, { Router } from "express";
import cors from "cors";
import { errorHandler } from "@/core/errors/error-handler";
import { registerGrowthRoutes } from "@/modules/growth/growth.routes";
import { GrowthController } from "@/modules/growth/growth.controller";
import { GrowthService } from "@/modules/growth/growth.service";
import { GrowthRepository } from "@/modules/growth/growth.repository";

export function createApp(): express.Application {
  const app = express();

  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json({ limit: "1mb" }));

  const apiRouter = Router();

  // Growth module wiring
  const growthRepo = new GrowthRepository();
  const growthService = new GrowthService(growthRepo);
  const growthController = new GrowthController(growthService);
  registerGrowthRoutes(apiRouter, growthController);

  app.use("/api/v1", apiRouter);
  app.use(errorHandler);

  return app;
}
