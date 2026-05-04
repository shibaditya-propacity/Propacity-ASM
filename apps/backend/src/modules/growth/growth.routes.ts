import { Router } from "express";
import { authGuard } from "@/core/auth/auth.guard";
import { tenantGuard } from "@/core/tenant/tenant.guard";
import { validate } from "@/core/validation/validate";
import { GrowthController } from "./growth.controller";
import {
  CreateWorkshopSchema,
  UpdateWorkshopSchema,
  ListWorkshopsQuerySchema,
  CreateProspectSchema,
  UpdateProspectSchema,
  UpdateProspectStageSchema,
  ListProspectsQuerySchema,
  CreateBrandAuditSchema,
  ListBrandAuditsQuerySchema,
  IdParamSchema,
  CreateProspectActivitySchema,
} from "./growth.dto";
import { z } from "zod";

export function registerGrowthRoutes(router: Router, controller: GrowthController): void {
  const r = Router();

  r.use(authGuard);
  r.use(tenantGuard);

  // — Workshops —
  r.get(
    "/workshops",
    validate({ query: ListWorkshopsQuerySchema }),
    controller.listWorkshops
  );
  r.post(
    "/workshops",
    validate({ body: CreateWorkshopSchema }),
    controller.createWorkshop
  );
  r.get(
    "/workshops/:id",
    validate({ params: IdParamSchema }),
    controller.getWorkshop
  );
  r.patch(
    "/workshops/:id",
    validate({ params: IdParamSchema, body: UpdateWorkshopSchema }),
    controller.updateWorkshop
  );
  r.delete(
    "/workshops/:id",
    validate({ params: IdParamSchema }),
    controller.deleteWorkshop
  );

  // — Prospects —
  r.get(
    "/prospects",
    validate({ query: ListProspectsQuerySchema }),
    controller.listProspects
  );
  r.post(
    "/prospects",
    validate({ body: CreateProspectSchema }),
    controller.createProspect
  );
  r.get(
    "/prospects/:id",
    validate({ params: IdParamSchema }),
    controller.getProspect
  );
  r.patch(
    "/prospects/:id",
    validate({ params: IdParamSchema, body: UpdateProspectSchema }),
    controller.updateProspect
  );
  r.post(
    "/prospects/:id/stage",
    validate({ params: IdParamSchema, body: UpdateProspectStageSchema }),
    controller.updateProspectStage
  );
  r.get(
    "/prospects/:id/activities",
    validate({ params: IdParamSchema }),
    controller.listProspectActivities
  );
  r.post(
    "/prospects/:id/activities",
    validate({ params: IdParamSchema, body: CreateProspectActivitySchema }),
    controller.addProspectActivity
  );
  r.get(
    "/prospects/:id/brand-audit",
    validate({ params: IdParamSchema }),
    controller.getProspectBrandAudit
  );

  // — Brand Audits —
  r.get(
    "/brand-audits",
    validate({ query: ListBrandAuditsQuerySchema }),
    controller.listBrandAudits
  );
  r.post(
    "/brand-audits",
    validate({ body: CreateBrandAuditSchema }),
    controller.createBrandAudit
  );
  r.get(
    "/brand-audits/:id",
    validate({ params: IdParamSchema }),
    controller.getBrandAudit
  );
  r.patch(
    "/brand-audits/:id/status",
    validate({ params: IdParamSchema, body: z.object({ status: z.string() }) }),
    controller.updateBrandAuditStatus
  );

  router.use("/growth", r);
}
