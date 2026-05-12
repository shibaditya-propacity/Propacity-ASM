export const IntegrationsEvents = {
  IntegrationConnected: "integrations.connected",
  IntegrationDisconnected: "integrations.disconnected",
  IntegrationSynced: "integrations.synced",
  IntegrationExpired: "integrations.expired",
} as const;

export type IntegrationsEventPayloads = {
  [IntegrationsEvents.IntegrationConnected]: {
    tenantId: string;
    clientId: string;
    providerId: string;
    integrationId: string;
    providerName: string;
  };
  [IntegrationsEvents.IntegrationDisconnected]: {
    tenantId: string;
    clientId: string;
    providerId: string;
    integrationId: string;
  };
  [IntegrationsEvents.IntegrationSynced]: {
    tenantId: string;
    clientId: string;
    integrationId: string;
    status: string;
    recordsSynced: number | null;
  };
  [IntegrationsEvents.IntegrationExpired]: {
    tenantId: string;
    clientId: string;
    integrationId: string;
  };
};
