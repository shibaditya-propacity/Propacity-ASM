import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BarChart3,
  CalendarPlus,
  X,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/core/auth/use-auth";
import { WorkshopForm } from "@/modules/growth/components/workshop-form";

// ── Nav config ────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { to: "/growth", label: "Dashboard", end: true, Icon: LayoutDashboard },
  {
    to: "/growth/workshops",
    label: "Workshops",
    end: false,
    Icon: CalendarDays,
  },
  { to: "/growth/prospects", label: "Prospects", end: false, Icon: Users },
  {
    to: "/growth/brand-audits",
    label: "Brand Audits",
    end: false,
    Icon: BarChart3,
  },
] as const;

const SIDEBAR_W_EXPANDED = 240;
const SIDEBAR_W_COLLAPSED = 64;

// ── Component ─────────────────────────────────────────────────────────────────
export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const canScheduleWorkshop = user?.role !== "Developer";

  function handleLogout() {
    logout();
    navigate("/signin", { replace: true });
  }

  const sidebarW = collapsed ? SIDEBAR_W_COLLAPSED : SIDEBAR_W_EXPANDED;

  return (
    /* Root — no overflow-hidden so sidebar tooltips can overflow right */
    <div className="flex h-screen bg-[#F4F6FB]">
      {/* ── Sidebar ── */}
      <aside
        style={{ width: sidebarW }}
        className="shrink-0 flex flex-col bg-[#0F172A] transition-[width] duration-[250ms] ease-in-out z-20"
      >
        {/* Logo */}
        <div className="h-16 flex items-center border-b border-white/10 shrink-0 overflow-hidden px-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center shrink-0 text-white font-bold text-xs">
              P
            </div>
            <span
              className="font-heading font-bold text-white text-sm tracking-tight whitespace-nowrap transition-all duration-[250ms]"
              style={{
                opacity: collapsed ? 0 : 1,
                width: collapsed ? 0 : "auto",
                overflow: "hidden",
              }}
            >
              Propacity ASM
            </span>
          </div>
        </div>

        {/* Schedule CTA — hidden for Developer role */}
        {canScheduleWorkshop && (
          <div className="p-3 border-b border-white/10 shrink-0">
            <button
              onClick={() => setWorkshopModalOpen(true)}
              title={collapsed ? "Schedule a Workshop" : undefined}
              className={`w-full flex items-center justify-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold transition-all duration-[250ms] shadow-[0_0_18px_rgba(45,63,231,0.35)] hover:shadow-[0_0_24px_rgba(45,63,231,0.5)] ${
                collapsed ? "h-9 px-0" : "h-9 px-3"
              }`}
            >
              <CalendarPlus className="w-4 h-4 shrink-0" />
              <span
                className="whitespace-nowrap overflow-hidden transition-all duration-[200ms]"
                style={{
                  maxWidth: collapsed ? 0 : 160,
                  opacity: collapsed ? 0 : 1,
                }}
              >
                Schedule a Workshop
              </span>
            </button>
          </div>
        )}

        {/* Nav */}
        <nav
          className="flex-1 p-3 flex flex-col"
          style={{ overflow: collapsed ? "visible" : "auto" }}
        >
          {/* Section label */}
          <div
            className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1 whitespace-nowrap transition-all duration-[200ms] overflow-hidden"
            style={{
              opacity: collapsed ? 0 : 1,
              height: collapsed ? 0 : undefined,
              marginBottom: collapsed ? 0 : undefined,
            }}
          >
            Growth
          </div>

          <ul className="space-y-0.5 flex-1">
            {NAV_LINKS.map(({ to, label, end, Icon }) => (
              <li key={to} className="relative group">
                <NavLink
                  to={to}
                  end={end}
                  title={collapsed ? label : undefined}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg text-sm transition-colors duration-150 overflow-hidden
                    ${collapsed ? "px-0 py-2.5 justify-center" : "px-3 py-2.5"}
                    ${
                      isActive
                        ? "bg-brand-500/15 text-white font-medium border-l-[3px] border-brand-500 pl-[calc(0.75rem-3px)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5 border-l-[3px] border-transparent"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span
                    className="whitespace-nowrap overflow-hidden transition-all duration-[200ms]"
                    style={{
                      maxWidth: collapsed ? 0 : 160,
                      opacity: collapsed ? 0 : 1,
                    }}
                  >
                    {label}
                  </span>
                </NavLink>

                {/* Custom tooltip (only in collapsed mode) */}
                {collapsed && (
                  <div
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50
                      px-2.5 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-lg
                      whitespace-nowrap pointer-events-none shadow-lg
                      opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  >
                    {label}
                    {/* Arrow */}
                    <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800" />
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Collapse toggle */}
          <button
            onClick={() => setCollapsed((v) => !v)}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex items-center justify-center w-full h-8 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors mt-2"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </nav>

        {/* User section */}
        <div className="border-t border-white/10 p-3 shrink-0">
          <div
            className={`flex items-center gap-2.5 ${collapsed ? "justify-center" : ""}`}
          >
            {/* Avatar */}
            <div
              title={
                collapsed
                  ? `${user?.name ?? "User"} · ${user?.role ?? ""}`
                  : undefined
              }
              className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-xs font-bold text-brand-300 shrink-0"
            >
              {user?.name?.[0]?.toUpperCase() ?? "U"}
            </div>

            {/* Name + role */}
            <div
              className="flex-1 min-w-0 overflow-hidden transition-all duration-[200ms]"
              style={{
                maxWidth: collapsed ? 0 : 160,
                opacity: collapsed ? 0 : 1,
              }}
            >
              <p className="text-xs font-semibold text-white truncate">
                {user?.name}
              </p>
              <p className="text-[10px] text-white/40 truncate mt-0.5">
                {user?.role}
              </p>
            </div>

            {/* Logout */}
            {!collapsed && (
              <button
                onClick={handleLogout}
                aria-label="Sign out"
                className="text-slate-500 hover:text-white transition-colors shrink-0"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Outlet />
      </main>

      {/* ── Schedule Workshop modal ── */}
      {canScheduleWorkshop && workshopModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setWorkshopModalOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
              <h2 className="font-heading text-base font-bold text-slate-900">
                Schedule a Workshop
              </h2>
              <button
                onClick={() => setWorkshopModalOpen(false)}
                aria-label="Close"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <WorkshopForm
                bare
                onSuccess={() => setWorkshopModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
