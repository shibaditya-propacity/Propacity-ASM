import { z } from "zod";

export const WorkshopStatusSchema = z.enum([
  "Upcoming",
  "Live",
  "Completed",
  "Cancelled",
]);
export type WorkshopStatus = z.infer<typeof WorkshopStatusSchema>;

export const WorkshopFormatSchema = z.enum(["Online", "In-person"]);
export type WorkshopFormat = z.infer<typeof WorkshopFormatSchema>;

export const CreateWorkshopSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  format: WorkshopFormatSchema,
  city: z.string().max(100).optional(),
  venue: z.string().max(200).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().max(50).optional(),
  capacity: z.number().int().min(1).max(10000),
  ticketPrice: z.number().int().min(0),
  adSpend: z.number().int().min(0).default(0),
  cpRegistration: z.number().int().min(0).default(0),
  speaker: z.string().max(200).optional(),
  registrationLink: z.string().url().optional().or(z.literal("")),
  tags: z.string().max(500).optional(),
  notes: z.string().max(2000).optional(),
  audienceSegment: z.string().max(200).optional(),
  campaignBudget: z.number().int().min(0).default(0),
  expectedCPR: z.number().int().min(0).default(0),
});
export type CreateWorkshopInput = z.infer<typeof CreateWorkshopSchema>;

export const UpdateWorkshopSchema = CreateWorkshopSchema.partial().extend({
  status: WorkshopStatusSchema.optional(),
  registered: z.number().int().min(0).optional(),
  attended: z.number().int().min(0).optional(),
});
export type UpdateWorkshopInput = z.infer<typeof UpdateWorkshopSchema>;

export const WorkshopSchema = z.object({
  id: z.string(),
  tenantId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  format: WorkshopFormatSchema,
  city: z.string().nullable(),
  venue: z.string().nullable(),
  date: z.string(),
  time: z.string().nullable(),
  capacity: z.number(),
  ticketPrice: z.number(),
  registered: z.number(),
  attended: z.number(),
  adSpend: z.number(),
  cpRegistration: z.number(),
  speaker: z.string().nullable(),
  registrationLink: z.string().nullable(),
  tags: z.string().nullable(),
  notes: z.string().nullable(),
  audienceSegment: z.string().nullable(),
  campaignBudget: z.number(),
  expectedCPR: z.number(),
  status: WorkshopStatusSchema,
  createdByName: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Workshop = z.infer<typeof WorkshopSchema>;

export const ListWorkshopsQuerySchema = z.object({
  status: WorkshopStatusSchema.optional(),
  search: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});
export type ListWorkshopsQuery = z.infer<typeof ListWorkshopsQuerySchema>;
