import {
  r as l,
  j as e,
  C as v,
  X as y,
  u as k,
  a as C,
  L as S,
} from "./index-lPmb1MQk.js";
import { B as P, P as T } from "./password-input-DSMKAb59.js";
function E({ message: r, onClose: t, duration: a = 3500 }) {
  return (
    l.useEffect(() => {
      const m = setTimeout(t, a);
      return () => clearTimeout(m);
    }, [t, a]),
    e.jsxs("div", {
      role: "status",
      "aria-live": "polite",
      className:
        "fixed top-5 right-5 z-50 flex items-start gap-3 bg-white border border-emerald-200 rounded-xl shadow-lg px-4 py-3.5 max-w-sm animate-toast-in",
      children: [
        e.jsx(v, { className: "w-5 h-5 text-emerald-500 shrink-0 mt-0.5" }),
        e.jsx("p", { className: "text-sm text-slate-700 flex-1", children: r }),
        e.jsx("button", {
          onClick: t,
          "aria-label": "Dismiss notification",
          className: "text-slate-400 hover:text-slate-600 transition-colors",
          children: e.jsx(y, { className: "w-4 h-4" }),
        }),
      ],
    })
  );
}
const F = "https://dev.api.propacity.in/brand-audit/api/v1";
function L(r) {
  const t = {};
  return (
    r.email
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email) ||
        (t.email = "Enter a valid email address")
      : (t.email = "Email is required"),
    r.password || (t.password = "Password is required"),
    t
  );
}
function W() {
  const { login: r } = k(),
    t = C(),
    [a, m] = l.useState({ email: "", password: "", remember: !1 }),
    [i, c] = l.useState({}),
    [h, p] = l.useState(!1),
    [f, b] = l.useState(null);
  function x(s, d) {
    (m((n) => ({ ...n, [s]: d })),
      s !== "remember" && c((n) => ({ ...n, [s]: void 0, form: void 0 })));
  }
  const j = l.useCallback(() => b(null), []);
  async function w(s) {
    var n;
    s.preventDefault();
    const d = L(a);
    if (Object.keys(d).length > 0) {
      c(d);
      return;
    }
    p(!0);
    try {
      const g = await fetch(`${F}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: a.email.trim().toLowerCase(),
            password: a.password,
          }),
        }),
        u = await g.json();
      if (!u.ok || !g.ok) {
        c({
          form:
            ((n = u.error) == null ? void 0 : n.message) ??
            "Incorrect email or password.",
        });
        return;
      }
      const { token: N, user: o } = u.data;
      (r(o.name, o.email, o.role, N, a.remember),
        b(`Welcome back, ${o.name}! Signed in as ${o.role}.`),
        setTimeout(() => t("/", { replace: !0 }), 2e3));
    } catch {
      c({
        form: "Could not reach the server. Make sure the backend is running.",
      });
    } finally {
      p(!1);
    }
  }
  return e.jsxs(e.Fragment, {
    children: [
      f && e.jsx(E, { message: f, onClose: j }),
      e.jsxs("div", {
        className: "flex h-screen bg-white overflow-hidden",
        children: [
          e.jsx("div", {
            className: "lg:w-[45%] shrink-0",
            children: e.jsx(P, {}),
          }),
          e.jsx("div", {
            className:
              "flex-1 flex flex-col justify-center items-center px-6 py-10 overflow-y-auto bg-white",
            children: e.jsxs("div", {
              className: "w-full max-w-sm animate-auth-in",
              children: [
                e.jsxs("div", {
                  className: "mb-8",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500 mb-2",
                      children: "Propacity ASM",
                    }),
                    e.jsx("h2", {
                      className:
                        "font-heading text-2xl font-bold text-slate-900",
                      children: "Welcome back",
                    }),
                    e.jsx("p", {
                      className: "mt-1 text-sm text-slate-500",
                      children: "Sign in to your workspace.",
                    }),
                  ],
                }),
                e.jsxs("form", {
                  onSubmit: w,
                  noValidate: !0,
                  className: "space-y-4",
                  children: [
                    i.form &&
                      e.jsxs("div", {
                        role: "alert",
                        className:
                          "flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg px-3.5 py-3",
                        children: [
                          e.jsx("span", {
                            className: "text-red-500 text-xs mt-0.5",
                            children: "⚠",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-red-700",
                            children: i.form,
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("label", {
                          htmlFor: "signin-email",
                          className:
                            "block text-sm font-medium text-slate-700 mb-1.5",
                          children: [
                            "Work email ",
                            e.jsx("span", {
                              className: "text-red-500",
                              "aria-hidden": "true",
                              children: "*",
                            }),
                          ],
                        }),
                        e.jsx("input", {
                          id: "signin-email",
                          type: "email",
                          value: a.email,
                          onChange: (s) => x("email", s.target.value),
                          placeholder: "you@propacity.in",
                          autoComplete: "email",
                          autoFocus: !0,
                          "aria-required": "true",
                          className: `input ${i.email ? "border-red-400 focus:ring-red-400" : ""}`,
                        }),
                        i.email &&
                          e.jsx("p", {
                            role: "alert",
                            className: "text-xs text-red-500 mt-1.5",
                            children: i.email,
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-1.5",
                          children: [
                            e.jsxs("label", {
                              htmlFor: "signin-password",
                              className: "text-sm font-medium text-slate-700",
                              children: [
                                "Password ",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  "aria-hidden": "true",
                                  children: "*",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              className:
                                "text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors",
                              children: "Forgot password?",
                            }),
                          ],
                        }),
                        e.jsx(T, {
                          id: "signin-password",
                          label: "",
                          value: a.password,
                          onChange: (s) => x("password", s),
                          autoComplete: "current-password",
                          error: i.password,
                        }),
                      ],
                    }),
                    e.jsxs("label", {
                      className:
                        "flex items-center gap-2.5 cursor-pointer select-none group",
                      children: [
                        e.jsx("input", {
                          type: "checkbox",
                          checked: a.remember,
                          onChange: (s) => x("remember", s.target.checked),
                          className:
                            "w-4 h-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500 focus:ring-offset-0 cursor-pointer",
                        }),
                        e.jsx("span", {
                          className:
                            "text-sm text-slate-600 group-hover:text-slate-800 transition-colors",
                          children: "Remember me",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "submit",
                      disabled: h,
                      className:
                        "w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors mt-2",
                      children: h
                        ? e.jsxs(e.Fragment, {
                            children: [e.jsx($, {}), " Signing in…"],
                          })
                        : "Sign in",
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className: "mt-6 text-center text-sm text-slate-500",
                  children: [
                    "Don't have an account?",
                    " ",
                    e.jsx(S, {
                      to: "/signup",
                      className:
                        "font-semibold text-brand-500 hover:text-brand-600 transition-colors",
                      children: "Create one",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function $() {
  return e.jsxs("svg", {
    className: "animate-spin w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: [
      e.jsx("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4",
      }),
      e.jsx("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
      }),
    ],
  });
}
export { W as default };
