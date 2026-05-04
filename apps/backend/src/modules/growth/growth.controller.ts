import type { Request, Response, NextFunction } from "express";
import { ok, created, noContent } from "@/core/http/response";
import { GrowthService } from "./growth.service";
import type {
  CreateWorkshopInput,
  UpdateWorkshopInput,
  ListWorkshopsQuery,
  CreateProspectInput,
  UpdateProspectInput,
  UpdateProspectStageInput,
  ListProspectsQuery,
  CreateBrandAuditInput,
  ListBrandAuditsQuery,
  IdParam,
  CreateProspectActivityInput,
} from "./growth.dto";

export class GrowthController {
  constructor(private readonly service: GrowthService) {}

  // ── Workshops ───────────────────────────────────────────────────────────────

  listWorkshops = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.validated.query as ListWorkshopsQuery;
      const result = await this.service.listWorkshops(req.tenant.id, query);
      ok(res, result.data, { pagination: { limit: query.limit, offset: query.offset, total: result.total } });
    } catch (err) {
      next(err);
    }
  };

  getWorkshop = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const workshop = await this.service.getWorkshop(req.tenant.id, id);
      ok(res, workshop);
    } catch (err) {
      next(err);
    }
  };

  createWorkshop = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const input = req.validated.body as CreateWorkshopInput;
      const workshop = await this.service.createWorkshop(req.tenant.id, req.user, input);
      created(res, workshop);
    } catch (err) {
      next(err);
    }
  };

  updateWorkshop = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const input = req.validated.body as UpdateWorkshopInput;
      const workshop = await this.service.updateWorkshop(req.tenant.id, req.user, id, input);
      ok(res, workshop);
    } catch (err) {
      next(err);
    }
  };

  deleteWorkshop = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      await this.service.deleteWorkshop(req.tenant.id, req.user, id);
      noContent(res);
    } catch (err) {
      next(err);
    }
  };

  // ── Prospects ───────────────────────────────────────────────────────────────

  listProspects = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.validated.query as ListProspectsQuery;
      const result = await this.service.listProspects(req.tenant.id, query);
      ok(res, result.data, { pagination: { limit: query.limit, offset: query.offset, total: result.total } });
    } catch (err) {
      next(err);
    }
  };

  getProspect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const prospect = await this.service.getProspect(req.tenant.id, id);
      ok(res, prospect);
    } catch (err) {
      next(err);
    }
  };

  createProspect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const input = req.validated.body as CreateProspectInput;
      const prospect = await this.service.createProspect(req.tenant.id, req.user, input);
      created(res, prospect);
    } catch (err) {
      next(err);
    }
  };

  updateProspect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const input = req.validated.body as UpdateProspectInput;
      const prospect = await this.service.updateProspect(req.tenant.id, req.user, id, input);
      ok(res, prospect);
    } catch (err) {
      next(err);
    }
  };

  updateProspectStage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const input = req.validated.body as UpdateProspectStageInput;
      const prospect = await this.service.updateProspectStage(req.tenant.id, req.user, id, input);
      ok(res, prospect);
    } catch (err) {
      next(err);
    }
  };

  listProspectActivities = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const activities = await this.service.getProspectActivities(req.tenant.id, id);
      ok(res, activities);
    } catch (err) {
      next(err);
    }
  };

  addProspectActivity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const input = req.validated.body as CreateProspectActivityInput;
      const activity = await this.service.addProspectActivity(req.tenant.id, req.user, id, input);
      created(res, activity);
    } catch (err) {
      next(err);
    }
  };

  // ── Brand Audits ────────────────────────────────────────────────────────────

  listBrandAudits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.validated.query as ListBrandAuditsQuery;
      const result = await this.service.listBrandAudits(req.tenant.id, query);
      ok(res, result.data, { pagination: { limit: query.limit, offset: query.offset, total: result.total } });
    } catch (err) {
      next(err);
    }
  };

  getBrandAudit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const audit = await this.service.getBrandAudit(req.tenant.id, id);
      ok(res, audit);
    } catch (err) {
      next(err);
    }
  };

  createBrandAudit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const input = req.validated.body as CreateBrandAuditInput;
      const audit = await this.service.createBrandAudit(req.tenant.id, req.user, input);
      created(res, audit);
    } catch (err) {
      next(err);
    }
  };

  updateBrandAuditStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const { status } = req.validated.body as { status: string };
      const audit = await this.service.updateBrandAuditStatus(req.tenant.id, req.user, id, status);
      ok(res, audit);
    } catch (err) {
      next(err);
    }
  };

  getProspectBrandAudit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const audit = await this.service.getProspectBrandAudit(req.tenant.id, id);
      ok(res, audit);
    } catch (err) {
      next(err);
    }
  };
}
