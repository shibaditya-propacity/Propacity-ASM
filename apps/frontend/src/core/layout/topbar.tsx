import { Search, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface TopbarProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function Topbar({ title, subtitle, actions }: TopbarProps) {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center px-6 gap-4 shrink-0">
      <div className="flex-1 min-w-0">
        <h1 className="text-base font-semibold text-slate-900 leading-tight truncate">{title}</h1>
        {subtitle && <p className="text-xs text-slate-500 truncate">{subtitle}</p>}
      </div>
      <button className="relative hidden md:flex items-center gap-2 pl-3 pr-2 h-8 text-sm border border-slate-200 rounded-lg w-60 bg-slate-50 hover:bg-white text-slate-500">
        <Search className="w-4 h-4 text-slate-400" />
        <span className="flex-1 text-left text-xs">Search...</span>
        <kbd className="text-[10px] font-mono border border-slate-200 rounded px-1 py-0.5 bg-white">⌘K</kbd>
      </button>
      {actions}
      <button className="hidden md:inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-xs font-medium text-white bg-gradient-to-br from-violet-600 to-brand-600 hover:from-violet-700 hover:to-brand-700">
        <Sparkles className="w-3.5 h-3.5" />
        Copilot
      </button>
    </header>
  );
}
