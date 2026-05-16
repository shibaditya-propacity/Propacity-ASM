export const seoKeys = {
  all: ["seo"] as const,

  dashboard: (clientId: string) =>
    [...seoKeys.all, "dashboard", clientId] as const,

  organicTraffic: (clientId: string) =>
    [...seoKeys.all, "organic-traffic", clientId] as const,

  rankTracking: (clientId: string) =>
    [...seoKeys.all, "rank-tracking", clientId] as const,

  keywords: (clientId: string) =>
    [...seoKeys.all, "keywords", clientId] as const,

  actions: (clientId: string) => [...seoKeys.all, "actions", clientId] as const,

  // Re-use the integrations clients list key so both modules share the cache.
  clients: () => ["integrations", "clients"] as const,
};
