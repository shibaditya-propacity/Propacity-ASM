export type {
  Workshop,
  WorkshopStatus,
  WorkshopFormat,
  CreateWorkshopInput,
  UpdateWorkshopInput,
  ListWorkshopsQuery,
  Prospect,
  ProspectStage,
  ProspectClassification,
  AcquisitionSource,
  CreateProspectInput,
  UpdateProspectInput,
  UpdateProspectStageInput,
  ListProspectsQuery,
  BrandAudit,
  AuditStatus,
  AuditType,
  AuditDimension,
  AuditBenchmark,
  CreateBrandAuditInput,
  ListBrandAuditsQuery,
} from "@asm/schemas";

export interface ProspectActivity {
  id: string;
  tenantId: string;
  prospectId: string;
  actorId: string;
  type: string;
  description: string;
  metadata: unknown;
  createdAt: string;
}

export interface CreateProspectActivityInput {
  type: "stage_change" | "note" | "call" | "email" | "meeting";
  description: string;
  metadata?: Record<string, unknown>;
}
