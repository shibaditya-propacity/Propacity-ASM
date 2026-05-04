import { ShieldCheck, Users, Zap } from "lucide-react";

const TRUST_PILLS = [
  { icon: ShieldCheck, label: "Secure" },
  { icon: Users,       label: "Role-based Access" },
  { icon: Zap,         label: "Real-time Sync" },
] as const;

export function BrandPanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between h-full bg-brand-500 px-10 py-12 overflow-hidden">
      {/* Dot-grid geometric pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Decorative large circle */}
      <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -right-8 -bottom-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

      {/* Brand wordmark */}
      <div className="relative z-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-1">
          Propacity
        </p>
        <p className="text-lg font-bold text-white tracking-tight">ASM Platform</p>
      </div>

      {/* Hero copy */}
      <div className="relative z-10">
        <h1 className="font-heading text-4xl font-bold text-white leading-[1.15] mb-4">
          Manage smarter.<br />Close faster.
        </h1>
        <p className="text-base text-white/70 leading-relaxed max-w-xs">
          Role-based workspace for modern real estate teams. One platform, every function.
        </p>
      </div>

      {/* Trust pills */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {TRUST_PILLS.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/80"
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
