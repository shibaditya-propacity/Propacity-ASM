import { useState } from "react";
import { Sparkles, CheckSquare, Loader2 } from "lucide-react";

interface PostAuditData {
  additionalNotes: string;
  businessGoals: string;
  missingData: string;
  manualCorrections: string;
  aiSuggestions: string;
}

interface Props {
  onSubmit: (data: PostAuditData) => Promise<void>;
}

export function PostAuditForm({ onSubmit }: Props) {
  const [form, setForm] = useState<PostAuditData>({
    additionalNotes: "",
    businessGoals: "",
    missingData: "",
    manualCorrections: "",
    aiSuggestions: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function set(key: keyof PostAuditData, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(form);
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="card card-pad flex flex-col items-center gap-3 py-10 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckSquare className="w-6 h-6 text-emerald-600" />
        </div>
        <p className="text-sm font-semibold text-slate-800">
          Enhancement data saved
        </p>
        <p className="text-xs text-slate-500 max-w-xs">
          The additional context has been saved. Re-run individual dimensions to
          apply these improvements.
        </p>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-violet-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">
            Post-Audit Enhancement
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            Add final context to sharpen the AI analysis before generating
            reports
          </p>
        </div>
      </div>

      <form onSubmit={(e) => void handleSubmit(e)} className="p-5 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Additional Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Additional Notes
            </label>
            <textarea
              value={form.additionalNotes}
              onChange={(e) => set("additionalNotes", e.target.value)}
              rows={4}
              placeholder="Anything the AI should factor into its analysis that wasn't captured above…"
              className="input w-full text-xs resize-none"
            />
          </div>

          {/* Business Goals */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Business Goals
            </label>
            <textarea
              value={form.businessGoals}
              onChange={(e) => set("businessGoals", e.target.value)}
              rows={4}
              placeholder="12-month targets, new launches planned, market expansion goals…"
              className="input w-full text-xs resize-none"
            />
          </div>

          {/* Missing Data */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Missing / Unavailable Data
            </label>
            <textarea
              value={form.missingData}
              onChange={(e) => set("missingData", e.target.value)}
              rows={3}
              placeholder="Data sources that couldn't be collected and why…"
              className="input w-full text-xs resize-none"
            />
          </div>

          {/* Manual Corrections */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Manual Corrections
            </label>
            <textarea
              value={form.manualCorrections}
              onChange={(e) => set("manualCorrections", e.target.value)}
              rows={3}
              placeholder="Any AI findings that were inaccurate and need correction…"
              className="input w-full text-xs resize-none"
            />
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-700">
            AI Improvement Suggestions
          </label>
          <textarea
            value={form.aiSuggestions}
            onChange={(e) => set("aiSuggestions", e.target.value)}
            rows={3}
            placeholder="Specific things you'd like the AI to focus on or improve in its analysis…"
            className="input w-full text-xs resize-none"
          />
        </div>

        <div className="pt-1 flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary flex items-center gap-2 disabled:opacity-60"
          >
            {submitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            {submitting ? "Saving…" : "Save Enhancement Data"}
          </button>
        </div>
      </form>
    </div>
  );
}
