import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  id:            string;
  label:         string;
  value:         string;
  onChange:      (v: string) => void;
  error?:        string;
  placeholder?:  string;
  autoComplete?: string;
  autoFocus?:    boolean;
}

export function PasswordInput({
  id,
  label,
  value,
  onChange,
  error,
  placeholder = "••••••••",
  autoComplete,
  autoFocus,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
          {label} <span className="text-red-500" aria-hidden="true">*</span>
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          aria-required="true"
          aria-describedby={error ? `${id}-error` : undefined}
          className={`input pr-10 ${error ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500 mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}
