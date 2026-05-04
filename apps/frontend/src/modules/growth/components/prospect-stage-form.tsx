import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProspectStageSchema } from "../schemas/prospect.schema";
import { useUpdateProspectStage } from "../api/use-update-prospect-stage";
import type { ProspectStage, UpdateProspectStageInput } from "../types";

interface ProspectStageFormProps {
  prospectId: string;
  currentStage: ProspectStage;
  onSuccess?: () => void;
}

const STAGES: ProspectStage[] = [
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
];

export function ProspectStageForm({
  prospectId,
  currentStage,
  onSuccess,
}: ProspectStageFormProps) {
  const { mutate, isPending, error } = useUpdateProspectStage(prospectId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProspectStageInput>({
    resolver: zodResolver(UpdateProspectStageSchema),
    defaultValues: { stage: currentStage },
  });

  function onSubmit(data: UpdateProspectStageInput) {
    mutate(data, { onSuccess });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Stage <span className="text-red-500">*</span>
        </label>
        <select {...register("stage")} className="input w-full">
          {STAGES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.stage && (
          <p className="text-xs text-red-500 mt-1">{errors.stage.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">Notes</label>
        <textarea
          {...register("notes")}
          className="input w-full min-h-[70px]"
          placeholder="Reason for stage change..."
        />
      </div>

      {error && (
        <p className="text-xs text-red-500">
          {error instanceof Error ? error.message : "Failed to update stage"}
        </p>
      )}

      <div className="flex justify-end">
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "Updating..." : "Update Stage"}
        </button>
      </div>
    </form>
  );
}
