import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProspectActivitySchema } from "../schemas/prospect.schema";
import { useCreateProspectActivity } from "../api/use-create-prospect-activity";
import type { CreateProspectActivityInput } from "../types";

interface AddActivityFormProps {
  prospectId: string;
  onSuccess?: () => void;
}

export function AddActivityForm({ prospectId, onSuccess }: AddActivityFormProps) {
  const { mutate, isPending, error } = useCreateProspectActivity(prospectId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProspectActivityInput>({
    resolver: zodResolver(CreateProspectActivitySchema),
    defaultValues: { type: "note" },
  });

  function onSubmit(data: CreateProspectActivityInput) {
    mutate(data, {
      onSuccess: () => {
        reset();
        onSuccess?.();
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">Activity Type</label>
        <select {...register("type")} className="input w-full">
          <option value="note">Note</option>
          <option value="call">Call</option>
          <option value="email">Email</option>
          <option value="meeting">Meeting</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("description")}
          className="input w-full min-h-[80px]"
          placeholder="What happened..."
        />
        {errors.description && (
          <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-500">
          {error instanceof Error ? error.message : "Failed to add activity"}
        </p>
      )}

      <div className="flex justify-end">
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "Adding..." : "Add Activity"}
        </button>
      </div>
    </form>
  );
}
