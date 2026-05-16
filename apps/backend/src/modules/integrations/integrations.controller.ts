import type { Request, Response, NextFunction } from "express";
import { ok, created } from "@/core/http/response";
import { IntegrationsService } from "./integrations.service";
import { OAuthCallbackError } from "./integrations.errors";
import { decryptState } from "./oauth/credentials";
import type {
  CreateClientInput,
  ClientIdParam,
  ClientProviderParam,
  ProviderIdParam,
  ConnectApiKeyBody,
  SyncLogsQuery,
  OAuthCallbackQuery,
  IntegrationIdParam,
  InitConnectParam,
} from "./integrations.dto";

// Small HTML page sent inside the OAuth popup to close it and notify the opener.
function popupHtml(payload: Record<string, unknown>): string {
  const json = JSON.stringify(payload);
  return `<!DOCTYPE html><html><body><script>
    try { window.opener && window.opener.postMessage(${json}, '*'); } catch(e){}
    setTimeout(function(){ window.close(); }, 300);
  </script></body></html>`;
}

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

  // ── OAuth — initiate ───────────────────────────────────────────────────────

  initConnect = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, providerId } = req.validated.params as InitConnectParam;
      const result = await this.service.initiateOAuth(
        req.tenant.id,
        clientId,
        providerId,
      );
      ok(res, result);
    } catch (err) {
      next(err);
    }
  };

  // ── Connect — API key ──────────────────────────────────────────────────────

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

  // ── Account label (manual override) ───────────────────────────────────────

  updateAccountLabel = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, providerId } = req.validated
        .params as ClientProviderParam;
      const { accountLabel } = req.body as { accountLabel: string };
      await this.service.updateAccountLabel(
        req.tenant.id,
        clientId,
        providerId,
        accountLabel ?? "",
      );
      ok(res, { success: true });
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

  // ── OAuth — callback (PUBLIC — no authGuard) ───────────────────────────────

  oauthCallback = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const query = req.validated.query as OAuthCallbackQuery;

    // User denied / provider returned an error
    if (query.error) {
      res
        .status(200)
        .set("Content-Type", "text/html")
        .send(
          popupHtml({
            type: "oauth-error",
            error: query.error,
            description: query.error_description ?? "",
          }),
        );
      return;
    }

    if (!query.code || !query.state) {
      res
        .status(200)
        .set("Content-Type", "text/html")
        .send(popupHtml({ type: "oauth-error", error: "missing_params" }));
      return;
    }

    try {
      const state = decryptState(query.state);

      const result = await this.service.handleOAuthCallback(
        state.tenantId,
        state.clientId,
        state.providerId,
        query.code,
      );

      res
        .status(200)
        .set("Content-Type", "text/html")
        .send(
          popupHtml({
            type: "oauth-success",
            provider: result.providerName,
            clientId: state.clientId,
            providerId: state.providerId,
          }),
        );
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      void next; // suppress unused warning — we handle the response directly
      res
        .status(200)
        .set("Content-Type", "text/html")
        .send(popupHtml({ type: "oauth-error", error: msg }));
    }
  };

  // ── OAuth — token refresh ──────────────────────────────────────────────────

  refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { integrationId } = req.validated.params as IntegrationIdParam;
      const result = await this.service.refreshOAuthToken(
        req.tenant.id,
        integrationId,
      );
      ok(res, result);
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

// Silence unused import warning — OAuthCallbackError is thrown when needed
void OAuthCallbackError;
