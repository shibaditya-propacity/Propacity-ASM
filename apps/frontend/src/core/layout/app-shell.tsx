import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Menu,
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

const STORAGE_KEY = "sidebar-collapsed";
const SIDEBAR_W_EXPANDED = 240;
const SIDEBAR_W_COLLAPSED = 64;

function getInitialCollapsed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

// ── Shared sidebar content ────────────────────────────────────────────────────
interface SidebarContentProps {
  collapsed: boolean;
  onToggleCollapse?: () => void;
  canScheduleWorkshop: boolean;
  onScheduleClick: () => void;
  onLogout: () => void;
  userName: string | undefined;
  userRole: string | undefined;
  onClose?: () => void;
}

function SidebarContent({
  collapsed,
  onToggleCollapse,
  canScheduleWorkshop,
  onScheduleClick,
  onLogout,
  userName,
  userRole,
  onClose,
}: SidebarContentProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center border-b border-white/10 shrink-0 overflow-hidden px-4">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-[0_0_12px_rgba(45,63,231,0.5)]">
            P
          </div>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.span
                key="logo-text"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="font-heading font-bold text-white text-sm tracking-tight whitespace-nowrap overflow-hidden"
              >
                PROPACITY ASM
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {/* Mobile close */}
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="text-slate-400 hover:text-white transition-colors ml-2 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Schedule CTA */}
      {canScheduleWorkshop && (
        <div className="p-3 border-b border-white/10 shrink-0">
          <button
            onClick={onScheduleClick}
            title={collapsed ? "Schedule a Workshop" : undefined}
            className={`w-full flex items-center justify-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold transition-all duration-200 shadow-[0_0_18px_rgba(45,63,231,0.35)] hover:shadow-[0_0_28px_rgba(45,63,231,0.55)] ${
              collapsed ? "h-9 px-0" : "h-9 px-3"
            }`}
          >
            <CalendarPlus className="w-4 h-4 shrink-0" />
            <AnimatePresence initial={false}>
              {!collapsed && (
                <motion.span
                  key="cta-text"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  Schedule a Workshop
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      )}

      {/* Nav */}
      <nav
        className="flex-1 p-3 flex flex-col"
        style={{ overflow: collapsed ? "visible" : "auto" }}
      >
        {/* Section label */}
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              key="section-label"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1 whitespace-nowrap overflow-hidden"
            >
              Growth
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="space-y-0.5 flex-1">
          {NAV_LINKS.map(({ to, label, end, Icon }) => (
            <li key={to} className="relative group">
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg text-sm transition-colors duration-150 overflow-hidden
                  ${collapsed ? "px-0 py-2.5 justify-center" : "px-3 py-2.5"}
                  ${
                    isActive
                      ? "bg-[rgba(45,63,231,0.15)] text-white font-medium border-l-[3px] border-[#2D3FE7] pl-[calc(0.75rem-3px)]"
                      : "text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)] border-l-[3px] border-transparent"
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <AnimatePresence initial={false}>
                  {!collapsed && (
                    <motion.span
                      key={`nav-${label}`}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.18, ease: "easeInOut" }}
                      className="whitespace-nowrap overflow-hidden"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>

              {/* Tooltip — only when collapsed */}
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

        {/* Collapse toggle — desktop only */}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex items-center justify-center w-full h-8 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors mt-2"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        )}
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
                ? `${userName ?? "User"} · ${userRole ?? ""}`
                : undefined
            }
            className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-xs font-bold text-brand-300 shrink-0 cursor-default"
          >
            {userName?.[0]?.toUpperCase() ?? "U"}
          </div>

          {/* Name + role */}
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                key="user-info"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
                className="flex-1 min-w-0 overflow-hidden"
              >
                <p className="text-xs font-semibold text-white truncate">
                  {userName}
                </p>
                <p className="text-[10px] text-white/40 truncate mt-0.5">
                  {userRole}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Logout */}
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.button
                key="logout-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={onLogout}
                aria-label="Sign out"
                className="text-slate-500 hover:text-white transition-colors shrink-0"
              >
                <LogOut className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export function AppShell() {
  const [collapsed, setCollapsed] = useState(getInitialCollapsed);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const canScheduleWorkshop = user?.role !== "Developer";

  function toggleCollapsed() {
    setCollapsed((v) => {
      const next = !v;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {}
      return next;
    });
  }

  function handleLogout() {
    logout();
    navigate("/signin", { replace: true });
  }

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [navigate]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const sidebarProps: Omit<
    SidebarContentProps,
    "collapsed" | "onClose" | "onToggleCollapse"
  > = {
    canScheduleWorkshop,
    onScheduleClick: () => {
      setWorkshopModalOpen(true);
      setMobileOpen(false);
    },
    onLogout: handleLogout,
    userName: user?.name,
    userRole: user?.role,
  };

  return (
    <div className="flex h-screen bg-[#F4F6FB]">
      {/* ── Desktop sidebar ── */}
      <motion.aside
        animate={{
          width: collapsed ? SIDEBAR_W_COLLAPSED : SIDEBAR_W_EXPANDED,
        }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="hidden md:flex shrink-0 flex-col bg-[#0F172A] z-20 overflow-visible"
        style={{
          minWidth: collapsed ? SIDEBAR_W_COLLAPSED : SIDEBAR_W_EXPANDED,
        }}
      >
        <SidebarContent
          collapsed={collapsed}
          onToggleCollapse={toggleCollapsed}
          {...sidebarProps}
        />
      </motion.aside>

      {/* ── Mobile: hamburger button ── */}
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
        className="md:hidden fixed top-3 left-3 z-30 w-9 h-9 flex items-center justify-center rounded-lg bg-[#0F172A] text-white shadow-lg"
      >
        <Menu className="w-4 h-4" />
      </button>

      {/* ── Mobile: overlay drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: -SIDEBAR_W_EXPANDED }}
              animate={{ x: 0 }}
              exit={{ x: -SIDEBAR_W_EXPANDED }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden fixed inset-y-0 left-0 z-50 flex flex-col bg-[#0F172A]"
              style={{ width: SIDEBAR_W_EXPANDED }}
            >
              <SidebarContent
                collapsed={false}
                onClose={() => setMobileOpen(false)}
                {...sidebarProps}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

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
