import type { Request, Response, NextFunction } from "express";
import { ok, created } from "@/core/http/response";
import { IntegrationsService } from "./integrations.service";
import type {
  CreateClientInput,
  ClientIdParam,
  ClientProviderParam,
  ProviderIdParam,
  ConnectApiKeyBody,
  ConnectOAuthBody,
  SyncLogsQuery,
  OAuthCallbackQuery,
  IntegrationIdParam,
} from "./integrations.dto";

export class IntegrationsController {
  constructor(private readonly service: IntegrationsService) {}

  // ── Clients ────────────────────────────────────────────────────────────────

  listClients = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = await this.service.listClients(req.tenant.id);
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  createClient = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const body = req.validated.body as CreateClientInput;
      const data = await this.service.createClient(req.tenant.id, body);
      created(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Providers + integrations ───────────────────────────────────────────────

  listProviders = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as ClientIdParam;
      const data = await this.service.listProvidersWithStatus(
        req.tenant.id,
        clientId,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Connect ────────────────────────────────────────────────────────────────

  connectApiKey = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, providerId } = req.validated
        .params as ClientProviderParam;
      const body = req.validated.body as ConnectApiKeyBody;
      const integration = await this.service.connectApiKey(
        req.tenant.id,
        clientId,
        providerId,
        body,
      );
      created(res, integration);
    } catch (err) {
      next(err);
    }
  };

  connectOAuth = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, providerId } = req.validated
        .params as ClientProviderParam;
      const body = req.validated.body as ConnectOAuthBody;
      const integration = await this.service.connectOAuth(
        req.tenant.id,
        clientId,
        providerId,
        body,
      );
      created(res, integration);
    } catch (err) {
      next(err);
    }
  };

  // ── Disconnect ─────────────────────────────────────────────────────────────

  disconnect = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, providerId } = req.validated
        .params as ClientProviderParam;
      await this.service.disconnect(req.tenant.id, clientId, providerId);
      ok(res, { success: true });
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
      const { clientId, providerId } = req.validated
        .params as ClientProviderParam;
      const result = await this.service.triggerSync(
        req.tenant.id,
        clientId,
        providerId,
      );
      ok(res, result);
    } catch (err) {
      next(err);
    }
  };

  getSyncLogs = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, providerId } = req.validated
        .params as ClientProviderParam;
      const query = req.validated.query as SyncLogsQuery;
      const result = await this.service.getSyncLogs(
        req.tenant.id,
        clientId,
        providerId,
        query,
      );
      ok(res, result.data, {
        pagination: {
          total: result.total,
          limit: query.limit,
          offset: query.offset,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  // ── Module readiness ───────────────────────────────────────────────────────

  getReadiness = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as ClientIdParam;
      const data = await this.service.getModuleReadiness(
        req.tenant.id,
        clientId,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── All-clients matrix ─────────────────────────────────────────────────────

  getMatrix = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = await this.service.getConnectionMatrix(req.tenant.id);
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── OAuth callback ─────────────────────────────────────────────────────────

  oauthCallback = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const query = req.validated.query as OAuthCallbackQuery;
      if (query.error) {
        ok(res, { success: false, error: query.error });
        return;
      }
      const result = await this.service.handleOAuthCallback(
        req.tenant.id,
        query.providerId,
        query.code ?? "",
      );
      ok(res, result);
    } catch (err) {
      next(err);
    }
  };

  refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      ok(res, { success: true });
    } catch (err) {
      next(err);
    }
  };

  // ── Platform integrations ──────────────────────────────────────────────────

  listPlatformIntegrations = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = await this.service.getPlatformIntegrations();
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  connectPlatform = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { providerId } = req.validated.params as ProviderIdParam;
      const body = req.validated.body as ConnectApiKeyBody;
      const data = await this.service.connectPlatformApiKey(providerId, body);
      created(res, data);
    } catch (err) {
      next(err);
    }
  };

  syncPlatform = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { providerId } = req.validated.params as ProviderIdParam;
      const result = await this.service.syncPlatform(providerId);
      ok(res, result);
    } catch (err) {
      next(err);
    }
  };
}
