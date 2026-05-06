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
    <div className="flex h-screen bg-[#F4F6FB]">
      {/* ── Sidebar ── */}
      <aside
        style={{ width: sidebarW }}
        className="shrink-0 flex flex-col bg-[#0F172A] transition-[width] duration-[250ms] ease-in-out z-20 relative overflow-visible"
      >
        {/* Subtle right-edge gradient glow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* ── Semicircle collapse toggle ── */}
        <button
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
            w-5 h-10 flex items-center justify-center
            bg-[#0F172A] rounded-r-full
            border-t border-r border-b border-white/10
            text-slate-500 hover:text-white
            shadow-[3px_0_12px_rgba(0,0,0,0.35)]
            transition-colors duration-150 z-30"
        >
          {collapsed ? (
            <ChevronRight className="w-3 h-3 ml-0.5" />
          ) : (
            <ChevronLeft className="w-3 h-3" />
          )}
        </button>

        {/* Logo */}
        <div className="h-16 flex items-center border-b border-white/8 shrink-0 overflow-hidden px-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src="/propacity-logo.png"
              alt="Propacity"
              width={28}
              height={28}
              className="rounded-lg shrink-0 object-contain"
            />
            <div
              className="overflow-hidden transition-all duration-[250ms]"
              style={{
                opacity: collapsed ? 0 : 1,
                width: collapsed ? 0 : "auto",
                maxWidth: collapsed ? 0 : 160,
              }}
            >
              <img
                src="/propacity-text.png"
                alt="Propacity"
                width={88}
                height={22}
                className="object-contain brightness-0 invert whitespace-nowrap"
              />
            </div>
          </div>
        </div>

        {/* Schedule CTA — hidden for Developer role */}
        {canScheduleWorkshop && (
          <div className="p-3 border-b border-white/8 shrink-0">
            <button
              onClick={() => setWorkshopModalOpen(true)}
              title={collapsed ? "Schedule a Workshop" : undefined}
              className={`w-full flex items-center justify-center gap-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold transition-all duration-[250ms] shadow-[0_0_20px_rgba(45,63,231,0.3)] hover:shadow-[0_0_28px_rgba(45,63,231,0.5)] hover:-translate-y-0.5 ${
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
          className="flex-1 p-3 flex flex-col gap-0.5"
          style={{ overflow: collapsed ? "visible" : "auto" }}
        >
          {/* Section label */}
          <div
            className="px-2 pt-1.5 pb-1 text-[10px] font-semibold uppercase tracking-widest text-white/25 whitespace-nowrap transition-all duration-[200ms] overflow-hidden"
            style={{
              opacity: collapsed ? 0 : 1,
              height: collapsed ? 0 : undefined,
              marginBottom: collapsed ? 0 : 4,
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
                    `flex items-center gap-3 rounded-xl text-sm transition-all duration-150 overflow-hidden
                    ${collapsed ? "px-0 py-2.5 justify-center" : "px-3 py-2.5"}
                    ${
                      isActive
                        ? "bg-brand-500/15 text-white font-semibold border-l-[3px] border-brand-500 pl-[calc(0.75rem-3px)]"
                        : "text-slate-400 hover:text-white hover:bg-white/6 border-l-[3px] border-transparent"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span
                    className="whitespace-nowrap overflow-hidden transition-all duration-[200ms] text-[13px]"
                    style={{
                      maxWidth: collapsed ? 0 : 160,
                      opacity: collapsed ? 0 : 1,
                    }}
                  >
                    {label}
                  </span>
                </NavLink>

                {/* Tooltip (collapsed mode) */}
                {collapsed && (
                  <div
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50
                      px-2.5 py-1.5 bg-slate-800 border border-white/10 text-white text-xs font-medium rounded-lg
                      whitespace-nowrap pointer-events-none shadow-xl
                      opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  >
                    {label}
                    <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="border-t border-white/8 p-3 shrink-0">
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
              className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-xs font-bold text-brand-300 shrink-0 ring-2 ring-brand-500/10"
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
              <p className="text-[13px] font-semibold text-white truncate leading-tight">
                {user?.name}
              </p>
              <p className="text-[10px] text-white/35 truncate mt-0.5 font-medium">
                {user?.role}
              </p>
            </div>

            {/* Logout */}
            {!collapsed && (
              <button
                onClick={handleLogout}
                aria-label="Sign out"
                className="text-slate-600 hover:text-white transition-colors shrink-0 p-1 rounded-lg hover:bg-white/6"
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
              <div className="flex items-center gap-2.5">
                <img
                  src="/propacity-logo.png"
                  alt="Propacity"
                  width={22}
                  height={22}
                  className="rounded-md object-contain"
                />
                <h2 className="font-heading text-base font-bold text-slate-900">
                  Schedule a Workshop
                </h2>
              </div>
              <button
                onClick={() => setWorkshopModalOpen(false)}
                aria-label="Close"
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100"
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
