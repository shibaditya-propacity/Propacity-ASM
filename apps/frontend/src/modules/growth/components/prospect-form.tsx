import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProspectSchema } from "../schemas/prospect.schema";
import { useCreateProspect } from "../api/use-create-prospect";
import type { CreateProspectInput } from "../types";

interface ProspectFormProps {
  workshopId: string;
  onSuccess?: () => void;
}

const ACQUISITION_SOURCES = [
  "Meta · Lead Gen",
  "Meta · Workshop ad",
  "LinkedIn Sponsored",
  "Referral",
  "Email",
  "Walk-in",
] as const;

export function ProspectForm({ workshopId, onSuccess }: ProspectFormProps) {
  const { mutate, isPending, error } = useCreateProspect();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProspectInput>({
    resolver: zodResolver(CreateProspectSchema),
    defaultValues: { workshopId },
  });

  function onSubmit(data: CreateProspectInput) {
    mutate(data, { onSuccess });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card card-pad space-y-4">
      <input type="hidden" {...register("workshopId")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input {...register("name")} className="input w-full" placeholder="Full name" />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Company <span className="text-red-500">*</span>
          </label>
          <input {...register("company")} className="input w-full" placeholder="Company name" />
          {errors.company && (
            <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Designation</label>
          <input
            {...register("designation")}
            className="input w-full"
            placeholder="Job title"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Phone</label>
          <input
            {...register("phone")}
            className="input w-full"
            placeholder="+91 9999999999"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
          <input
            {...register("email")}
            type="email"
            className="input w-full"
            placeholder="email@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">City</label>
          <input {...register("city")} className="input w-full" placeholder="City" />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Acquisition Source
          </label>
          <select {...register("source")} className="input w-full">
            <option value="">Select source</option>
            {ACQUISITION_SOURCES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1">Notes</label>
          <textarea
            {...register("notes")}
            className="input w-full min-h-[80px]"
            placeholder="Any notes..."
          />
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500">
          {error instanceof Error ? error.message : "Failed to add prospect"}
        </p>
      )}

      <div className="flex justify-end">
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "Adding..." : "Add Prospect"}
        </button>
      </div>
    </form>
  );
}
