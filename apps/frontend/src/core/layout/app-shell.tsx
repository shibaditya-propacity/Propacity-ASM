import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CalendarPlus, X, LogOut } from "lucide-react";
import { useAuth } from "@/core/auth/use-auth";
// Shell-level concern: WorkshopForm is imported here as a primary CTA in the sidebar.
// If more modules are added, extract to a slot/portal pattern.
import { WorkshopForm } from "@/modules/growth/components/workshop-form";

const navLinks = [
  { to: "/growth", label: "Dashboard", end: true },
  { to: "/growth/workshops", label: "Workshops" },
  { to: "/growth/prospects", label: "Prospects" },
  { to: "/growth/brand-audits", label: "Brand Audits" },
];

export function AppShell() {
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/signin", { replace: true });
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 flex flex-col bg-white border-r border-slate-200">
        {/* Logo */}
        <div className="h-14 flex items-center px-5 border-b border-slate-200 shrink-0">
          <span className="text-sm font-bold text-brand-700 tracking-tight">Propacity ASM</span>
        </div>

        {/* Schedule CTA */}
        <div className="p-3 border-b border-slate-100">
          <button
            onClick={() => setWorkshopModalOpen(true)}
            className="btn btn-primary w-full flex items-center justify-center gap-2 text-xs"
          >
            <CalendarPlus className="w-3.5 h-3.5" />
            Schedule a Workshop
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-3">
          <div className="mb-1 px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Growth
          </div>
          <ul className="space-y-0.5">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-brand-50 text-brand-700 font-medium"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User / Logout */}
        <div className="p-3 border-t border-slate-100 shrink-0">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-semibold text-brand-700 shrink-0">
              {user?.name?.[0]?.toUpperCase() ?? "U"}
            </div>
            <span className="flex-1 text-xs text-slate-600 truncate">{user?.name}</span>
            <button
              onClick={handleLogout}
              aria-label="Sign out"
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Outlet />
      </main>

      {/* Schedule Workshop modal */}
      {workshopModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setWorkshopModalOpen(false); }}
        >
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
              <h2 className="text-base font-semibold text-slate-900">Schedule a Workshop</h2>
              <button
                onClick={() => setWorkshopModalOpen(false)}
                aria-label="Close"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <WorkshopForm bare onSuccess={() => setWorkshopModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
