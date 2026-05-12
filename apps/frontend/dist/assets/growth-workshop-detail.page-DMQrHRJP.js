import {
  h as m,
  i as x,
  k as h,
  l as u,
  n as j,
  j as e,
  t as f,
  o as N,
  p as b,
  r as y,
  f as g,
  L as v,
} from "./index-lPmb1MQk.js";
import { u as w, E as o, T as k } from "./chip-TP8sKoPN.js";
import { E as S } from "./empty-state-__a40Nk5.js";
import { u as P, P as C } from "./use-prospects-CjolvR4W.js";
import "./prospect.schema-B58jpFhk.js";
import { W as E } from "./workshop-status-badge-D6bULriC.js";
import { A } from "./arrow-left-tpILdntb.js";
import { f as L } from "./format-BYjKddXJ.js";
import "./prospect-stage-badge-DZEP1A3d.js";
import "./en-US-Dc-C28vX.js";
function F(a) {
  return w({
    queryKey: x.workshop(a),
    queryFn: () => m.get(`/growth/workshops/${a}`),
    enabled: !!a,
  });
}
function W() {
  const a = h();
  return u({
    mutationFn: (i) => m.post("/growth/prospects", i),
    onSuccess: () => {
      a.invalidateQueries({ queryKey: x.prospectsList() });
    },
  });
}
const I = [
  "Meta · Lead Gen",
  "Meta · Workshop ad",
  "LinkedIn Sponsored",
  "Referral",
  "Email",
  "Walk-in",
];
function M({ workshopId: a, onSuccess: i }) {
  const { mutate: n, isPending: l, error: t } = W(),
    {
      register: s,
      handleSubmit: d,
      formState: { errors: r },
    } = j({ resolver: f(N), defaultValues: { workshopId: a } });
  function p(c) {
    n(c, { onSuccess: i });
  }
  return e.jsxs("form", {
    onSubmit: d(p),
    className: "card card-pad space-y-4",
    children: [
      e.jsx("input", { type: "hidden", ...s("workshopId") }),
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: [
                  "Name ",
                  e.jsx("span", { className: "text-red-500", children: "*" }),
                ],
              }),
              e.jsx("input", {
                ...s("name"),
                className: "input w-full",
                placeholder: "Full name",
              }),
              r.name &&
                e.jsx("p", {
                  className: "text-xs text-red-500 mt-1",
                  children: r.name.message,
                }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsxs("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: [
                  "Company ",
                  e.jsx("span", { className: "text-red-500", children: "*" }),
                ],
              }),
              e.jsx("input", {
                ...s("company"),
                className: "input w-full",
                placeholder: "Company name",
              }),
              r.company &&
                e.jsx("p", {
                  className: "text-xs text-red-500 mt-1",
                  children: r.company.message,
                }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: "Designation",
              }),
              e.jsx("input", {
                ...s("designation"),
                className: "input w-full",
                placeholder: "Job title",
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: "Phone",
              }),
              e.jsx("input", {
                ...s("phone"),
                className: "input w-full",
                placeholder: "+91 9999999999",
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: "Email",
              }),
              e.jsx("input", {
                ...s("email"),
                type: "email",
                className: "input w-full",
                placeholder: "email@example.com",
              }),
              r.email &&
                e.jsx("p", {
                  className: "text-xs text-red-500 mt-1",
                  children: r.email.message,
                }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: "City",
              }),
              e.jsx("input", {
                ...s("city"),
                className: "input w-full",
                placeholder: "City",
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: "Acquisition Source",
              }),
              e.jsxs("select", {
                ...s("source"),
                className: "input w-full",
                children: [
                  e.jsx("option", { value: "", children: "Select source" }),
                  I.map((c) => e.jsx("option", { value: c, children: c }, c)),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "md:col-span-2",
            children: [
              e.jsx("label", {
                className: "block text-xs font-medium text-slate-700 mb-1",
                children: "Notes",
              }),
              e.jsx("textarea", {
                ...s("notes"),
                className: "input w-full min-h-[80px]",
                placeholder: "Any notes...",
              }),
            ],
          }),
        ],
      }),
      t &&
        e.jsx("p", {
          className: "text-xs text-red-500",
          children: t instanceof Error ? t.message : "Failed to add prospect",
        }),
      e.jsx("div", {
        className: "flex justify-end",
        children: e.jsx("button", {
          type: "submit",
          disabled: l,
          className: "btn btn-primary",
          children: l ? "Adding..." : "Add Prospect",
        }),
      }),
    ],
  });
}
function J() {
  var d;
  const { workshopId: a = "" } = b(),
    [i, n] = y.useState(!1),
    l = F(a),
    t = P({ workshopId: a });
  if (l.isLoading || t.isLoading) return e.jsx(g, {});
  if (l.isError) return e.jsx(o, { error: l.error, onRetry: l.refetch });
  if (!l.data) return e.jsx(o, { error: new Error("Workshop not found") });
  const s = l.data;
  return e.jsxs("div", {
    className: "flex flex-col flex-1 overflow-auto",
    children: [
      e.jsx(k, {
        title: s.title,
        subtitle: s.city ?? void 0,
        actions: e.jsxs(v, {
          to: "/growth/workshops",
          className:
            "btn text-slate-600 hover:text-slate-900 flex items-center gap-1",
          children: [e.jsx(A, { className: "w-4 h-4" }), "Back"],
        }),
      }),
      e.jsxs("div", {
        className: "p-6 space-y-6 flex-1",
        children: [
          e.jsxs("div", {
            className: "card card-pad",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                  e.jsx("h2", {
                    className: "text-sm font-semibold text-slate-800",
                    children: "Workshop Info",
                  }),
                  e.jsx(E, { status: s.status }),
                ],
              }),
              e.jsxs("dl", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "Date",
                      }),
                      e.jsx("dd", {
                        className: "font-medium text-slate-800",
                        children: L(new Date(s.date), "dd MMM yyyy"),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "Format",
                      }),
                      e.jsx("dd", {
                        className: "font-medium text-slate-800",
                        children: s.format,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "City",
                      }),
                      e.jsx("dd", {
                        className: "font-medium text-slate-800",
                        children: s.city ?? "-",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "Capacity",
                      }),
                      e.jsx("dd", {
                        className: "font-medium text-slate-800",
                        children: s.capacity,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "Registered",
                      }),
                      e.jsx("dd", {
                        className: "font-medium text-slate-800",
                        children: s.registered,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "Attended",
                      }),
                      e.jsx("dd", {
                        className: "font-medium text-slate-800",
                        children: s.attended,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "Ad Spend",
                      }),
                      e.jsxs("dd", {
                        className: "font-medium text-slate-800",
                        children: ["₹", s.adSpend.toLocaleString()],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", {
                        className: "text-xs text-slate-500",
                        children: "Ticket Price",
                      }),
                      e.jsxs("dd", {
                        className: "font-medium text-slate-800",
                        children: ["₹", s.ticketPrice.toLocaleString()],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                  e.jsxs("h2", {
                    className: "text-sm font-semibold text-slate-800",
                    children: [
                      "Prospects (",
                      ((d = t.data) == null ? void 0 : d.length) ?? 0,
                      ")",
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => n((r) => !r),
                    className: "btn btn-primary",
                    children: i ? "Cancel" : "Add Prospect",
                  }),
                ],
              }),
              i &&
                e.jsx("div", {
                  className: "mb-4",
                  children: e.jsx(M, { workshopId: a, onSuccess: () => n(!1) }),
                }),
              t.isError
                ? e.jsx(o, { error: t.error, onRetry: t.refetch })
                : !t.data || t.data.length === 0
                  ? e.jsx(S, {
                      title: "No prospects yet",
                      description: "Add prospects who attended this workshop.",
                    })
                  : e.jsx(C, { prospects: t.data }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { J as default };
