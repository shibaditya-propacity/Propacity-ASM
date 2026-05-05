import { Search, Bell } from "lucide-react";
import type { ReactNode } from "react";
import { useAuth } from "@/core/auth/use-auth";

interface TopbarProps {
  title:     string;
  subtitle?: string;
  actions?:  ReactNode;
}

export function Topbar({ title, subtitle, actions }: TopbarProps) {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 flex items-center px-6 gap-4 shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Page title */}
      <div className="flex-1 min-w-0">
        <h1 className="font-heading text-lg font-bold text-slate-900 leading-tight truncate">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-slate-500 truncate mt-0.5">{subtitle}</p>
        )}
      </div>

      {/* Pill search bar */}
      <button className="relative hidden md:flex items-center gap-2.5 h-9 pl-3.5 pr-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors w-56 text-slate-400 shadow-sm">
        <Search className="w-3.5 h-3.5 shrink-0" />
        <span className="flex-1 text-left text-xs text-slate-400">Search…</span>
        <kbd className="hidden sm:inline text-[10px] font-mono border border-slate-200 rounded-md px-1.5 py-0.5 bg-white text-slate-400">
          ⌘K
        </kbd>
      </button>

      {/* Page-level actions slot */}
      {actions}

      {/* Bell */}
      <button
        aria-label="Notifications"
        className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
      >
        <Bell className="w-4 h-4" />
        {/* Unread dot */}
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500 border-2 border-white" />
      </button>

      {/* User avatar */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
          {user?.name?.[0]?.toUpperCase() ?? "U"}
        </div>
        <div className="hidden sm:block min-w-0">
          <p className="text-xs font-semibold text-slate-800 truncate leading-tight">
            {user?.name}
          </p>
          <p className="text-[10px] text-slate-400 truncate leading-tight">{user?.role}</p>
        </div>
      </div>
    </header>
  );
}
