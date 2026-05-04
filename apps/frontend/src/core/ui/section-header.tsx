import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  right?: ReactNode;
}

export function SectionHeader({ title, description, right }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-3">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
      </div>
      {right}
    </div>
  );
}
