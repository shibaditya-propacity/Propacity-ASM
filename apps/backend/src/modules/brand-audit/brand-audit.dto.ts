import { z } from "zod";

// ── Developer sub-schema (mirrors DeveloperInput from audit.types.ts) ─────────

export const DeveloperSchema = z.object({
  brandName: z.string().min(1),
  legalName: z.string().optional(),
  domain: z.string().optional(),
  city: z.string().optional(),
  yearEstablished: z.number().int().optional(),
  positioning: z.string().optional(),
  productType: z.string().optional(),
  microMarkets: z.array(z.string()).default([]),
  targetSegments: z.array(z.string()).default([]),
  promoterName: z.string().optional(),
  promoterLinkedIn: z.string().optional(),
  websiteUrl: z.string().optional(),
  instagramHandle: z.string().optional(),
  facebookUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  youtubeUrl: z.string().optional(),
  whatsappNumber: z.string().optional(),
  gmbPlaceId: z.string().optional(),
  acres99Url: z.string().optional(),
  housingUrl: z.string().optional(),
  magicbricksUrl: z.string().optional(),
  reraNumbers: z.array(z.string()).default([]),
  reraState: z.string().optional(),
  adSpendRange: z.string().optional(),
  adPlatforms: z.array(z.string()).default([]),
  crmTool: z.string().optional(),
  competitors: z.array(z.string()).default([]),
  metaAdLibraryName: z.string().optional(),
  collateralDocs: z
    .array(z.object({ name: z.string(), textContent: z.string() }))
    .default([]),
});

export type DeveloperInput = z.infer<typeof DeveloperSchema>;

// ── Create / Update audit ─────────────────────────────────────────────────────

export const CreateAuditSchema = z.object({
  developer: DeveloperSchema,
  auditorName: z.string().optional(),
  objective: z.string().optional(),
  knownRedFlags: z.string().optional(),
  prospectId: z.string().optional(),
});

export type CreateAuditInput = z.infer<typeof CreateAuditSchema>;

// ── Link audit to prospect ────────────────────────────────────────────────────

export const LinkProspectSchema = z.object({
  prospectId: z.string().min(1),
});

export type LinkProspectInput = z.infer<typeof LinkProspectSchema>;

// ── Prospect ID route param ───────────────────────────────────────────────────

export const ProspectIdParamSchema = z.object({
  prospectId: z.string().min(1),
});

export const UpdateAuditSchema = z.object({
  auditorName: z.string().optional(),
  objective: z.string().optional(),
  knownRedFlags: z.string().optional(),
  status: z
    .enum(["DRAFT", "COLLECTING", "ANALYZING", "COMPLETE", "FAILED"])
    .optional(),
  overallScore: z.number().optional(),
});

export type UpdateAuditInput = z.infer<typeof UpdateAuditSchema>;

// ── List query ────────────────────────────────────────────────────────────────

export const ListAuditsQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z
    .enum(["DRAFT", "COLLECTING", "ANALYZING", "COMPLETE", "FAILED"])
    .optional(),
  search: z.string().optional(),
});

export type ListAuditsQuery = z.infer<typeof ListAuditsQuerySchema>;

// ── ID param ──────────────────────────────────────────────────────────────────

export const IdParamSchema = z.object({ id: z.string().min(1) });

export type IdParam = z.infer<typeof IdParamSchema>;

// ── Manual input (dimension override) ────────────────────────────────────────

export const ManualInputSchema = z.object({
  dimensionCode: z.string().min(1),
  data: z.record(z.unknown()),
});

export type ManualInputInput = z.infer<typeof ManualInputSchema>;

// ── Rerun query (dimension + skipCollection flag) ─────────────────────────────

export const RerunQuerySchema = z.object({
  dimension: z.string().min(1),
  skipCollection: z
    .string()
    .transform((v) => v === "true")
    .default("false"),
});

export type RerunQuery = z.infer<typeof RerunQuerySchema>;
