import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/auth/use-auth";
import { emailTaken, saveAccount } from "@/core/auth/token";
import { BrandPanel }       from "../components/brand-panel";
import { PasswordInput }    from "../components/password-input";
import { PasswordStrength } from "../components/password-strength";
import { RoleSelect }       from "../components/role-select";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Fields {
  name:            string;
  email:           string;
  password:        string;
  confirmPassword: string;
  role:            string;
}

interface Errors {
  name?:            string;
  email?:           string;
  password?:        string;
  confirmPassword?: string;
  role?:            string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function validate(fields: Fields): Errors {
  const errs: Errors = {};
  if (fields.name.trim().length < 2)
    errs.name = "Name must be at least 2 characters";
  if (!fields.email)
    errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = "Enter a valid email address";
  else if (!fields.email.endsWith("@propacity.in"))
    errs.email = "Use your Propacity work email (@propacity.in)";
  else if (emailTaken(fields.email))
    errs.email = "An account with this email already exists";
  if (fields.password.length < 6)
    errs.password = "Password must be at least 6 characters";
  if (!fields.confirmPassword)
    errs.confirmPassword = "Please confirm your password";
  else if (fields.password !== fields.confirmPassword)
    errs.confirmPassword = "Passwords do not match";
  if (!fields.role)
    errs.role = "Please select a role";
  return errs;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SignupPage() {
  const { login } = useAuth();
  const navigate  = useNavigate();

  const [fields, setFields] = useState<Fields>({
    name: "", email: "", password: "", confirmPassword: "", role: "",
  });
  const [errors,  setErrors]  = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    // Simulate async call (1.5 s)
    await new Promise((r) => setTimeout(r, 1500));

    saveAccount({
      name:     fields.name.trim(),
      email:    fields.email.trim().toLowerCase(),
      password: fields.password,
      role:     fields.role,
    });
    login(fields.name.trim(), fields.email.trim().toLowerCase(), fields.role, "dev-stub-token", true);
    navigate("/", { replace: true });
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* ── Left: brand panel ── */}
      <div className="lg:w-[45%] shrink-0">
        <BrandPanel />
      </div>

      {/* ── Right: form panel ── */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 overflow-y-auto bg-white">
        <div className="w-full max-w-sm animate-auth-in">
          {/* Header */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500 mb-2">
              Propacity ASM
            </p>
            <h2 className="font-heading text-2xl font-bold text-slate-900">Create your account</h2>
            <p className="mt-1 text-sm text-slate-500">Join your team workspace in seconds.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Full name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={fields.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Riya Sharma"
                autoComplete="name"
                autoFocus
                aria-required="true"
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`input ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-xs text-red-500 mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Work email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={fields.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@propacity.in"
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`input ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-xs text-red-500 mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <PasswordInput
                id="password"
                label="Password"
                value={fields.password}
                onChange={(v) => set("password", v)}
                autoComplete="new-password"
                error={errors.password}
              />
              <PasswordStrength password={fields.password} />
            </div>

            {/* Confirm Password */}
            <PasswordInput
              id="confirm-password"
              label="Confirm password"
              value={fields.confirmPassword}
              onChange={(v) => set("confirmPassword", v)}
              autoComplete="new-password"
              error={errors.confirmPassword}
            />

            {/* Role */}
            <RoleSelect
              value={fields.role}
              onChange={(v) => set("role", v)}
              error={errors.role}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors mt-2"
            >
              {loading ? (
                <>
                  <Spinner />
                  Creating account…
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/signin" className="font-semibold text-brand-500 hover:text-brand-600 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Shared inline sub-component ───────────────────────────────────────────────
function Spinner() {
  return (
    <svg
      className="animate-spin w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
