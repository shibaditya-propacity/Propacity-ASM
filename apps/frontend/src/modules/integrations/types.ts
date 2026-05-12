// ── Client ────────────────────────────────────────────────────────────────────

export interface Client {
  id: string;
  tenantId: string;
  name: string;
  industry: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateClientInput {
  name: string;
  industry?: string;
  avatarUrl?: string;
}

// ── Provider ──────────────────────────────────────────────────────────────────

export interface Provider {
  id: string;
  name: string;
  category: string;
  description: string;
  authType: "OAUTH2" | "API_KEY";
  logoUrl: string;
  moduleRelevance: string[];
  isActive: boolean;
  createdAt: string;
}

// ── Integration ───────────────────────────────────────────────────────────────

export type IntegrationStatus =
  | "CONNECTED"
  | "NOT_CONNECTED"
  | "ERROR"
  | "EXPIRED";

export interface Integration {
  id: string;
  tenantId: string;
  clientId: string;
  providerId: string;
  status: IntegrationStatus;
  accountLabel: string | null;
  credentials: unknown;
  lastSyncAt: string | null;
  metadata: unknown;
  createdAt: string;
  updatedAt: string;
  provider: Provider;
}

export interface ProviderWithStatus extends Provider {
  integration: Integration | null;
}

// ── Sync log ──────────────────────────────────────────────────────────────────

export type SyncStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS";

export interface SyncLog {
  id: string;
  integrationId: string;
  triggeredAt: string;
  status: SyncStatus;
  recordsSynced: number | null;
  errorMessage: string | null;
}

// ── Platform integration ──────────────────────────────────────────────────────

export interface PlatformIntegration {
  id: string;
  providerId: string;
  status: IntegrationStatus;
  accountLabel: string | null;
  credentials: unknown;
  lastSyncAt: string | null;
  createdAt: string;
  updatedAt: string;
  provider: Provider;
}

// ── Module readiness ──────────────────────────────────────────────────────────

export interface ModuleReadiness {
  module: string;
  connected: number;
  total: number;
  pct: number;
}

// ── Connection matrix ─────────────────────────────────────────────────────────

export interface ConnectionMatrix {
  providers: Provider[];
  clients: Client[];
  /** matrix[clientId][providerId] = status string */
  matrix: Record<string, Record<string, string>>;
}

// ── Connect inputs ────────────────────────────────────────────────────────────

export interface ConnectApiKeyInput {
  apiKey: string;
  accountLabel?: string;
}

export interface ConnectOAuthInput {
  code: string;
  accountLabel?: string;
}
