import type { Request, Response, NextFunction } from "express";
import { ok, created, noContent } from "@/core/http/response";
import { SeoService } from "./seo.service";
import type {
  SeoClientIdParam,
  SeoKeywordIdParam,
  SeoActionIdParam,
  AddKeywordInput,
  ActionsQuery,
  CreateActionBody,
  UpdateActionBody,
} from "./seo.dto";

export class SeoController {
  constructor(private readonly service: SeoService) {}

  // ── Dashboard ──────────────────────────────────────────────────────────────

  getDashboard = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const data = await this.service.getDashboard(req.tenant.id, clientId);
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Organic traffic ────────────────────────────────────────────────────────

  getOrganicTraffic = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const data = await this.service.getOrganicTraffic(
        req.tenant.id,
        clientId,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Rank tracking ──────────────────────────────────────────────────────────

  getRankTracking = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const data = await this.service.getRankTracking(req.tenant.id, clientId);
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Keywords ───────────────────────────────────────────────────────────────

  listKeywords = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const data = await this.service.listKeywords(req.tenant.id, clientId);
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  addKeyword = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const body = req.validated.body as AddKeywordInput;
      const data = await this.service.addKeyword(req.tenant.id, clientId, body);
      created(res, data);
    } catch (err) {
      next(err);
    }
  };

  removeKeyword = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, keywordId } = req.validated.params as SeoKeywordIdParam;
      await this.service.removeKeyword(req.tenant.id, clientId, keywordId);
      noContent(res);
    } catch (err) {
      next(err);
    }
  };

  // ── Actions ────────────────────────────────────────────────────────────────

  listActions = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const query = req.validated.query as ActionsQuery;
      const data = await this.service.listAllActions(
        req.tenant.id,
        clientId,
        query,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  createAction = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const body = req.validated.body as CreateActionBody;
      const data = await this.service.createManualAction(
        req.tenant.id,
        clientId,
        body,
      );
      created(res, data);
    } catch (err) {
      next(err);
    }
  };

  updateAction = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, actionId } = req.validated.params as SeoActionIdParam;
      const body = req.validated.body as UpdateActionBody;
      const data = await this.service.updateAction(
        req.tenant.id,
        clientId,
        actionId,
        body,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  deleteAction = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, actionId } = req.validated.params as SeoActionIdParam;
      await this.service.deleteAction(req.tenant.id, clientId, actionId);
      noContent(res);
    } catch (err) {
      next(err);
    }
  };

  // ── Sync ───────────────────────────────────────────────────────────────────

  triggerSync = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SeoClientIdParam;
      const result = await this.service.triggerSync(req.tenant.id, clientId);
      ok(res, result);
    } catch (err) {
      next(err);
    }
  };
}
