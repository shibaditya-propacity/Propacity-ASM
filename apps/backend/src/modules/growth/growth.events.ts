import type { Workshop, Prospect, BrandAudit } from "./growth.dto";

export const GrowthEvents = {
  WorkshopCreated: "growth.workshop.created",
  WorkshopUpdated: "growth.workshop.updated",
  ProspectCreated: "growth.prospect.created",
  ProspectStageChanged: "growth.prospect.stage_changed",
  BrandAuditCreated: "growth.brand_audit.created",
  BrandAuditCompleted: "growth.brand_audit.completed",
} as const;

export type GrowthEventPayloads = {
  [GrowthEvents.WorkshopCreated]: { tenantId: string; workshop: Workshop };
  [GrowthEvents.WorkshopUpdated]: { tenantId: string; workshop: Workshop };
  [GrowthEvents.ProspectCreated]: { tenantId: string; prospect: Prospect };
  [GrowthEvents.ProspectStageChanged]: {
    tenantId: string;
    prospectId: string;
    fromStage: string;
    toStage: string;
  };
  [GrowthEvents.BrandAuditCreated]: { tenantId: string; audit: BrandAudit };
  [GrowthEvents.BrandAuditCompleted]: { tenantId: string; audit: BrandAudit };
};
