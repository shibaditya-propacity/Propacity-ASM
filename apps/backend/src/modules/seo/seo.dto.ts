import { z } from "zod";

// ── Params ────────────────────────────────────────────────────────────────────

export const SeoClientIdParamSchema = z.object({
  clientId: z.string().min(1),
});
export type SeoClientIdParam = z.infer<typeof SeoClientIdParamSchema>;

export const SeoKeywordIdParamSchema = z.object({
  clientId: z.string().min(1),
  keywordId: z.string().min(1),
});
export type SeoKeywordIdParam = z.infer<typeof SeoKeywordIdParamSchema>;

export const SeoActionIdParamSchema = z.object({
  clientId: z.string().min(1),
  actionId: z.string().min(1),
});
export type SeoActionIdParam = z.infer<typeof SeoActionIdParamSchema>;

// ── Dashboard ─────────────────────────────────────────────────────────────────

export const SeoDashboardQuerySchema = z.object({
  dateRange: z.enum(["7d", "28d", "90d"]).default("28d"),
});
export type SeoDashboardQuery = z.infer<typeof SeoDashboardQuerySchema>;

// ── Keywords ──────────────────────────────────────────────────────────────────

export const AddKeywordSchema = z.object({
  keyword: z.string().min(1).max(300),
  searchVolume: z.coerce.number().int().min(0).optional(),
});
export type AddKeywordInput = z.infer<typeof AddKeywordSchema>;

// ── Actions ───────────────────────────────────────────────────────────────────

export const ACTION_STATUSES = ["PENDING", "IN_PROGRESS", "COMPLETED"] as const;
export const IMPACT_LEVELS = ["HIGH", "MEDIUM", "LOW"] as const;
export const EFFORT_LEVELS = ["QUICK", "MEDIUM", "HEAVY"] as const;
export const ACTION_CATEGORIES = [
  "CONTENT",
  "TECHNICAL",
  "SCHEMA",
  "BACKLINKS",
] as const;

export const ActionsQuerySchema = z.object({
  status: z.enum(ACTION_STATUSES).optional(),
  impact: z.enum(IMPACT_LEVELS).optional(),
  effort: z.enum(EFFORT_LEVELS).optional(),
  category: z.enum(ACTION_CATEGORIES).optional(),
});
export type ActionsQuery = z.infer<typeof ActionsQuerySchema>;

export const CreateActionBodySchema = z.object({
  title: z.string().min(1).max(500),
  description: z.string().max(2000).optional(),
  category: z.enum(ACTION_CATEGORIES).default("TECHNICAL"),
  impactLevel: z.enum(IMPACT_LEVELS).default("MEDIUM"),
  effortLevel: z.enum(EFFORT_LEVELS).default("MEDIUM"),
  assignedTo: z.string().max(200).optional(),
  dueDate: z.string().datetime().optional(),
});
export type CreateActionBody = z.infer<typeof CreateActionBodySchema>;

export const UpdateActionBodySchema = z.object({
  title: z.string().min(1).max(500).optional(),
  description: z.string().max(2000).nullable().optional(),
  category: z.enum(ACTION_CATEGORIES).optional(),
  impactLevel: z.enum(IMPACT_LEVELS).optional(),
  effortLevel: z.enum(EFFORT_LEVELS).optional(),
  status: z.enum(ACTION_STATUSES).optional(),
  assignedTo: z.string().max(200).nullable().optional(),
  dueDate: z.string().datetime().nullable().optional(),
});
export type UpdateActionBody = z.infer<typeof UpdateActionBodySchema>;

// Legacy alias kept for any internal consumers
export const UpdateActionStatusSchema = z.object({
  status: z.enum(ACTION_STATUSES),
});
export type UpdateActionStatusInput = z.infer<typeof UpdateActionStatusSchema>;
