import { z } from "zod";

// ── Client ────────────────────────────────────────────────────────────────────

export const CreateClientSchema = z.object({
  name: z.string().min(1).max(200),
  industry: z.string().max(100).optional(),
  avatarUrl: z.string().url().optional(),
});
export type CreateClientInput = z.infer<typeof CreateClientSchema>;

export const ClientIdParamSchema = z.object({
  clientId: z.string().min(1),
});
export type ClientIdParam = z.infer<typeof ClientIdParamSchema>;

// ── Provider + Integration params ─────────────────────────────────────────────

export const ProviderIdParamSchema = z.object({
  providerId: z.string().min(1),
});
export type ProviderIdParam = z.infer<typeof ProviderIdParamSchema>;

export const ClientProviderParamSchema = z.object({
  clientId: z.string().min(1),
  providerId: z.string().min(1),
});
export type ClientProviderParam = z.infer<typeof ClientProviderParamSchema>;

export const IntegrationIdParamSchema = z.object({
  integrationId: z.string().min(1),
});
export type IntegrationIdParam = z.infer<typeof IntegrationIdParamSchema>;

// ── Connect bodies ────────────────────────────────────────────────────────────

export const ConnectApiKeyBodySchema = z.object({
  apiKey: z.string().min(1),
  accountLabel: z.string().max(200).optional(),
});
export type ConnectApiKeyBody = z.infer<typeof ConnectApiKeyBodySchema>;

export const ConnectOAuthBodySchema = z.object({
  code: z.string().min(1),
  accountLabel: z.string().max(200).optional(),
});
export type ConnectOAuthBody = z.infer<typeof ConnectOAuthBodySchema>;

// ── Sync logs query ───────────────────────────────────────────────────────────

export const SyncLogsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
});
export type SyncLogsQuery = z.infer<typeof SyncLogsQuerySchema>;

// ── OAuth callback ────────────────────────────────────────────────────────────

export const OAuthCallbackQuerySchema = z.object({
  code: z.string().optional(),
  state: z.string().optional(),
  providerId: z.string().optional(),
  error: z.string().optional(),
  error_description: z.string().optional(),
});
export type OAuthCallbackQuery = z.infer<typeof OAuthCallbackQuerySchema>;

// ── Init connect (OAuth providers) ───────────────────────────────────────────

export const InitConnectParamSchema = z.object({
  clientId: z.string().min(1),
  providerId: z.string().min(1),
});
export type InitConnectParam = z.infer<typeof InitConnectParamSchema>;
