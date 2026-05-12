export const integrationKeys = {
  all: ["integrations"] as const,
  // Clients
  clientsList: () => [...integrationKeys.all, "clients"] as const,
  // Providers + status for a specific client
  providers: (clientId: string) =>
    [...integrationKeys.all, "providers", clientId] as const,
  // Readiness for a specific client
  readiness: (clientId: string) =>
    [...integrationKeys.all, "readiness", clientId] as const,
  // Sync logs for a specific client+provider
  syncLogs: (clientId: string, providerId: string, filters?: object) =>
    [
      ...integrationKeys.all,
      "sync-logs",
      clientId,
      providerId,
      filters,
    ] as const,
  // All-clients matrix
  matrix: () => [...integrationKeys.all, "matrix"] as const,
  // Platform services
  platform: () => [...integrationKeys.all, "platform"] as const,
};
