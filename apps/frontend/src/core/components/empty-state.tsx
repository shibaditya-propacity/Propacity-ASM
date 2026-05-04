import type { ReactNode } from "react";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
      <PackageOpen className="w-10 h-10 text-slate-300" />
      <div>
        <div className="text-sm font-semibold text-slate-700">{title}</div>
        {description && <div className="text-xs text-slate-500 mt-1">{description}</div>}
      </div>
      {action}
    </div>
  );
}
