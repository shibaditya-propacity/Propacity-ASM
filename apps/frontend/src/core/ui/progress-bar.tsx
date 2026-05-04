type ProgressBarTone = "brand" | "emerald" | "amber";

interface ProgressBarProps {
  value: number;
  max?: number;
  tone?: ProgressBarTone;
}

const tones: Record<ProgressBarTone, string> = {
  brand: "bg-brand-600",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
};

export function ProgressBar({ value, max = 100, tone = "brand" }: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${tones[tone]}`} style={{ width: `${pct}%` }} />
    </div>
  );
}
