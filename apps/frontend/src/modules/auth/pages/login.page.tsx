import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/auth/use-auth";

const LoginSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email")
    .endsWith("@propacity.in", "Use your Propacity work email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginInput = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(data: LoginInput) {
    // Stub: derive display name from email prefix until real auth is in place
    const displayName = (data.email.split("@")[0] ?? data.email)
      .replace(/[._-]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    login(displayName, data.email, "Other", "dev-stub-token", false);
    navigate("/", { replace: true });
  }

  return (
    <AuthLayout>
      <AuthCard
        heading="Welcome back"
        subheading="Sign in to your Propacity workspace"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Field label="Work email" error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              autoComplete="email"
              autoFocus
              className="input w-full"
              placeholder="you@propacity.in"
            />
          </Field>

          <Field label="Password" error={errors.password?.message}>
            <input
              {...register("password")}
              type="password"
              autoComplete="current-password"
              className="input w-full"
              placeholder="••••••••"
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full mt-1"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            Create one
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}

// ── Shared sub-components (login-only scope) ──────────────────────────────────

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-brand-50 flex items-center justify-center p-4">
      {children}
    </div>
  );
}

function AuthCard({
  heading,
  subheading,
  children,
}: {
  heading: string;
  subheading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 overflow-hidden">
      <div className="bg-brand-700 px-8 py-7">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-300 mb-1">
          Propacity ASM
        </p>
        <h1 className="text-2xl font-bold text-white leading-tight">
          {heading}
        </h1>
        <p className="mt-1 text-sm text-brand-200">{subheading}</p>
      </div>
      <div className="px-8 py-7">{children}</div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-700 mb-1.5">
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
