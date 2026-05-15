import { Router } from "express";
import { authGuard } from "@/core/auth/auth.guard";
import { tenantGuard } from "@/core/tenant/tenant.guard";
import { validate } from "@/core/validation/validate";
import { IntegrationsController } from "./integrations.controller";
import { IntegrationsService } from "./integrations.service";
import { IntegrationsRepository } from "./integrations.repository";
import {
  CreateClientSchema,
  ClientIdParamSchema,
  ClientProviderParamSchema,
  ProviderIdParamSchema,
  IntegrationIdParamSchema,
  ConnectApiKeyBodySchema,
  ConnectOAuthBodySchema,
  SyncLogsQuerySchema,
  OAuthCallbackQuerySchema,
} from "./integrations.dto";

// ── Wire up dependencies ───────────────────────────────────────────────────────

const repo = new IntegrationsRepository();
const service = new IntegrationsService(repo);
const controller = new IntegrationsController(service);

export function registerIntegrationsRoutes(router: Router): void {
  const r = Router();

  // ── OAuth callback — PUBLIC (no auth) ──────────────────────────────────────
  // Google redirects here after consent. The redirect carries no Authorization
  // header, so this must be registered before authGuard/tenantGuard.

  r.get(
    "/oauth/callback",
    validate({ query: OAuthCallbackQuerySchema }),
    controller.oauthCallback,
  );

  r.use(authGuard);
  r.use(tenantGuard);

  // ── Clients ────────────────────────────────────────────────────────────────
  // Must be before /:clientId to avoid route shadowing.

  r.get("/clients", controller.listClients);

  r.post(
    "/clients",
    validate({ body: CreateClientSchema }),
    controller.createClient,
  );

  // ── Matrix (all clients × providers) ──────────────────────────────────────

  r.get("/matrix", controller.getMatrix);

  r.post(
    "/oauth/refresh/:integrationId",
    validate({ params: IntegrationIdParamSchema }),
    controller.refreshToken,
  );

  // ── Platform integrations ──────────────────────────────────────────────────
  // Must be before /:clientId.

  r.get("/platform", controller.listPlatformIntegrations);

  r.post(
    "/platform/:providerId/connect",
    validate({ params: ProviderIdParamSchema, body: ConnectApiKeyBodySchema }),
    controller.connectPlatform,
  );

  r.post(
    "/platform/:providerId/sync",
    validate({ params: ProviderIdParamSchema }),
    controller.syncPlatform,
  );

  // ── Client-scoped integration routes ──────────────────────────────────────

  // GET /integrations/:clientId — providers + connection status for client
  r.get(
    "/:clientId",
    validate({ params: ClientIdParamSchema }),
    controller.listProviders,
  );

  // GET /integrations/:clientId/readiness
  r.get(
    "/:clientId/readiness",
    validate({ params: ClientIdParamSchema }),
    controller.getReadiness,
  );

  // POST /integrations/:clientId/:providerId/connect/api-key
  r.post(
    "/:clientId/:providerId/connect/api-key",
    validate({
      params: ClientProviderParamSchema,
      body: ConnectApiKeyBodySchema,
    }),
    controller.connectApiKey,
  );

  // POST /integrations/:clientId/:providerId/connect/oauth
  r.post(
    "/:clientId/:providerId/connect/oauth",
    validate({
      params: ClientProviderParamSchema,
      body: ConnectOAuthBodySchema,
    }),
    controller.connectOAuth,
  );

  // POST /integrations/:clientId/:providerId/disconnect
  r.post(
    "/:clientId/:providerId/disconnect",
    validate({ params: ClientProviderParamSchema }),
    controller.disconnect,
  );

  // POST /integrations/:clientId/:providerId/sync
  r.post(
    "/:clientId/:providerId/sync",
    validate({ params: ClientProviderParamSchema }),
    controller.triggerSync,
  );

  // GET /integrations/:clientId/:providerId/sync-logs
  r.get(
    "/:clientId/:providerId/sync-logs",
    validate({ params: ClientProviderParamSchema, query: SyncLogsQuerySchema }),
    controller.getSyncLogs,
  );

  router.use("/integrations", r);
}
