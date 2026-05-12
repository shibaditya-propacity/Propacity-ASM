import {
  c as k,
  h as A,
  i as S,
  r as h,
  x as C,
  j as e,
  y as D,
  p as R,
  k as E,
  f as L,
  L as F,
} from "./index-lPmb1MQk.js";
import { u as $, C as T, E as w, T as I } from "./chip-TP8sKoPN.js";
import { A as P } from "./audit-status-badge-ChAiCew_.js";
import { C as B } from "./chevron-down-BYKXSyfS.js";
import { A as M } from "./arrow-left-tpILdntb.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q = k("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O = k("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
function W(t) {
  return $({
    queryKey: S.fullAudit(t ?? ""),
    queryFn: () => A.get(`/brand-audit/audits/${t}`),
    enabled: !!t,
  });
}
const K = "https://dev.api.propacity.in/brand-audit/api/v1";
function Q(t, c) {
  const [s, p] = h.useState(!1),
    [l, r] = h.useState([]),
    [i, x] = h.useState(null),
    g = h.useRef(null),
    N = h.useCallback(async () => {
      if (!s) {
        (p(!0), r([]), x(null), (g.current = new AbortController()));
        try {
          const n = await fetch(`${K}/brand-audit/audits/${t}/run`, {
            headers: { Authorization: `Bearer ${C() ?? ""}` },
            signal: g.current.signal,
          });
          if (!n.ok || !n.body)
            throw new Error(`Server responded with ${n.status}`);
          const f = n.body.getReader(),
            j = new TextDecoder();
          let u = "";
          for (;;) {
            const { done: b, value: v } = await f.read();
            if (b) break;
            u += j.decode(v, { stream: !0 });
            const a = u.split(`
`);
            u = a.pop() ?? "";
            for (const o of a)
              if (o.startsWith("data: "))
                try {
                  const m = JSON.parse(o.slice(6));
                  (r((d) => [...d, m]),
                    m.stage === "complete" && (c == null || c()));
                } catch {}
          }
        } catch (n) {
          n.name !== "AbortError" && x(n.message);
        } finally {
          p(!1);
        }
      }
    }, [t, s, c]),
    y = h.useCallback(() => {
      var n;
      (n = g.current) == null || n.abort();
    }, []);
  return { running: s, events: l, error: i, run: N, stop: y };
}
const G = {
  D1: "Brand Overview",
  D2: "Website & SEO",
  D3: "Social Media",
  D4: "Paid Media",
  D5: "Visual Identity",
  D6: "Collateral",
  D7: "Reputation",
  D8: "Technology",
  D9: "Competitors",
  D10: "Promoter",
};
function U(t) {
  switch (t) {
    case "PASS":
      return "emerald";
    case "FAIL":
      return "red";
    case "PARTIAL":
      return "amber";
    default:
      return "slate";
  }
}
function z(t) {
  return t >= 75
    ? "text-emerald-600"
    : t >= 50
      ? "text-amber-600"
      : "text-red-600";
}
function H({ dimension: t }) {
  const [c, s] = h.useState(!1),
    p = G[t.code] ?? t.code,
    l = t.aiFindings;
  return e.jsxs("div", {
    className: "card overflow-hidden",
    children: [
      e.jsxs("button", {
        onClick: () => s((r) => !r),
        className:
          "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors",
        children: [
          c
            ? e.jsx(B, { className: "w-4 h-4 text-slate-400 shrink-0" })
            : e.jsx(D, { className: "w-4 h-4 text-slate-400 shrink-0" }),
          e.jsx("span", {
            className: "text-xs font-bold text-slate-400 w-8 shrink-0",
            children: t.code,
          }),
          e.jsx("span", {
            className: "flex-1 text-sm font-medium text-slate-800",
            children: p,
          }),
          t.score !== null
            ? e.jsx("span", {
                className: `text-sm font-bold tabular-nums ${z(t.score)}`,
                children: t.score,
              })
            : e.jsx("span", {
                className: "text-xs text-slate-400",
                children: "pending",
              }),
        ],
      }),
      c &&
        e.jsxs("div", {
          className: "px-4 pb-4 border-t border-slate-100 pt-3 space-y-4",
          children: [
            t.aiSummary &&
              e.jsx("p", {
                className: "text-xs text-slate-600 leading-relaxed",
                children: t.aiSummary,
              }),
            (l == null ? void 0 : l.strengths) &&
              l.strengths.length > 0 &&
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "text-xs font-semibold text-emerald-700 mb-1.5",
                    children: "Strengths",
                  }),
                  e.jsx("ul", {
                    className: "space-y-1",
                    children: l.strengths.map((r, i) =>
                      e.jsxs(
                        "li",
                        {
                          className: "text-xs text-slate-600 flex gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-emerald-500 shrink-0",
                              children: "✓",
                            }),
                            r,
                          ],
                        },
                        i,
                      ),
                    ),
                  }),
                ],
              }),
            (l == null ? void 0 : l.criticalFlags) &&
              l.criticalFlags.length > 0 &&
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "text-xs font-semibold text-red-600 mb-1.5",
                    children: "Critical Flags",
                  }),
                  e.jsx("ul", {
                    className: "space-y-1",
                    children: l.criticalFlags.map((r, i) =>
                      e.jsxs(
                        "li",
                        {
                          className: "text-xs text-slate-600 flex gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-red-500 shrink-0",
                              children: "!",
                            }),
                            r,
                          ],
                        },
                        i,
                      ),
                    ),
                  }),
                ],
              }),
            (l == null ? void 0 : l.quickWins) &&
              l.quickWins.length > 0 &&
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "text-xs font-semibold text-blue-700 mb-1.5",
                    children: "Quick Wins",
                  }),
                  e.jsx("ul", {
                    className: "space-y-1",
                    children: l.quickWins.map((r, i) =>
                      e.jsxs(
                        "li",
                        {
                          className: "text-xs text-slate-600 flex gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-blue-500 shrink-0",
                              children: "→",
                            }),
                            r,
                          ],
                        },
                        i,
                      ),
                    ),
                  }),
                ],
              }),
            t.items.length > 0 &&
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "text-xs font-semibold text-slate-600 mb-2",
                    children: "Checklist",
                  }),
                  e.jsx("div", {
                    className: "space-y-2",
                    children: t.items.map((r) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex items-start gap-2.5",
                          children: [
                            e.jsx(T, {
                              tone: U(r.status),
                              children: r.status ?? "NA",
                            }),
                            e.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-xs font-medium text-slate-700",
                                  children: r.itemCode,
                                }),
                                r.aiNote &&
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-slate-500 mt-0.5 leading-relaxed",
                                    children: r.aiNote,
                                  }),
                              ],
                            }),
                          ],
                        },
                        r.itemCode,
                      ),
                    ),
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
function _(t) {
  return t <= 40
    ? "needs-work"
    : t <= 60
      ? "developing"
      : t <= 75
        ? "established"
        : t <= 90
          ? "strong"
          : "best-in-class";
}
function J(t) {
  return {
    "needs-work": "Needs Work",
    developing: "Developing",
    established: "Established",
    strong: "Strong",
    "best-in-class": "Best-in-Class",
  }[t];
}
function V(t) {
  return {
    "needs-work": "text-red-600",
    developing: "text-amber-600",
    established: "text-yellow-600",
    strong: "text-green-600",
    "best-in-class": "text-emerald-700",
  }[t];
}
function te() {
  var b, v;
  const { auditId: t = "" } = R(),
    c = E(),
    { data: s, isLoading: p, isError: l, error: r } = W(t);
  function i() {
    c.invalidateQueries({ queryKey: S.fullAudit(t) });
  }
  const { running: x, events: g, error: N, run: y } = Q(t, i);
  if (p) return e.jsx(L, {});
  if (l) return e.jsx(w, { error: r });
  if (!s) return e.jsx(w, { error: new Error("Audit not found") });
  const n = s.status === "DRAFT" || s.status === "FAILED",
    f = x || s.status === "COLLECTING" || s.status === "ANALYZING",
    j = s.overallScore !== null ? _(s.overallScore) : null,
    u = [...s.dimensions].sort((a, o) => {
      const m = (d) => parseInt(d.replace("D", ""), 10) || 99;
      return m(a.code) - m(o.code);
    });
  return e.jsxs("div", {
    className: "flex flex-col flex-1 overflow-auto",
    children: [
      e.jsx(I, {
        title:
          ((b = s.developer) == null ? void 0 : b.brandName) ?? "Brand Audit",
        subtitle: ((v = s.developer) == null ? void 0 : v.city) ?? void 0,
        actions: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsxs(F, {
              to: "/growth/brand-audits",
              className: "btn flex items-center gap-1 text-slate-600",
              children: [e.jsx(M, { className: "w-4 h-4" }), "Back"],
            }),
            (n || f) &&
              e.jsx("button", {
                onClick: () => void y(),
                disabled: f,
                className: "btn-primary flex items-center gap-1.5",
                children: f
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(O, { className: "w-4 h-4 animate-spin" }),
                        "Running…",
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(q, { className: "w-4 h-4" }),
                        "Run Audit",
                      ],
                    }),
              }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "p-6 space-y-6",
        children: [
          e.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
            children: [
              e.jsxs("div", {
                className: "card card-pad flex flex-col gap-1",
                children: [
                  e.jsx("span", {
                    className: "text-xs text-slate-500",
                    children: "Overall Score",
                  }),
                  s.overallScore !== null
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("span", {
                            className:
                              "text-4xl font-bold text-slate-900 font-heading tabular-nums",
                            children: s.overallScore,
                          }),
                          j &&
                            e.jsx("span", {
                              className: `text-xs font-semibold ${V(j)}`,
                              children: J(j),
                            }),
                        ],
                      })
                    : e.jsx("span", {
                        className: "text-2xl font-bold text-slate-300",
                        children: "—",
                      }),
                ],
              }),
              e.jsxs("div", {
                className: "card card-pad flex flex-col gap-1",
                children: [
                  e.jsx("span", {
                    className: "text-xs text-slate-500",
                    children: "Status",
                  }),
                  e.jsx("div", {
                    className: "mt-1",
                    children: e.jsx(P, { status: s.status }),
                  }),
                  s.auditorName &&
                    e.jsxs("span", {
                      className: "text-xs text-slate-500 mt-1",
                      children: ["Auditor: ", s.auditorName],
                    }),
                ],
              }),
              s.dataSourceStatus &&
                e.jsxs("div", {
                  className: "card card-pad flex flex-col gap-1",
                  children: [
                    e.jsx("span", {
                      className: "text-xs text-slate-500",
                      children: "Data Sources",
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3 mt-1",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xl font-bold text-emerald-600 tabular-nums",
                              children: s.dataSourceStatus.collected.length,
                            }),
                            e.jsx("span", {
                              className: "text-xs text-slate-500 ml-1",
                              children: "collected",
                            }),
                          ],
                        }),
                        s.dataSourceStatus.failed.length > 0 &&
                          e.jsxs("div", {
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-xl font-bold text-red-500 tabular-nums",
                                children: s.dataSourceStatus.failed.length,
                              }),
                              e.jsx("span", {
                                className: "text-xs text-slate-500 ml-1",
                                children: "failed",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          (x || g.length > 0) &&
            e.jsxs("div", {
              className: "card card-pad space-y-3",
              children: [
                e.jsx("p", {
                  className: "text-xs font-semibold text-slate-600",
                  children: x ? "Running audit…" : "Last run",
                }),
                N &&
                  e.jsx("p", {
                    className:
                      "text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg",
                    children: N,
                  }),
                e.jsxs("div", {
                  className: "space-y-1.5 max-h-52 overflow-y-auto pr-1",
                  children: [
                    g.map((a, o) => {
                      const m =
                        a.status === "failed"
                          ? "bg-red-400"
                          : a.status === "done" || a.stage === "complete"
                            ? "bg-emerald-400"
                            : "bg-blue-400 animate-pulse";
                      let d = "";
                      return (
                        a.stage === "collecting" && a.source
                          ? (d = `Collecting ${a.source}${a.status === "done" ? " ✓" : a.status === "failed" ? " ✗" : "…"}`)
                          : a.stage === "analyzing" && a.dimension
                            ? (d = `Analysing ${a.dimension}${a.score !== null && a.score !== void 0 ? ` — score ${a.score}` : ""}${a.status === "done" ? " ✓" : "…"}`)
                            : a.stage === "complete"
                              ? (d = `Complete — overall score: ${a.overallScore ?? "—"}`)
                              : a.stage === "error" &&
                                (d = `Error: ${a.message}`),
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center gap-2 text-xs text-slate-600",
                            children: [
                              e.jsx("span", {
                                className: `w-1.5 h-1.5 rounded-full shrink-0 ${m}`,
                              }),
                              d,
                            ],
                          },
                          o,
                        )
                      );
                    }),
                    x &&
                      e.jsx("div", {
                        className:
                          "text-xs text-slate-400 animate-pulse pl-3.5",
                        children: "Processing…",
                      }),
                  ],
                }),
              ],
            }),
          s.developer &&
            e.jsxs("div", {
              className: "card card-pad",
              children: [
                e.jsx("p", {
                  className: "text-xs font-semibold text-slate-600 mb-3",
                  children: "Developer",
                }),
                e.jsx("dl", {
                  className: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2",
                  children: [
                    ["Domain", s.developer.domain],
                    ["Website", s.developer.websiteUrl],
                    ["Instagram", s.developer.instagramHandle],
                    ["Facebook", s.developer.facebookUrl],
                    ["Promoter", s.developer.promoterName],
                    [
                      "Micro Markets",
                      s.developer.microMarkets.join(", ") || null,
                    ],
                  ]
                    .filter(([, a]) => a)
                    .map(([a, o]) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex flex-col gap-0.5",
                          children: [
                            e.jsx("dt", {
                              className: "text-xs text-slate-400",
                              children: a,
                            }),
                            e.jsx("dd", {
                              className:
                                "text-xs font-medium text-slate-700 truncate",
                              children: o,
                            }),
                          ],
                        },
                        a,
                      ),
                    ),
                }),
              ],
            }),
          (s.objective || s.knownRedFlags) &&
            e.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
              children: [
                s.objective &&
                  e.jsxs("div", {
                    className: "card card-pad",
                    children: [
                      e.jsx("p", {
                        className: "text-xs font-semibold text-slate-600 mb-1",
                        children: "Objective",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-slate-600 leading-relaxed",
                        children: s.objective,
                      }),
                    ],
                  }),
                s.knownRedFlags &&
                  e.jsxs("div", {
                    className: "card card-pad",
                    children: [
                      e.jsx("p", {
                        className: "text-xs font-semibold text-red-600 mb-1",
                        children: "Known Red Flags",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-slate-600 leading-relaxed",
                        children: s.knownRedFlags,
                      }),
                    ],
                  }),
              ],
            }),
          u.length > 0 &&
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsxs("p", {
                  className:
                    "text-xs font-semibold text-slate-500 uppercase tracking-wider",
                  children: ["Dimensions (", u.length, ")"],
                }),
                u.map((a) => e.jsx(H, { dimension: a }, a.code)),
              ],
            }),
        ],
      }),
    ],
  });
}
export { te as default };
