import type { ReactNode } from "react";

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";

interface ChipProps {
  children: ReactNode;
  tone?: ChipTone;
  dot?: boolean;
}

const tones: Record<ChipTone, { pill: string; dot: string }> = {
  slate: {
    pill: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
    dot: "bg-slate-400",
  },
  emerald: {
    pill: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
    dot: "bg-emerald-500",
  },
  amber: {
    pill: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
    dot: "bg-amber-500",
  },
  red: {
    pill: "bg-red-50 text-red-600 ring-1 ring-inset ring-red-200",
    dot: "bg-red-500",
  },
  blue: {
    pill: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200",
    dot: "bg-blue-500",
  },
  violet: {
    pill: "bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200",
    dot: "bg-violet-500",
  },
};

export function Chip({ children, tone = "slate", dot }: ChipProps) {
  const { pill, dot: dotColor } = tones[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${pill}`}
    >
      {dot && (
        <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColor}`} />
      )}
      {children}
    </span>
  );
}
