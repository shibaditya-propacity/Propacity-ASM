import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateWorkshopSchema } from "../schemas/workshop.schema";
import { useCreateWorkshop } from "../api/use-create-workshop";
import type { CreateWorkshopInput } from "../types";

interface WorkshopFormProps {
  onSuccess?: () => void;
  /** When true, renders without the card wrapper (e.g. inside a modal). */
  bare?: boolean;
}

export function WorkshopForm({ onSuccess, bare }: WorkshopFormProps) {
  const { mutate, isPending, error } = useCreateWorkshop();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWorkshopInput>({
    resolver: zodResolver(CreateWorkshopSchema),
    defaultValues: { adSpend: 0, cpRegistration: 0, campaignBudget: 0, expectedCPR: 0 },
  });

  function onSubmit(data: CreateWorkshopInput) {
    mutate(data, { onSuccess });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={bare ? "space-y-4" : "card card-pad space-y-4"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input {...register("title")} className="input w-full" placeholder="Workshop title" />
          {errors.title && (
            <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Format <span className="text-red-500">*</span>
          </label>
          <select {...register("format")} className="input w-full">
            <option value="">Select format</option>
            <option value="Online">Online</option>
            <option value="In-person">In-person</option>
          </select>
          {errors.format && (
            <p className="text-xs text-red-500 mt-1">{errors.format.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Date <span className="text-red-500">*</span>
          </label>
          <input {...register("date")} type="date" className="input w-full" />
          {errors.date && (
            <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Time</label>
          <input {...register("time")} className="input w-full" placeholder="e.g. 10:00 AM" />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">City</label>
          <input {...register("city")} className="input w-full" placeholder="City" />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Venue</label>
          <input {...register("venue")} className="input w-full" placeholder="Venue name" />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Capacity <span className="text-red-500">*</span>
          </label>
          <input
            {...register("capacity", { valueAsNumber: true })}
            type="number"
            min={1}
            className="input w-full"
            placeholder="100"
          />
          {errors.capacity && (
            <p className="text-xs text-red-500 mt-1">{errors.capacity.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Ticket Price (₹) <span className="text-red-500">*</span>
          </label>
          <input
            {...register("ticketPrice", { valueAsNumber: true })}
            type="number"
            min={0}
            className="input w-full"
            placeholder="0"
          />
          {errors.ticketPrice && (
            <p className="text-xs text-red-500 mt-1">{errors.ticketPrice.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Ad Spend (₹)</label>
          <input
            {...register("adSpend", { valueAsNumber: true })}
            type="number"
            min={0}
            className="input w-full"
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Speaker</label>
          <input {...register("speaker")} className="input w-full" placeholder="Speaker name" />
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
          {error instanceof Error ? error.message : "Failed to create workshop"}
        </p>
      )}

      <div className="flex justify-end">
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "Creating..." : "Create Workshop"}
        </button>
      </div>
    </form>
  );
}
