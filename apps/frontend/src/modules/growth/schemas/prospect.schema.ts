import { z } from "zod";

export {
  CreateProspectSchema,
  UpdateProspectSchema,
  UpdateProspectStageSchema,
} from "@asm/schemas";
export type {
  CreateProspectInput,
  UpdateProspectInput,
  UpdateProspectStageInput,
} from "@asm/schemas";

export const CreateProspectActivitySchema = z.object({
  type: z.enum(["stage_change", "note", "call", "email", "meeting"]),
  description: z.string().min(1, "Description is required").max(2000),
});
export type CreateProspectActivityInput = z.infer<typeof CreateProspectActivitySchema>;
