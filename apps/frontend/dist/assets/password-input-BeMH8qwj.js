import { c as l, j as e, U as p, r as m } from "./index-DFd5EwAv.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u = l("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4",
    },
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej",
    },
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f = l("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b = l("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j = l("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  w = [
    { icon: b, label: "Secure" },
    { icon: p, label: "Role-based Access" },
    { icon: j, label: "Real-time Sync" },
  ];
function g() {
  return e.jsxs("div", {
    className:
      "relative hidden lg:flex flex-col justify-between h-full bg-brand-500 px-10 py-12 overflow-hidden",
    children: [
      e.jsxs("svg", {
        "aria-hidden": "true",
        className: "absolute inset-0 w-full h-full opacity-[0.12]",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          e.jsx("defs", {
            children: e.jsx("pattern", {
              id: "dot-grid",
              x: "0",
              y: "0",
              width: "28",
              height: "28",
              patternUnits: "userSpaceOnUse",
              children: e.jsx("circle", {
                cx: "1.5",
                cy: "1.5",
                r: "1.5",
                fill: "white",
              }),
            }),
          }),
          e.jsx("rect", {
            width: "100%",
            height: "100%",
            fill: "url(#dot-grid)",
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none",
      }),
      e.jsx("div", {
        className:
          "absolute -right-8 -bottom-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none",
      }),
      e.jsxs("div", {
        className: "relative z-10",
        children: [
          e.jsx("p", {
            className:
              "text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-1",
            children: "Propacity",
          }),
          e.jsx("p", {
            className: "text-lg font-bold text-white tracking-tight",
            children: "ASM Platform",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "relative z-10",
        children: [
          e.jsxs("h1", {
            className:
              "font-heading text-4xl font-bold text-white leading-[1.15] mb-4",
            children: ["Manage smarter.", e.jsx("br", {}), "Close faster."],
          }),
          e.jsx("p", {
            className: "text-base text-white/70 leading-relaxed max-w-xs",
            children:
              "Role-based workspace for modern real estate teams. One platform, every function.",
          }),
        ],
      }),
      e.jsx("div", {
        className: "relative z-10 flex flex-wrap gap-2",
        children: w.map(({ icon: t, label: s }) =>
          e.jsxs(
            "span",
            {
              className:
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/80",
              children: [e.jsx(t, { className: "w-3.5 h-3.5" }), s],
            },
            s,
          ),
        ),
      }),
    ],
  });
}
function v({
  id: t,
  label: s,
  value: n,
  onChange: c,
  error: a,
  placeholder: d = "••••••••",
  autoComplete: o,
  autoFocus: x,
}) {
  const [r, h] = m.useState(!1);
  return e.jsxs("div", {
    children: [
      s &&
        e.jsxs("label", {
          htmlFor: t,
          className: "block text-sm font-medium text-slate-700 mb-1.5",
          children: [
            s,
            " ",
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
          e.jsx("input", {
            id: t,
            type: r ? "text" : "password",
            value: n,
            onChange: (i) => c(i.target.value),
            placeholder: d,
            autoComplete: o,
            autoFocus: x,
            "aria-required": "true",
            "aria-describedby": a ? `${t}-error` : void 0,
            className: `input pr-10 ${a ? "border-red-400 focus:ring-red-400" : ""}`,
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => h((i) => !i),
            "aria-label": r ? "Hide password" : "Show password",
            className:
              "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",
            children: r
              ? e.jsx(u, { className: "w-4 h-4" })
              : e.jsx(f, { className: "w-4 h-4" }),
          }),
        ],
      }),
      a &&
        e.jsx("p", {
          id: `${t}-error`,
          role: "alert",
          className: "text-xs text-red-500 mt-1.5",
          children: a,
        }),
    ],
  });
}
export { g as B, v as P };
