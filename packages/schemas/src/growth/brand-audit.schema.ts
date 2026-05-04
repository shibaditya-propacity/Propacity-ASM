import { z } from "zod";

export const AuditStatusSchema = z.enum(["Pending", "In Progress", "Reviewed", "Shared", "Converted"]);
export type AuditStatus = z.infer<typeof AuditStatusSchema>;

export const AuditTypeSchema = z.enum([
  "Website",
  "SEO",
  "Ad Performance",
  "Social",
  "Funnel",
  "Brand Positioning",
  "Competitor Analysis",
]);
export type AuditType = z.infer<typeof AuditTypeSchema>;

export const CreateBrandAuditSchema = z.object({
  prospectId: z.string(),
  type: AuditTypeSchema.default("Brand Positioning"),
  notes: z.string().max(2000).optional(),
});
export type CreateBrandAuditInput = z.infer<typeof CreateBrandAuditSchema>;

export const AuditDimensionSchema = z.object({
  name: z.string(),
  score: z.number().int().min(0).max(100),
  weight: z.number().int().min(0).max(100),
  findings: z.array(z.string()),
  opportunity: z.string(),
  estimatedImpact: z.string(),
});
export type AuditDimension = z.infer<typeof AuditDimensionSchema>;

export const AuditBenchmarkSchema = z.object({
  metric: z.string(),
  them: z.string(),
  cohortAvg: z.string(),
  topPerformer: z.string(),
  gapPct: z.number(),
});
export type AuditBenchmark = z.infer<typeof AuditBenchmarkSchema>;

export const BrandAuditSchema = z.object({
  id: z.string(),
  tenantId: z.string(),
  prospectId: z.string(),
  type: AuditTypeSchema,
  status: AuditStatusSchema,
  generatedAt: z.string().nullable(),
  generatedBy: z.string().nullable(),
  overallScore: z.number().nullable(),
  dimensions: z.array(AuditDimensionSchema),
  benchmarks: z.array(AuditBenchmarkSchema),
  topThreeOpportunities: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      estimatedUplift: z.string(),
    })
  ),
  estimatedAnnualUpliftLeads: z.number().nullable(),
  estimatedAnnualUpliftRevenue: z.number().nullable(),
  competitorsAnalysed: z.array(z.string()),
  dataSources: z.array(z.string()),
  notes: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type BrandAudit = z.infer<typeof BrandAuditSchema>;

export const ListBrandAuditsQuerySchema = z.object({
  prospectId: z.string().optional(),
  status: AuditStatusSchema.optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});
export type ListBrandAuditsQuery = z.infer<typeof ListBrandAuditsQuerySchema>;
