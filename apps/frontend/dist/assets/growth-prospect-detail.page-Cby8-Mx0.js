import {
  c as f,
  h as x,
  i as o,
  k as p,
  l as h,
  n as v,
  j as e,
  t as y,
  q as b,
  U as N,
  p as S,
  r as A,
  f as w,
  L as P,
} from "./index-lPmb1MQk.js";
import { u as j, C, E as g, T as q } from "./chip-TP8sKoPN.js";
import { P as L } from "./prospect-stage-badge-DZEP1A3d.js";
import { C as k } from "./prospect.schema-B58jpFhk.js";
import { A as E } from "./en-US-Dc-C28vX.js";
import { M as F } from "./message-square-DsIKx4zZ.js";
import { f as B } from "./format-BYjKddXJ.js";
import { P as T } from "./progress-bar-aDGUIu-U.js";
import { A as M } from "./arrow-left-tpILdntb.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K = f("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D = f("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
function Q(t) {
  return j({
    queryKey: o.prospect(t),
    queryFn: () => x.get(`/growth/prospects/${t}`),
    enabled: !!t,
  });
}
function U(t) {
  return j({
    queryKey: o.prospectActivities(t),
    queryFn: () => x.get(`/growth/prospects/${t}/activities`),
    enabled: !!t,
  });
}
function $(t) {
  return j({
    queryKey: o.prospectBrandAudit(t),
    queryFn: () => x.get(`/growth/prospects/${t}/brand-audit`),
    enabled: !!t,
    retry: (s, i) => (i.statusCode === 404 ? !1 : s < 2),
  });
}
function R() {
  const t = p();
  return h({
    mutationFn: (s) => x.post("/growth/brand-audits", s),
    onSuccess: (s, i) => {
      (t.invalidateQueries({ queryKey: o.brandAuditsList() }),
        t.invalidateQueries({ queryKey: o.prospectBrandAudit(i.prospectId) }));
    },
  });
}
function O(t) {
  const s = p();
  return h({
    mutationFn: (i) => x.post(`/growth/prospects/${t}/stage`, i),
    onSuccess: () => {
      (s.invalidateQueries({ queryKey: o.prospect(t) }),
        s.invalidateQueries({ queryKey: o.prospectsList() }),
        s.invalidateQueries({ queryKey: o.prospectActivities(t) }));
    },
  });
}
const z = [
  "Registered",
  "Attended",
  "Segmented · Agency",
  "Segmented · Transaction",
  "Session Scheduled",
  "Audited",
  "Proposal Sent",
  "In Discussion",
  "Won",
  "Lost",
];
function _({ prospectId: t, currentStage: s, onSuccess: i }) {
  const { mutate: r, isPending: n, error: l } = O(t),
    {
      register: d,
      handleSubmit: a,
      formState: { errors: c },
    } = v({ resolver: y(b), defaultValues: { stage: s } });
  function u(m) {
    r(m, { onSuccess: i });
  }
  return e.jsxs("form", {
    onSubmit: a(u),
    className: "space-y-3",
    children: [
      e.jsxs("div", {
        children: [
          e.jsxs("label", {
            className: "block text-xs font-medium text-slate-700 mb-1",
            children: [
              "Stage ",
              e.jsx("span", { className: "text-red-500", children: "*" }),
            ],
          }),
          e.jsx("select", {
            ...d("stage"),
            className: "input w-full",
            children: z.map((m) =>
              e.jsx("option", { value: m, children: m }, m),
            ),
          }),
          c.stage &&
            e.jsx("p", {
              className: "text-xs text-red-500 mt-1",
              children: c.stage.message,
            }),
        ],
      }),
      e.jsxs("div", {
        children: [
          e.jsx("label", {
            className: "block text-xs font-medium text-slate-700 mb-1",
            children: "Notes",
          }),
          e.jsx("textarea", {
            ...d("notes"),
            className: "input w-full min-h-[70px]",
            placeholder: "Reason for stage change...",
          }),
        ],
      }),
      l &&
        e.jsx("p", {
          className: "text-xs text-red-500",
          children: l instanceof Error ? l.message : "Failed to update stage",
        }),
      e.jsx("div", {
        className: "flex justify-end",
        children: e.jsx("button", {
          type: "submit",
          disabled: n,
          className: "btn btn-primary",
          children: n ? "Updating..." : "Update Stage",
        }),
      }),
    ],
  });
}
const I = { note: F, call: D, email: K, meeting: N, stage_change: E },
  G = {
    note: "bg-slate-100 text-slate-600",
    call: "bg-blue-100 text-blue-600",
    email: "bg-violet-100 text-violet-600",
    meeting: "bg-emerald-100 text-emerald-600",
    stage_change: "bg-amber-100 text-amber-600",
  };
function H(t) {
  return ["note", "call", "email", "meeting", "stage_change"].includes(t)
    ? t
    : "note";
}
function V({ activities: t }) {
  return t.length === 0
    ? e.jsx("p", {
        className: "text-sm text-slate-500 text-center py-6",
        children: "No activities yet.",
      })
    : e.jsx("ol", {
        className: "space-y-4",
        children: t.map((s) => {
          const i = H(s.type),
            r = I[i],
            n = G[i];
          return e.jsxs(
            "li",
            {
              className: "flex gap-3",
              children: [
                e.jsx("div", {
                  className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${n}`,
                  children: e.jsx(r, { className: "w-4 h-4" }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-slate-800",
                      children: s.description,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-slate-400 mt-0.5",
                      children: B(new Date(s.createdAt), "dd MMM yyyy, HH:mm"),
                    }),
                  ],
                }),
              ],
            },
            s.id,
          );
        }),
      });
}
function W(t) {
  const s = p();
  return h({
    mutationFn: (i) => x.post(`/growth/prospects/${t}/activities`, i),
    onSuccess: () => {
      s.invalidateQueries({ queryKey: o.prospectActivities(t) });
    },
  });
}
function J({ prospectId: t, onSuccess: s }) {
  const { mutate: i, isPending: r, error: n } = W(t),
    {
      register: l,
      handleSubmit: d,
      reset: a,
      formState: { errors: c },
    } = v({ resolver: y(k), defaultValues: { type: "note" } });
  function u(m) {
    i(m, {
      onSuccess: () => {
        (a(), s == null || s());
      },
    });
  }
  return e.jsxs("form", {
    onSubmit: d(u),
    className: "space-y-3",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("label", {
            className: "block text-xs font-medium text-slate-700 mb-1",
            children: "Activity Type",
          }),
          e.jsxs("select", {
            ...l("type"),
            className: "input w-full",
            children: [
              e.jsx("option", { value: "note", children: "Note" }),
              e.jsx("option", { value: "call", children: "Call" }),
              e.jsx("option", { value: "email", children: "Email" }),
              e.jsx("option", { value: "meeting", children: "Meeting" }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        children: [
          e.jsxs("label", {
            className: "block text-xs font-medium text-slate-700 mb-1",
            children: [
              "Description ",
              e.jsx("span", { className: "text-red-500", children: "*" }),
            ],
          }),
          e.jsx("textarea", {
            ...l("description"),
            className: "input w-full min-h-[80px]",
            placeholder: "What happened...",
          }),
          c.description &&
            e.jsx("p", {
              className: "text-xs text-red-500 mt-1",
              children: c.description.message,
            }),
        ],
      }),
      n &&
        e.jsx("p", {
          className: "text-xs text-red-500",
          children: n instanceof Error ? n.message : "Failed to add activity",
        }),
      e.jsx("div", {
        className: "flex justify-end",
        children: e.jsx("button", {
          type: "submit",
          disabled: r,
          className: "btn btn-primary",
          children: r ? "Adding..." : "Add Activity",
        }),
      }),
    ],
  });
}
function X(t) {
  switch (t) {
    case "Pending":
      return "amber";
    case "In Progress":
      return "blue";
    case "Reviewed":
      return "violet";
    case "Shared":
      return "emerald";
    case "Converted":
      return "emerald";
    default:
      return "slate";
  }
}
function Y({ audit: t }) {
  return e.jsxs("div", {
    className: "card card-pad space-y-4",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between gap-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("div", {
                className: "text-xs text-slate-500 mb-1",
                children: "Type",
              }),
              e.jsx("div", {
                className: "text-sm font-medium text-slate-800",
                children: t.type,
              }),
            ],
          }),
          e.jsx(C, { tone: X(t.status), children: t.status }),
        ],
      }),
      e.jsx("div", {
        className: "flex items-center gap-6",
        children: e.jsxs("div", {
          children: [
            e.jsx("div", {
              className: "text-xs text-slate-500 mb-0.5",
              children: "Overall Score",
            }),
            e.jsx("div", {
              className: "text-2xl font-bold text-slate-900",
              children: t.overallScore !== null ? t.overallScore : "Pending",
            }),
          ],
        }),
      }),
      t.dimensions.length > 0 &&
        e.jsxs("div", {
          children: [
            e.jsx("div", {
              className: "text-xs font-semibold text-slate-600 mb-2",
              children: "Dimensions",
            }),
            e.jsx("ul", {
              className: "space-y-2",
              children: t.dimensions.map((s) =>
                e.jsxs(
                  "li",
                  {
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between text-xs text-slate-600 mb-1",
                        children: [
                          e.jsx("span", { children: s.name }),
                          e.jsx("span", {
                            className: "font-medium",
                            children: s.score,
                          }),
                        ],
                      }),
                      e.jsx(T, { value: s.score, max: 100 }),
                    ],
                  },
                  s.name,
                ),
              ),
            }),
          ],
        }),
      t.topThreeOpportunities.length > 0 &&
        e.jsxs("div", {
          children: [
            e.jsx("div", {
              className: "text-xs font-semibold text-slate-600 mb-2",
              children: "Top Opportunities",
            }),
            e.jsx("ul", {
              className: "list-disc list-inside space-y-1",
              children: t.topThreeOpportunities
                .slice(0, 3)
                .map((s) =>
                  e.jsxs(
                    "li",
                    {
                      className: "text-xs text-slate-700",
                      children: [
                        e.jsx("span", {
                          className: "font-medium",
                          children: s.title,
                        }),
                        s.estimatedUplift &&
                          e.jsxs("span", {
                            className: "text-slate-500",
                            children: [" — ", s.estimatedUplift],
                          }),
                      ],
                    },
                    s.title,
                  ),
                ),
            }),
          ],
        }),
    ],
  });
}
function ce() {
  const { prospectId: t = "" } = S(),
    [s, i] = A.useState(!1),
    r = Q(t),
    n = U(t),
    l = $(t),
    d = R();
  if (r.isLoading) return e.jsx(w, {});
  if (r.isError) return e.jsx(g, { error: r.error, onRetry: r.refetch });
  if (!r.data) return e.jsx(g, { error: new Error("Prospect not found") });
  const a = r.data;
  return e.jsxs("div", {
    className: "flex flex-col flex-1 overflow-auto",
    children: [
      e.jsx(q, {
        title: a.name,
        subtitle: a.company,
        actions: e.jsxs(P, {
          to: "/growth/prospects",
          className:
            "btn text-slate-600 hover:text-slate-900 flex items-center gap-1",
          children: [e.jsx(M, { className: "w-4 h-4" }), "Back"],
        }),
      }),
      e.jsx("div", {
        className: "p-6 flex-1",
        children: e.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "card card-pad",
                  children: [
                    e.jsx("h2", {
                      className: "text-sm font-semibold text-slate-800 mb-4",
                      children: "Prospect Info",
                    }),
                    e.jsx("dl", {
                      className: "space-y-2 text-sm",
                      children: [
                        ["Designation", a.designation],
                        ["Company", a.company],
                        ["Phone", a.phone],
                        ["Email", a.email],
                        ["City", a.city],
                        ["Scale", a.scale],
                        ["Classification", a.classification],
                        [
                          "Fit Score",
                          a.fitScore !== null ? String(a.fitScore) : null,
                        ],
                        [
                          "Est. Deal Size",
                          a.estimatedDealSize !== null
                            ? `₹${a.estimatedDealSize.toLocaleString()}`
                            : null,
                        ],
                        ["Owner PM", a.ownerPm],
                        ["Source", a.source],
                      ].map(([c, u]) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex gap-2",
                            children: [
                              e.jsx("dt", {
                                className: "text-slate-500 w-32 shrink-0",
                                children: c,
                              }),
                              e.jsx("dd", {
                                className: "font-medium text-slate-800",
                                children: u ?? "-",
                              }),
                            ],
                          },
                          c,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "card card-pad",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-3",
                      children: [
                        e.jsx("h2", {
                          className: "text-sm font-semibold text-slate-800",
                          children: "Stage",
                        }),
                        e.jsx("button", {
                          onClick: () => i((c) => !c),
                          className:
                            "btn text-xs text-brand-600 hover:text-brand-700",
                          children: s ? "Cancel" : "Change Stage",
                        }),
                      ],
                    }),
                    e.jsx(L, { stage: a.stage }),
                    s &&
                      e.jsx("div", {
                        className: "mt-4",
                        children: e.jsx(_, {
                          prospectId: t,
                          currentStage: a.stage,
                          onSuccess: () => i(!1),
                        }),
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "card card-pad",
                  children: [
                    e.jsx("h2", {
                      className: "text-sm font-semibold text-slate-800 mb-4",
                      children: "Activities",
                    }),
                    e.jsx("div", {
                      className: "mb-4",
                      children: e.jsx(J, { prospectId: t }),
                    }),
                    n.isLoading
                      ? e.jsx("p", {
                          className: "text-xs text-slate-500",
                          children: "Loading activities...",
                        })
                      : n.isError
                        ? e.jsx("p", {
                            className: "text-xs text-red-500",
                            children: "Failed to load activities.",
                          })
                        : e.jsx(V, { activities: n.data ?? [] }),
                  ],
                }),
                e.jsxs("div", {
                  className: "card card-pad",
                  children: [
                    e.jsx("h2", {
                      className: "text-sm font-semibold text-slate-800 mb-4",
                      children: "Brand Audit",
                    }),
                    l.isLoading
                      ? e.jsx("p", {
                          className: "text-xs text-slate-500",
                          children: "Loading audit...",
                        })
                      : l.data
                        ? e.jsx(Y, { audit: l.data })
                        : e.jsxs("div", {
                            className: "text-center py-4",
                            children: [
                              e.jsx("p", {
                                className: "text-sm text-slate-500 mb-3",
                                children: "No audit yet.",
                              }),
                              e.jsx("button", {
                                onClick: () =>
                                  d.mutate({
                                    prospectId: t,
                                    type: "Brand Positioning",
                                  }),
                                disabled: d.isPending,
                                className: "btn btn-primary",
                                children: d.isPending
                                  ? "Creating..."
                                  : "Trigger Audit",
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
    ],
  });
}
export { ce as default };
