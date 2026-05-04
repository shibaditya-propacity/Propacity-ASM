import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { to: "/growth", label: "Dashboard", end: true },
  { to: "/growth/workshops", label: "Workshops" },
  { to: "/growth/prospects", label: "Prospects" },
  { to: "/growth/brand-audits", label: "Brand Audits" },
];

export function AppShell() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 flex flex-col bg-white border-r border-slate-200">
        {/* Logo */}
        <div className="h-14 flex items-center px-5 border-b border-slate-200 shrink-0">
          <span className="text-sm font-bold text-brand-700 tracking-tight">Propacity ASM</span>
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
      </aside>

      {/* Main */}
      <main className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
