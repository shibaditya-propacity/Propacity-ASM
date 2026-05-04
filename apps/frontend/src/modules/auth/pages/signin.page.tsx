import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/auth/use-auth";
import { findAccount } from "@/core/auth/token";
import { BrandPanel }    from "../components/brand-panel";
import { PasswordInput } from "../components/password-input";
import { AuthToast }     from "../components/auth-toast";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Fields {
  email:    string;
  password: string;
  remember: boolean;
}

interface Errors {
  email?:    string;
  password?: string;
  form?:     string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function validate(fields: Fields): Errors {
  const errs: Errors = {};
  if (!fields.email)
    errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = "Enter a valid email address";
  if (!fields.password)
    errs.password = "Password is required";
  return errs;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SigninPage() {
  const { login } = useAuth();
  const navigate  = useNavigate();

  const [fields, setFields] = useState<Fields>({ email: "", password: "", remember: false });
  const [errors,  setErrors]  = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [toast,   setToast]   = useState<string | null>(null);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key !== "remember" && errors[key as keyof Errors])
      setErrors((prev) => ({ ...prev, [key]: undefined, form: undefined }));
  }

  const dismissToast = useCallback(() => setToast(null), []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    // Simulate async (1.5 s)
    await new Promise((r) => setTimeout(r, 1500));

    const account = findAccount(fields.email.trim().toLowerCase());

    if (!account || account.password !== fields.password) {
      setErrors({ form: "Incorrect email or password. Please try again." });
      setLoading(false);
      return;
    }

    login(account.name, account.email, account.role, "dev-stub-token", fields.remember);

    // Show welcome toast, then navigate
    setToast(`Welcome back, ${account.name}! Signed in as ${account.role}.`);
    setLoading(false);

    setTimeout(() => navigate("/", { replace: true }), 2000);
  }

  return (
    <>
      {toast && <AuthToast message={toast} onClose={dismissToast} />}

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
              <h2 className="font-heading text-2xl font-bold text-slate-900">Welcome back</h2>
              <p className="mt-1 text-sm text-slate-500">Sign in to your workspace.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Form-level error */}
              {errors.form && (
                <div role="alert" className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg px-3.5 py-3">
                  <span className="text-red-500 mt-0.5 text-xs">⚠</span>
                  <p className="text-xs text-red-700">{errors.form}</p>
                </div>
              )}

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
                  autoFocus
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
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Password <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <button
                    type="button"
                    className="text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <PasswordInput
                  id="password"
                  label=""
                  value={fields.password}
                  onChange={(v) => set("password", v)}
                  autoComplete="current-password"
                  error={errors.password}
                />
              </div>

              {/* Remember me */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none group">
                <input
                  type="checkbox"
                  checked={fields.remember}
                  onChange={(e) => set("remember", e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                  Remember me
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors mt-2"
              >
                {loading ? (
                  <>
                    <Spinner />
                    Signing in…
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* Footer link */}
            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="font-semibold text-brand-500 hover:text-brand-600 transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
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
