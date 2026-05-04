import {
  CreateWorkshopSchema,
  UpdateWorkshopSchema,
  ListWorkshopsQuerySchema,
  WorkshopSchema,
  CreateProspectSchema,
  UpdateProspectSchema,
  UpdateProspectStageSchema,
  ListProspectsQuerySchema,
  ProspectSchema,
  CreateBrandAuditSchema,
  BrandAuditSchema,
  ListBrandAuditsQuerySchema,
} from "@asm/schemas";
import { z } from "zod";

// Re-export schemas for route validation
export {
  CreateWorkshopSchema,
  UpdateWorkshopSchema,
  ListWorkshopsQuerySchema,
  CreateProspectSchema,
  UpdateProspectSchema,
  UpdateProspectStageSchema,
  ListProspectsQuerySchema,
  CreateBrandAuditSchema,
  ListBrandAuditsQuerySchema,
};

// Re-export inferred types
export type {
  CreateWorkshopInput,
  UpdateWorkshopInput,
  ListWorkshopsQuery,
  Workshop,
  CreateProspectInput,
  UpdateProspectInput,
  UpdateProspectStageInput,
  ListProspectsQuery,
  Prospect,
  CreateBrandAuditInput,
  ListBrandAuditsQuery,
  BrandAudit,
} from "@asm/schemas";

// ID param schema
export const IdParamSchema = z.object({ id: z.string().min(1) });
export type IdParam = z.infer<typeof IdParamSchema>;

// Workshop attendee update
export const UpdateAttendanceSchema = z.object({
  attended: z.boolean(),
});
export type UpdateAttendanceInput = z.infer<typeof UpdateAttendanceSchema>;

// Prospect activity schema
export const CreateProspectActivitySchema = z.object({
  type: z.enum(["stage_change", "note", "call", "email", "meeting"]),
  description: z.string().min(1).max(2000),
  metadata: z.record(z.unknown()).optional(),
});
export type CreateProspectActivityInput = z.infer<typeof CreateProspectActivitySchema>;

export const ProspectActivitySchema = z.object({
  id: z.string(),
  tenantId: z.string(),
  prospectId: z.string(),
  actorId: z.string(),
  type: z.string(),
  description: z.string(),
  metadata: z.unknown().nullable(),
  createdAt: z.string(),
});
export type ProspectActivity = z.infer<typeof ProspectActivitySchema>;
