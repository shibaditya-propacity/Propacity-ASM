import { c as y, j as n, L as b, h as v, i as k } from "./index-lPmb1MQk.js";
import { P as I } from "./prospect-stage-badge-DZEP1A3d.js";
import {
  t as i,
  c as S,
  g as N,
  e as O,
  m as p,
  a as g,
  b as T,
  A as X,
} from "./en-US-Dc-C28vX.js";
import { u as A } from "./chip-TP8sKoPN.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R = y("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
function M(t, e) {
  const s = i(t),
    c = i(e),
    a = s.getTime() - c.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function _(t) {
  return S(t, Date.now());
}
function L(t, e) {
  const s = i(t),
    c = i(e),
    a = s.getFullYear() - c.getFullYear(),
    l = s.getMonth() - c.getMonth();
  return a * 12 + l;
}
function F(t) {
  return (e) => {
    const c = (t ? Math[t] : Math.trunc)(e);
    return c === 0 ? 0 : c;
  };
}
function Y(t, e) {
  return +i(t) - +i(e);
}
function C(t) {
  const e = i(t);
  return (e.setHours(23, 59, 59, 999), e);
}
function P(t) {
  const e = i(t),
    s = e.getMonth();
  return (
    e.setFullYear(e.getFullYear(), s + 1, 0),
    e.setHours(23, 59, 59, 999),
    e
  );
}
function $(t) {
  const e = i(t);
  return +C(e) == +P(e);
}
function H(t, e) {
  const s = i(t),
    c = i(e),
    a = M(s, c),
    l = Math.abs(L(s, c));
  let d;
  if (l < 1) d = 0;
  else {
    (s.getMonth() === 1 && s.getDate() > 27 && s.setDate(30),
      s.setMonth(s.getMonth() - a * l));
    let r = M(s, c) === -a;
    ($(i(t)) && l === 1 && M(t, c) === 1 && (r = !1),
      (d = a * (l - Number(r))));
  }
  return d === 0 ? 0 : d;
}
function q(t, e, s) {
  const c = Y(t, e) / 1e3;
  return F(s == null ? void 0 : s.roundingMethod)(c);
}
function z(t, e, s) {
  const c = T(),
    a = (s == null ? void 0 : s.locale) ?? c.locale ?? O,
    l = 2520,
    d = M(t, e);
  if (isNaN(d)) throw new RangeError("Invalid time value");
  const r = Object.assign({}, s, {
    addSuffix: s == null ? void 0 : s.addSuffix,
    comparison: d,
  });
  let m, x;
  d > 0 ? ((m = i(e)), (x = i(t))) : ((m = i(t)), (x = i(e)));
  const u = q(x, m),
    w = (N(x) - N(m)) / 1e3,
    o = Math.round((u - w) / 60);
  let f;
  if (o < 2)
    return s != null && s.includeSeconds
      ? u < 5
        ? a.formatDistance("lessThanXSeconds", 5, r)
        : u < 10
          ? a.formatDistance("lessThanXSeconds", 10, r)
          : u < 20
            ? a.formatDistance("lessThanXSeconds", 20, r)
            : u < 40
              ? a.formatDistance("halfAMinute", 0, r)
              : u < 60
                ? a.formatDistance("lessThanXMinutes", 1, r)
                : a.formatDistance("xMinutes", 1, r)
      : o === 0
        ? a.formatDistance("lessThanXMinutes", 1, r)
        : a.formatDistance("xMinutes", o, r);
  if (o < 45) return a.formatDistance("xMinutes", o, r);
  if (o < 90) return a.formatDistance("aboutXHours", 1, r);
  if (o < p) {
    const h = Math.round(o / 60);
    return a.formatDistance("aboutXHours", h, r);
  } else {
    if (o < l) return a.formatDistance("xDays", 1, r);
    if (o < g) {
      const h = Math.round(o / p);
      return a.formatDistance("xDays", h, r);
    } else if (o < g * 2)
      return ((f = Math.round(o / g)), a.formatDistance("aboutXMonths", f, r));
  }
  if (((f = H(x, m)), f < 12)) {
    const h = Math.round(o / g);
    return a.formatDistance("xMonths", h, r);
  } else {
    const h = f % 12,
      j = Math.trunc(f / 12);
    return h < 3
      ? a.formatDistance("aboutXYears", j, r)
      : h < 9
        ? a.formatDistance("overXYears", j, r)
        : a.formatDistance("almostXYears", j + 1, r);
  }
}
function B(t, e) {
  return z(t, _(t), e);
}
function V({ name: t }) {
  var l, d;
  const e = t.trim().split(/\s+/),
    s = ((l = e[0]) == null ? void 0 : l[0]) ?? "",
    c =
      e.length >= 2
        ? (((d = e[e.length - 1]) == null ? void 0 : d[0]) ?? "")
        : "";
  return (e.length >= 2 ? `${s}${c}` : t.slice(0, 2)).toUpperCase();
}
const D = [
  "bg-brand-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
];
function E(t) {
  const e = [...t].reduce((s, c) => s + c.charCodeAt(0), 0) % D.length;
  return D[e] ?? "bg-brand-500";
}
function G({ prospects: t }) {
  return n.jsx("div", {
    className: "card overflow-hidden",
    children: n.jsxs("table", {
      className: "w-full text-sm",
      children: [
        n.jsx("thead", {
          children: n.jsxs("tr", {
            className: "bg-slate-50 border-b border-slate-200",
            children: [
              n.jsx("th", { className: "th w-[32%]", children: "Prospect" }),
              n.jsx("th", { className: "th", children: "Stage" }),
              n.jsx("th", {
                className: "th hidden md:table-cell",
                children: "City",
              }),
              n.jsx("th", {
                className: "th hidden lg:table-cell",
                children: "Owner",
              }),
              n.jsx("th", { className: "th", children: "Last activity" }),
              n.jsx("th", { className: "th w-10" }),
            ],
          }),
        }),
        n.jsx("tbody", {
          children: t.map((e) =>
            n.jsxs(
              "tr",
              {
                className:
                  "border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition-colors duration-100 group cursor-pointer",
                children: [
                  n.jsx("td", {
                    className: "td",
                    children: n.jsxs(b, {
                      to: `/growth/prospects/${e.id}`,
                      className: "flex items-center gap-3 min-w-0",
                      children: [
                        n.jsx("div", {
                          className: `w-8 h-8 rounded-full ${E(e.name)} flex items-center justify-center text-white text-[11px] font-bold shrink-0`,
                          children: n.jsx(V, { name: e.name }),
                        }),
                        n.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            n.jsx("div", {
                              className:
                                "font-semibold text-slate-900 truncate text-[13px] group-hover:text-brand-600 transition-colors",
                              children: e.name,
                            }),
                            n.jsxs("div", {
                              className:
                                "flex items-center gap-1 text-[11px] text-slate-400 truncate",
                              children: [
                                n.jsx(R, { className: "w-2.5 h-2.5 shrink-0" }),
                                n.jsx("span", { children: e.company }),
                                e.designation &&
                                  n.jsxs(n.Fragment, {
                                    children: [
                                      n.jsx("span", { children: "·" }),
                                      n.jsx("span", {
                                        className: "truncate",
                                        children: e.designation,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("td", {
                    className: "td",
                    children: n.jsx(I, { stage: e.stage }),
                  }),
                  n.jsx("td", {
                    className:
                      "td hidden md:table-cell text-[12px] text-slate-500",
                    children:
                      e.city ??
                      n.jsx("span", {
                        className: "text-slate-300",
                        children: "—",
                      }),
                  }),
                  n.jsx("td", {
                    className:
                      "td hidden lg:table-cell text-[12px] text-slate-500",
                    children:
                      e.ownerPm ??
                      n.jsx("span", {
                        className: "text-slate-300",
                        children: "—",
                      }),
                  }),
                  n.jsx("td", {
                    className:
                      "td text-[12px] text-slate-400 whitespace-nowrap",
                    children: B(new Date(e.lastActivity), { addSuffix: !0 }),
                  }),
                  n.jsx("td", {
                    className: "td pr-4",
                    children: n.jsx(b, {
                      to: `/growth/prospects/${e.id}`,
                      "aria-label": `View ${e.name}`,
                      className:
                        "flex items-center justify-end text-slate-300 group-hover:text-brand-500 transition-colors",
                      children: n.jsx(X, {
                        className:
                          "w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150",
                      }),
                    }),
                  }),
                ],
              },
              e.id,
            ),
          ),
        }),
      ],
    }),
  });
}
function J(t = {}) {
  return A({
    queryKey: k.prospects(t),
    queryFn: () =>
      v.get("/growth/prospects", {
        ...(t.workshopId !== void 0 && { workshopId: t.workshopId }),
        ...(t.stage !== void 0 && { stage: t.stage }),
        ...(t.classification !== void 0 && {
          classification: t.classification,
        }),
        ...(t.search !== void 0 && { search: t.search }),
        limit: t.limit ?? 50,
        offset: t.offset ?? 0,
      }),
  });
}
export { G as P, J as u };
