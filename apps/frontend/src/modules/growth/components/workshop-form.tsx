import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, CalendarCheck } from "lucide-react";
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
  const [successTitle, setSuccessTitle] = useState<string | null>(null);

  useEffect(() => {
    if (!successTitle) return;
    const t = setTimeout(() => {
      setSuccessTitle(null);
      onSuccess?.();
    }, 2200);
    return () => clearTimeout(t);
  }, [successTitle, onSuccess]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWorkshopInput>({
    resolver: zodResolver(CreateWorkshopSchema),
    defaultValues: {
      adSpend: 0,
      cpRegistration: 0,
      campaignBudget: 0,
      expectedCPR: 0,
    },
  });

  function onSubmit(data: CreateWorkshopInput) {
    mutate(data, {
      onSuccess: () => setSuccessTitle(data.title),
    });
  }

  if (successTitle !== null) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-5 py-14 px-6 text-center"
      >
        {/* Animated ring + icon */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.4,
                type: "spring",
                stiffness: 260,
              }}
            >
              <CheckCircle2
                className="w-10 h-10 text-emerald-500"
                strokeWidth={1.8}
              />
            </motion.div>
          </motion.div>
          {/* Pulse ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="absolute w-20 h-20 rounded-full bg-emerald-400"
          />
        </div>

        <div className="space-y-1.5">
          <motion.h3
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.35 }}
            className="text-lg font-bold text-slate-900"
          >
            Workshop Scheduled!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.35 }}
            className="text-sm text-slate-500 max-w-xs leading-relaxed"
          >
            <span className="font-semibold text-slate-700">{successTitle}</span>{" "}
            has been added to your workshop schedule.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          Closing in a moment…
        </motion.div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={bare ? "space-y-4" : "card card-pad space-y-4"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            {...register("title")}
            className="input w-full"
            placeholder="Workshop title"
          />
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
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Time
          </label>
          <input
            {...register("time")}
            className="input w-full"
            placeholder="e.g. 10:00 AM"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            City
          </label>
          <input
            {...register("city")}
            className="input w-full"
            placeholder="City"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Venue
          </label>
          <input
            {...register("venue")}
            className="input w-full"
            placeholder="Venue name"
          />
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
            <p className="text-xs text-red-500 mt-1">
              {errors.capacity.message}
            </p>
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
            <p className="text-xs text-red-500 mt-1">
              {errors.ticketPrice.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Ad Spend (₹)
          </label>
          <input
            {...register("adSpend", { valueAsNumber: true })}
            type="number"
            min={0}
            className="input w-full"
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Speaker
          </label>
          <input
            {...register("speaker")}
            className="input w-full"
            placeholder="Speaker name"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Notes
          </label>
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
