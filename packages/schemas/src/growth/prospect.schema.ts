import { z } from "zod";

export const ProspectStageSchema = z.enum([
  "Registered",
  "Attended",
  "Segmented · Agency",
  "Segmented · Transaction",
  "Session Scheduled",
  "Audited",
  "Proposal Sent",
  "In Discussion",
  "Won",
  "Lost",
]);
export type ProspectStage = z.infer<typeof ProspectStageSchema>;

export const ProspectClassificationSchema = z.enum(["Agency", "Transaction", "Both", "Unclear"]);
export type ProspectClassification = z.infer<typeof ProspectClassificationSchema>;

export const AcquisitionSourceSchema = z.enum([
  "Meta · Lead Gen",
  "Meta · Workshop ad",
  "LinkedIn Sponsored",
  "Referral",
  "Email",
  "Walk-in",
]);
export type AcquisitionSource = z.infer<typeof AcquisitionSourceSchema>;

export const CreateProspectSchema = z.object({
  workshopId: z.string(),
  name: z.string().min(1).max(200),
  designation: z.string().max(200).optional(),
  company: z.string().min(1).max(200),
  city: z.string().max(100).optional(),
  scale: z.enum(["Small", "Mid", "Large"]).optional(),
  phone: z.string().max(20).optional(),
  email: z.string().email().optional(),
  source: AcquisitionSourceSchema.optional(),
  notes: z.string().max(2000).optional(),
  ownerPm: z.string().max(200).optional(),
});
export type CreateProspectInput = z.infer<typeof CreateProspectSchema>;

export const UpdateProspectStageSchema = z.object({
  stage: ProspectStageSchema,
  notes: z.string().max(2000).optional(),
});
export type UpdateProspectStageInput = z.infer<typeof UpdateProspectStageSchema>;

export const UpdateProspectSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  designation: z.string().max(200).optional(),
  company: z.string().max(200).optional(),
  city: z.string().max(100).optional(),
  scale: z.enum(["Small", "Mid", "Large"]).optional(),
  phone: z.string().max(20).optional(),
  email: z.string().email().optional(),
  classification: ProspectClassificationSchema.optional(),
  fitScore: z.number().int().min(0).max(100).optional(),
  estimatedDealSize: z.number().int().min(0).optional(),
  notes: z.string().max(2000).optional(),
  ownerPm: z.string().max(200).optional(),
  oneOnOneAt: z.string().optional(),
});
export type UpdateProspectInput = z.infer<typeof UpdateProspectSchema>;

export const ProspectSchema = z.object({
  id: z.string(),
  tenantId: z.string(),
  workshopId: z.string(),
  name: z.string(),
  designation: z.string().nullable(),
  company: z.string(),
  city: z.string().nullable(),
  scale: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string().nullable(),
  source: z.string().nullable(),
  classification: ProspectClassificationSchema.nullable(),
  stage: ProspectStageSchema,
  fitScore: z.number().nullable(),
  estimatedDealSize: z.number().nullable(),
  attended: z.boolean(),
  registeredAt: z.string(),
  oneOnOneAt: z.string().nullable(),
  notes: z.string().nullable(),
  lastActivity: z.string(),
  ownerPm: z.string().nullable(),
  hasAudit: z.boolean(),
  hasProposal: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Prospect = z.infer<typeof ProspectSchema>;

export const ListProspectsQuerySchema = z.object({
  workshopId: z.string().optional(),
  stage: ProspectStageSchema.optional(),
  classification: ProspectClassificationSchema.optional(),
  search: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});
export type ListProspectsQuery = z.infer<typeof ListProspectsQuerySchema>;
