import { Router } from "express";
import { authGuard } from "@/core/auth/auth.guard";
import { tenantGuard } from "@/core/tenant/tenant.guard";
import { validate } from "@/core/validation/validate";
import { BrandAuditController } from "./brand-audit.controller";
import { BrandAuditService } from "./brand-audit.service";
import { BrandAuditRepository } from "./brand-audit.repository";
import {
  CreateAuditSchema,
  ListAuditsQuerySchema,
  IdParamSchema,
  ManualInputSchema,
  LinkProspectSchema,
  ProspectIdParamSchema,
} from "./brand-audit.dto";
import { z } from "zod";

// ── Wire up dependencies ───────────────────────────────────────────────────────

const repo = new BrandAuditRepository();
const service = new BrandAuditService(repo);
const controller = new BrandAuditController(service, repo);

// ── Collect body schemas (lightweight — real validation happens inside handlers) ──

const CollectBodySchema = z
  .object({ auditId: z.string().optional() })
  .passthrough();
const AnalyzeBodySchema = z.object({ auditId: z.string().min(1) });

export function registerBrandAuditRoutes(router: Router): void {
  const r = Router();

  r.use(authGuard);
  r.use(tenantGuard);

  // ── Audit CRUD ─────────────────────────────────────────────────────────────

  r.post(
    "/audits",
    validate({ body: CreateAuditSchema }),
    controller.createAudit,
  );

  r.get(
    "/audits",
    validate({ query: ListAuditsQuerySchema }),
    controller.listAudits,
  );

  // ── Prospect linking (must be before /audits/:id to avoid route shadowing) ─

  r.get(
    "/audits/by-prospect/:prospectId",
    validate({ params: ProspectIdParamSchema }),
    controller.getAuditByProspect,
  );

  r.get(
    "/audits/:id",
    validate({ params: IdParamSchema }),
    controller.getAudit,
  );

  // SSE: run full audit — no body validation, auth already applied above
  r.get("/audits/:id/run", controller.runAudit);

  // SSE: rerun a single dimension — dimension + skipCollection come from query string
  r.get("/audits/:id/rerun", controller.rerunDimension);

  r.post(
    "/audits/:id/manual-input",
    validate({ params: IdParamSchema, body: ManualInputSchema }),
    controller.updateManualOverrides,
  );

  r.post(
    "/audits/:id/link-prospect",
    validate({ params: IdParamSchema, body: LinkProspectSchema }),
    controller.linkAuditToProspect,
  );

  // ── Data migration ─────────────────────────────────────────────────────────
  // POST /brand-audit/migrate/link-prospects
  // Backfills prospectId on existing Audit rows by matching AuditDeveloper.brandName
  // to GrowthProspect.company (case-insensitive, unambiguous matches only).
  // Idempotent — safe to call multiple times; only processes rows where prospectId IS NULL.

  r.post("/migrate/link-prospects", controller.backfillProspectLinks);

  // ── Collect endpoints (called internally by SSE run route) ─────────────────

  r.post(
    "/collect/gmb",
    validate({ body: CollectBodySchema }),
    controller.collectGmb,
  );

  r.post(
    "/collect/seo",
    validate({ body: CollectBodySchema }),
    controller.collectSeo,
  );

  r.post(
    "/collect/website",
    validate({ body: CollectBodySchema }),
    controller.collectWebsite,
  );

  r.post(
    "/collect/instagram",
    validate({ body: CollectBodySchema }),
    controller.collectInstagram,
  );

  r.post(
    "/collect/meta-ads",
    validate({ body: CollectBodySchema }),
    controller.collectMetaAds,
  );

  r.post(
    "/collect/screenshot",
    validate({ body: CollectBodySchema }),
    controller.collectScreenshot,
  );

  r.post(
    "/collect/company-data",
    validate({ body: CollectBodySchema }),
    controller.collectCompanyData,
  );

  r.post(
    "/collect/competitors",
    validate({ body: CollectBodySchema }),
    controller.collectCompetitors,
  );

  r.post(
    "/collect/promoter-linkedin",
    validate({ body: CollectBodySchema }),
    controller.collectPromoterLinkedIn,
  );

  // ── Analyze endpoints (called internally by SSE run route) ────────────────

  r.post(
    "/analyze/d1",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD1,
  );

  r.post(
    "/analyze/d2",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD2,
  );

  r.post(
    "/analyze/d3",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD3,
  );

  r.post(
    "/analyze/d4",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD4,
  );

  r.post(
    "/analyze/d5",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD5,
  );

  r.post(
    "/analyze/d6",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD6,
  );

  r.post(
    "/analyze/d7",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD7,
  );

  r.post(
    "/analyze/d8",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD8,
  );

  r.post(
    "/analyze/d9",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD9,
  );

  r.post(
    "/analyze/d10",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeD10,
  );

  r.post(
    "/analyze/collateral",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeCollateral,
  );

  r.post(
    "/analyze/logo",
    validate({ body: AnalyzeBodySchema }),
    controller.analyzeLogo,
  );

  router.use("/brand-audit", r);
}
