import { Router } from "express";
import { authGuard } from "@/core/auth/auth.guard";
import { tenantGuard } from "@/core/tenant/tenant.guard";
import { validate } from "@/core/validation/validate";
import { SeoController } from "./seo.controller";
import { SeoService } from "./seo.service";
import { SeoRepository } from "./seo.repository";
import { SeoSyncService } from "./seo-sync.service";
import {
  SeoClientIdParamSchema,
  SeoKeywordIdParamSchema,
  SeoActionIdParamSchema,
  AddKeywordSchema,
  ActionsQuerySchema,
  CreateActionBodySchema,
  UpdateActionBodySchema,
} from "./seo.dto";

// ── Wire up dependencies ───────────────────────────────────────────────────────

const repo = new SeoRepository();
const syncService = new SeoSyncService(repo);
const service = new SeoService(repo, syncService);
const controller = new SeoController(service);

export function registerSeoRoutes(router: Router): void {
  const r = Router();

  r.use(authGuard);
  r.use(tenantGuard);

  // GET /seo/:clientId/dashboard
  r.get(
    "/:clientId/dashboard",
    validate({ params: SeoClientIdParamSchema }),
    controller.getDashboard,
  );

  // GET /seo/:clientId/organic-traffic
  r.get(
    "/:clientId/organic-traffic",
    validate({ params: SeoClientIdParamSchema }),
    controller.getOrganicTraffic,
  );

  // GET /seo/:clientId/rank-tracking
  r.get(
    "/:clientId/rank-tracking",
    validate({ params: SeoClientIdParamSchema }),
    controller.getRankTracking,
  );

  // GET /seo/:clientId/keywords
  r.get(
    "/:clientId/keywords",
    validate({ params: SeoClientIdParamSchema }),
    controller.listKeywords,
  );

  // POST /seo/:clientId/keywords
  r.post(
    "/:clientId/keywords",
    validate({ params: SeoClientIdParamSchema, body: AddKeywordSchema }),
    controller.addKeyword,
  );

  // DELETE /seo/:clientId/keywords/:keywordId
  r.delete(
    "/:clientId/keywords/:keywordId",
    validate({ params: SeoKeywordIdParamSchema }),
    controller.removeKeyword,
  );

  // GET /seo/:clientId/actions
  r.get(
    "/:clientId/actions",
    validate({ params: SeoClientIdParamSchema, query: ActionsQuerySchema }),
    controller.listActions,
  );

  // POST /seo/:clientId/actions
  r.post(
    "/:clientId/actions",
    validate({ params: SeoClientIdParamSchema, body: CreateActionBodySchema }),
    controller.createAction,
  );

  // PATCH /seo/:clientId/actions/:actionId
  r.patch(
    "/:clientId/actions/:actionId",
    validate({ params: SeoActionIdParamSchema, body: UpdateActionBodySchema }),
    controller.updateAction,
  );

  // DELETE /seo/:clientId/actions/:actionId
  r.delete(
    "/:clientId/actions/:actionId",
    validate({ params: SeoActionIdParamSchema }),
    controller.deleteAction,
  );

  // POST /seo/:clientId/sync
  r.post(
    "/:clientId/sync",
    validate({ params: SeoClientIdParamSchema }),
    controller.triggerSync,
  );

  router.use("/seo", r);
}
