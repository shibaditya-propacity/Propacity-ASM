import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/auth/use-auth";
import { BrandPanel }    from "../components/brand-panel";
import { PasswordInput } from "../components/password-input";
import { AuthToast }     from "../components/auth-toast";

const BASE_URL = import.meta.env["VITE_API_BASE_URL"] ?? "http://localhost:3000/api/v1";

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

// ── Validation ────────────────────────────────────────────────────────────────
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
  const { login }  = useAuth();
  const navigate   = useNavigate();

  const [fields, setFields] = useState<Fields>({ email: "", password: "", remember: false });
  const [errors,  setErrors]  = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [toast,   setToast]   = useState<string | null>(null);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key !== "remember")
      setErrors((prev) => ({ ...prev, [key]: undefined, form: undefined }));
  }

  const dismissToast = useCallback(() => setToast(null), []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      const res  = await fetch(`${BASE_URL}/auth/signin`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          email:    fields.email.trim().toLowerCase(),
          password: fields.password,
        }),
      });

      const json = await res.json() as {
        ok: boolean;
        data?: { token: string; user: { id: string; name: string; email: string; role: string } };
        error?: { code: string; message: string };
      };

      if (!json.ok || !res.ok) {
        setErrors({ form: json.error?.message ?? "Incorrect email or password." });
        return;
      }

      const { token, user } = json.data!;
      login(user.name, user.email, user.role, token, fields.remember);

      setToast(`Welcome back, ${user.name}! Signed in as ${user.role}.`);
      setTimeout(() => navigate("/", { replace: true }), 2000);

    } catch {
      setErrors({ form: "Could not reach the server. Make sure the backend is running." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {toast && <AuthToast message={toast} onClose={dismissToast} />}

      <div className="flex h-screen bg-white overflow-hidden">
        <div className="lg:w-[45%] shrink-0"><BrandPanel /></div>

        <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 overflow-y-auto bg-white">
          <div className="w-full max-w-sm animate-auth-in">
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500 mb-2">
                Propacity ASM
              </p>
              <h2 className="font-heading text-2xl font-bold text-slate-900">Welcome back</h2>
              <p className="mt-1 text-sm text-slate-500">Sign in to your workspace.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {errors.form && (
                <div role="alert" className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg px-3.5 py-3">
                  <span className="text-red-500 text-xs mt-0.5">⚠</span>
                  <p className="text-xs text-red-700">{errors.form}</p>
                </div>
              )}

              {/* Work Email */}
              <div>
                <label htmlFor="signin-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Work email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="signin-email" type="email" value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@propacity.in" autoComplete="email" autoFocus
                  aria-required="true"
                  className={`input ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
                />
                {errors.email && (
                  <p role="alert" className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="signin-password" className="text-sm font-medium text-slate-700">
                    Password <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <button type="button" className="text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors">
                    Forgot password?
                  </button>
                </div>
                <PasswordInput
                  id="signin-password" label=""
                  value={fields.password} onChange={(v) => set("password", v)}
                  autoComplete="current-password" error={errors.password}
                />
              </div>

              {/* Remember me */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none group">
                <input
                  type="checkbox" checked={fields.remember}
                  onChange={(e) => set("remember", e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                  Remember me
                </span>
              </label>

              <button
                type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors mt-2"
              >
                {loading ? <><Spinner /> Signing in…</> : "Sign in"}
              </button>
            </form>

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

// ── Sub-component ─────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
