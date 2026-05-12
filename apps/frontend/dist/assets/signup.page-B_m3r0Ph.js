import {
  c as y,
  j as e,
  r as u,
  u as C,
  a as k,
  L as P,
} from "./index-lPmb1MQk.js";
import { B as S, P as g } from "./password-input-DSMKAb59.js";
import { C as A } from "./chevron-down-BYKXSyfS.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E = y("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
function M(t) {
  if (!t) return { label: "Weak", score: 1, color: "bg-red-400" };
  let a = 0;
  return (
    t.length >= 6 && a++,
    t.length >= 10 && a++,
    /[A-Z]/.test(t) && a++,
    /[0-9]/.test(t) && a++,
    /[^A-Za-z0-9]/.test(t) && a++,
    a <= 2
      ? { label: "Weak", score: 1, color: "bg-red-400" }
      : a <= 3
        ? { label: "Medium", score: 2, color: "bg-amber-400" }
        : { label: "Strong", score: 3, color: "bg-emerald-500" }
  );
}
function $({ password: t }) {
  if (!t) return null;
  const { label: a, score: s, color: l } = M(t);
  return e.jsxs("div", {
    className: "mt-2",
    children: [
      e.jsx("div", {
        className: "flex gap-1 mb-1",
        children: [1, 2, 3].map((r) =>
          e.jsx(
            "div",
            {
              className: `h-1 flex-1 rounded-full transition-all duration-300 ${r <= s ? l : "bg-slate-200"}`,
            },
            r,
          ),
        ),
      }),
      e.jsx("p", {
        className: `text-xs font-medium ${s === 1 ? "text-red-500" : s === 2 ? "text-amber-500" : "text-emerald-600"}`,
        children: a,
      }),
    ],
  });
}
const L = [
  "Developer",
  "Brand Manager",
  "Product Manager",
  "Sales Executive",
  "Marketing Lead",
  "Operations Manager",
  "Admin",
  "Other",
];
function F({ value: t, onChange: a, error: s }) {
  const [l, r] = u.useState(!1);
  return e.jsxs("div", {
    children: [
      e.jsxs("label", {
        className: "block text-sm font-medium text-slate-700 mb-1.5",
        children: [
          "Role ",
          e.jsx("span", {
            className: "text-red-500",
            "aria-hidden": "true",
            children: "*",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "relative",
        children: [
          l &&
            e.jsx("div", {
              className: "fixed inset-0 z-10",
              onClick: () => r(!1),
              "aria-hidden": "true",
            }),
          e.jsxs("button", {
            type: "button",
            onClick: () => r((o) => !o),
            "aria-haspopup": "listbox",
            "aria-expanded": l,
            "aria-required": "true",
            className: `relative z-20 w-full flex items-center justify-between px-3 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow ${s ? "border-red-400 focus:ring-red-400" : "border-slate-200 hover:border-slate-300"} ${t ? "text-slate-900" : "text-slate-400"}`,
            children: [
              e.jsx("span", { children: t || "Select your role" }),
              e.jsx(A, {
                className: `w-4 h-4 text-slate-400 transition-transform duration-200 ${l ? "rotate-180" : ""}`,
              }),
            ],
          }),
          l &&
            e.jsx("ul", {
              role: "listbox",
              className:
                "absolute z-30 top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg max-h-52 overflow-y-auto py-1",
              children: L.map((o) =>
                e.jsxs(
                  "li",
                  {
                    role: "option",
                    "aria-selected": t === o,
                    onClick: () => {
                      (a(o), r(!1));
                    },
                    className: `flex items-center justify-between px-3 py-2.5 text-sm cursor-pointer select-none transition-colors ${t === o ? "bg-brand-50 text-brand-600 font-medium" : "text-slate-700 hover:bg-slate-50"}`,
                    children: [
                      o,
                      t === o && e.jsx(E, { className: "w-3.5 h-3.5" }),
                    ],
                  },
                  o,
                ),
              ),
            }),
        ],
      }),
      s &&
        e.jsx("p", {
          role: "alert",
          className: "text-xs text-red-500 mt-1.5",
          children: s,
        }),
    ],
  });
}
const O = "https://dev.api.propacity.in/brand-audit/api/v1";
function R(t) {
  const a = {};
  return (
    t.name.trim().length < 2 && (a.name = "Name must be at least 2 characters"),
    t.email
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email) ||
        (a.email = "Enter a valid email address")
      : (a.email = "Email is required"),
    t.password.length < 6 &&
      (a.password = "Password must be at least 6 characters"),
    t.confirmPassword
      ? t.password !== t.confirmPassword &&
        (a.confirmPassword = "Passwords do not match")
      : (a.confirmPassword = "Please confirm your password"),
    t.role || (a.role = "Please select a role"),
    a
  );
}
function W() {
  const { login: t } = C(),
    a = k(),
    [s, l] = u.useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    }),
    [r, o] = u.useState({}),
    [h, p] = u.useState(!1);
  function c(n, d) {
    (l((i) => ({ ...i, [n]: d })),
      r[n] && o((i) => ({ ...i, [n]: void 0, form: void 0 })));
  }
  async function w(n) {
    var i, f;
    n.preventDefault();
    const d = R(s);
    if (Object.keys(d).length > 0) {
      o(d);
      return;
    }
    p(!0);
    try {
      const b = await fetch(`${O}/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: s.name.trim(),
            email: s.email.trim().toLowerCase(),
            password: s.password,
            role: s.role,
          }),
        }),
        m = await b.json();
      if (!m.ok || !b.ok) {
        const N =
          ((i = m.error) == null ? void 0 : i.code) === "AUTH_EMAIL_TAKEN"
            ? "An account with this email already exists."
            : (((f = m.error) == null ? void 0 : f.message) ??
              "Sign up failed. Please try again.");
        o({ form: N });
        return;
      }
      const { token: v, user: x } = m.data;
      (t(x.name, x.email, x.role, v, !0), a("/", { replace: !0 }));
    } catch {
      o({
        form: "Could not reach the server. Make sure the backend is running.",
      });
    } finally {
      p(!1);
    }
  }
  return e.jsxs("div", {
    className: "flex h-screen bg-white overflow-hidden",
    children: [
      e.jsx("div", {
        className: "lg:w-[45%] shrink-0",
        children: e.jsx(S, {}),
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
                  className: "font-heading text-2xl font-bold text-slate-900",
                  children: "Create your account",
                }),
                e.jsx("p", {
                  className: "mt-1 text-sm text-slate-500",
                  children: "Join your team workspace in seconds.",
                }),
              ],
            }),
            e.jsxs("form", {
              onSubmit: w,
              noValidate: !0,
              className: "space-y-4",
              children: [
                r.form &&
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
                        children: r.form,
                      }),
                    ],
                  }),
                e.jsx(j, {
                  label: "Full name",
                  error: r.name,
                  htmlFor: "name",
                  children: e.jsx("input", {
                    id: "name",
                    type: "text",
                    value: s.name,
                    onChange: (n) => c("name", n.target.value),
                    placeholder: "Riya Sharma",
                    autoComplete: "name",
                    autoFocus: !0,
                    "aria-required": "true",
                    className: `input ${r.name ? "border-red-400 focus:ring-red-400" : ""}`,
                  }),
                }),
                e.jsx(j, {
                  label: "Work email",
                  error: r.email,
                  htmlFor: "signup-email",
                  children: e.jsx("input", {
                    id: "signup-email",
                    type: "email",
                    value: s.email,
                    onChange: (n) => c("email", n.target.value),
                    placeholder: "you@propacity.in",
                    autoComplete: "email",
                    "aria-required": "true",
                    className: `input ${r.email ? "border-red-400 focus:ring-red-400" : ""}`,
                  }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(g, {
                      id: "signup-password",
                      label: "Password",
                      value: s.password,
                      onChange: (n) => c("password", n),
                      autoComplete: "new-password",
                      error: r.password,
                    }),
                    e.jsx($, { password: s.password }),
                  ],
                }),
                e.jsx(g, {
                  id: "confirm-password",
                  label: "Confirm password",
                  value: s.confirmPassword,
                  onChange: (n) => c("confirmPassword", n),
                  autoComplete: "new-password",
                  error: r.confirmPassword,
                }),
                e.jsx(F, {
                  value: s.role,
                  onChange: (n) => c("role", n),
                  error: r.role,
                }),
                e.jsx("button", {
                  type: "submit",
                  disabled: h,
                  className:
                    "w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors mt-2",
                  children: h
                    ? e.jsxs(e.Fragment, {
                        children: [e.jsx(z, {}), " Creating account…"],
                      })
                    : "Create account",
                }),
              ],
            }),
            e.jsxs("p", {
              className: "mt-6 text-center text-sm text-slate-500",
              children: [
                "Already have an account?",
                " ",
                e.jsx(P, {
                  to: "/signin",
                  className:
                    "font-semibold text-brand-500 hover:text-brand-600 transition-colors",
                  children: "Sign in",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function j({ label: t, error: a, htmlFor: s, children: l }) {
  return e.jsxs("div", {
    children: [
      e.jsxs("label", {
        htmlFor: s,
        className: "block text-sm font-medium text-slate-700 mb-1.5",
        children: [
          t,
          " ",
          e.jsx("span", {
            className: "text-red-500",
            "aria-hidden": "true",
            children: "*",
          }),
        ],
      }),
      l,
      a &&
        e.jsx("p", {
          role: "alert",
          className: "text-xs text-red-500 mt-1.5",
          children: a,
        }),
    ],
  });
}
function z() {
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
