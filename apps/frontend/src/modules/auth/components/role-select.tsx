import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export const ROLES = [
  "Developer",
  "Brand Manager",
  "Product Manager",
  "Sales Executive",
  "Marketing Lead",
  "Operations Manager",
  "Admin",
  "Other",
] as const;

interface RoleSelectProps {
  value:    string;
  onChange: (role: string) => void;
  error?:   string;
}

export function RoleSelect({ value, onChange, error }: RoleSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        Role <span className="text-red-500" aria-hidden="true">*</span>
      </label>

      <div className="relative">
        {/* Transparent overlay to close on outside click */}
        {open && (
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-required="true"
          className={`relative z-20 w-full flex items-center justify-between px-3 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-slate-200 hover:border-slate-300"
          } ${value ? "text-slate-900" : "text-slate-400"}`}
        >
          <span>{value || "Select your role"}</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <ul
            role="listbox"
            className="absolute z-30 top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg max-h-52 overflow-y-auto py-1"
          >
            {ROLES.map((role) => (
              <li
                key={role}
                role="option"
                aria-selected={value === role}
                onClick={() => { onChange(role); setOpen(false); }}
                className={`flex items-center justify-between px-3 py-2.5 text-sm cursor-pointer select-none transition-colors ${
                  value === role
                    ? "bg-brand-50 text-brand-600 font-medium"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {role}
                {value === role && <Check className="w-3.5 h-3.5" />}
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && (
        <p role="alert" className="text-xs text-red-500 mt-1.5">{error}</p>
      )}
    </div>
  );
}
