import {
  c as f,
  h as N,
  i as v,
  k as C,
  l as k,
  r as h,
  j as e,
  a as S,
  f as w,
  L as A,
} from "./index-lPmb1MQk.js";
import { u as L, T as P, E as I } from "./chip-TP8sKoPN.js";
import { E as U } from "./empty-state-__a40Nk5.js";
import { A as E } from "./audit-status-badge-ChAiCew_.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M = f("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
function R(r) {
  return L({
    queryKey: v.fullAudits(r),
    queryFn: () =>
      N.get("/brand-audit/audits", {
        ...(r == null ? void 0 : r.search),
        ...(r == null ? void 0 : r.status),
        limit: 100,
        page: 1,
      }),
  });
}
function F() {
  const r = C();
  return k({
    mutationFn: (n) => N.post("/brand-audit/audits", n),
    onSuccess: () => {
      r.invalidateQueries({ queryKey: v.fullAudits() });
    },
  });
}
function l({ label: r, required: n, children: d }) {
  return e.jsxs("div", {
    children: [
      e.jsxs("label", {
        className: "block text-xs font-semibold text-slate-600 mb-1.5",
        children: [
          r,
          n &&
            e.jsx("span", { className: "text-red-500 ml-0.5", children: "*" }),
        ],
      }),
      d,
    ],
  });
}
const B = {
  microMarkets: [],
  targetSegments: [],
  competitors: [],
  adPlatforms: [],
  reraNumbers: [],
};
function D({ onSubmit: r, onCancel: n, submitting: d, prospectId: c }) {
  const [t, x] = h.useState(B),
    [u, g] = h.useState(""),
    [m, b] = h.useState("");
  function s(a, o) {
    x((j) => ({ ...j, [a]: o }));
  }
  function i(a, o) {
    const j = o
      .split(",")
      .map((y) => y.trim())
      .filter(Boolean);
    s(a, j);
  }
  function p(a) {
    var o;
    (a.preventDefault(),
      (o = t.brandName) != null &&
        o.trim() &&
        r({
          developer: {
            brandName: t.brandName,
            legalName: t.legalName || void 0,
            domain: t.domain || void 0,
            city: t.city || void 0,
            yearEstablished: t.yearEstablished || void 0,
            positioning: t.positioning || void 0,
            productType: t.productType || void 0,
            microMarkets: t.microMarkets ?? [],
            targetSegments: t.targetSegments ?? [],
            promoterName: t.promoterName || void 0,
            promoterLinkedIn: t.promoterLinkedIn || void 0,
            websiteUrl: t.websiteUrl || void 0,
            instagramHandle: t.instagramHandle || void 0,
            facebookUrl: t.facebookUrl || void 0,
            linkedinUrl: t.linkedinUrl || void 0,
            gmbPlaceId: t.gmbPlaceId || void 0,
            competitors: t.competitors ?? [],
            metaAdLibraryName: t.metaAdLibraryName || void 0,
            adSpendRange: t.adSpendRange || void 0,
            adPlatforms: t.adPlatforms ?? [],
            reraNumbers: t.reraNumbers ?? [],
          },
          auditorName: u || void 0,
          objective: m || void 0,
          prospectId: c || void 0,
        }));
  }
  return e.jsxs("form", {
    onSubmit: p,
    className: "space-y-8",
    children: [
      e.jsxs("section", {
        className: "space-y-4",
        children: [
          e.jsx("h3", {
            className:
              "text-xs font-bold text-slate-500 uppercase tracking-wider",
            children: "Brand Info",
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
              e.jsx(l, {
                label: "Brand Name",
                required: !0,
                children: e.jsx("input", {
                  className: "input",
                  required: !0,
                  value: t.brandName ?? "",
                  onChange: (a) => s("brandName", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Legal Name",
                children: e.jsx("input", {
                  className: "input",
                  value: t.legalName ?? "",
                  onChange: (a) => s("legalName", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Domain",
                children: e.jsx("input", {
                  className: "input",
                  placeholder: "example.com",
                  value: t.domain ?? "",
                  onChange: (a) => s("domain", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "City",
                children: e.jsx("input", {
                  className: "input",
                  value: t.city ?? "",
                  onChange: (a) => s("city", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Product Type",
                children: e.jsx("input", {
                  className: "input",
                  placeholder: "Residential, Commercial…",
                  value: t.productType ?? "",
                  onChange: (a) => s("productType", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Year Established",
                children: e.jsx("input", {
                  className: "input",
                  type: "number",
                  min: 1900,
                  max: 2030,
                  value: t.yearEstablished ?? "",
                  onChange: (a) =>
                    s(
                      "yearEstablished",
                      a.target.value ? Number(a.target.value) : void 0,
                    ),
                }),
              }),
            ],
          }),
          e.jsx(l, {
            label: "Positioning",
            children: e.jsx("textarea", {
              className: "input resize-none",
              rows: 2,
              value: t.positioning ?? "",
              onChange: (a) => s("positioning", a.target.value),
            }),
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
              e.jsx(l, {
                label: "Micro Markets (comma-separated)",
                children: e.jsx("input", {
                  className: "input",
                  placeholder: "Baner, Wakad, Kharadi",
                  value: (t.microMarkets ?? []).join(", "),
                  onChange: (a) => i("microMarkets", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Target Segments (comma-separated)",
                children: e.jsx("input", {
                  className: "input",
                  placeholder: "First-home buyers, Investors",
                  value: (t.targetSegments ?? []).join(", "),
                  onChange: (a) => i("targetSegments", a.target.value),
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "space-y-4",
        children: [
          e.jsx("h3", {
            className:
              "text-xs font-bold text-slate-500 uppercase tracking-wider",
            children: "Online Presence",
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
              e.jsx(l, {
                label: "Website URL",
                children: e.jsx("input", {
                  className: "input",
                  type: "url",
                  placeholder: "https://",
                  value: t.websiteUrl ?? "",
                  onChange: (a) => s("websiteUrl", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Instagram Handle",
                children: e.jsx("input", {
                  className: "input",
                  placeholder: "@handle",
                  value: t.instagramHandle ?? "",
                  onChange: (a) => s("instagramHandle", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Facebook URL",
                children: e.jsx("input", {
                  className: "input",
                  type: "url",
                  placeholder: "https://",
                  value: t.facebookUrl ?? "",
                  onChange: (a) => s("facebookUrl", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "LinkedIn URL",
                children: e.jsx("input", {
                  className: "input",
                  type: "url",
                  placeholder: "https://",
                  value: t.linkedinUrl ?? "",
                  onChange: (a) => s("linkedinUrl", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "GMB Place ID",
                children: e.jsx("input", {
                  className: "input",
                  value: t.gmbPlaceId ?? "",
                  onChange: (a) => s("gmbPlaceId", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Meta Ad Library Name",
                children: e.jsx("input", {
                  className: "input",
                  value: t.metaAdLibraryName ?? "",
                  onChange: (a) => s("metaAdLibraryName", a.target.value),
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "space-y-4",
        children: [
          e.jsx("h3", {
            className:
              "text-xs font-bold text-slate-500 uppercase tracking-wider",
            children: "Promoter",
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
              e.jsx(l, {
                label: "Promoter Name",
                children: e.jsx("input", {
                  className: "input",
                  value: t.promoterName ?? "",
                  onChange: (a) => s("promoterName", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Promoter LinkedIn",
                children: e.jsx("input", {
                  className: "input",
                  type: "url",
                  placeholder: "https://linkedin.com/in/…",
                  value: t.promoterLinkedIn ?? "",
                  onChange: (a) => s("promoterLinkedIn", a.target.value),
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "space-y-4",
        children: [
          e.jsx("h3", {
            className:
              "text-xs font-bold text-slate-500 uppercase tracking-wider",
            children: "Competition & Audit",
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
              e.jsx(l, {
                label: "Competitors (comma-separated)",
                children: e.jsx("input", {
                  className: "input",
                  value: (t.competitors ?? []).join(", "),
                  onChange: (a) => i("competitors", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Ad Spend Range",
                children: e.jsx("input", {
                  className: "input",
                  placeholder: "e.g. ₹1L–5L/month",
                  value: t.adSpendRange ?? "",
                  onChange: (a) => s("adSpendRange", a.target.value),
                }),
              }),
              e.jsx(l, {
                label: "Auditor Name",
                children: e.jsx("input", {
                  className: "input",
                  value: u,
                  onChange: (a) => g(a.target.value),
                }),
              }),
            ],
          }),
          e.jsx(l, {
            label: "Audit Objective",
            children: e.jsx("textarea", {
              className: "input resize-none",
              rows: 2,
              value: m,
              onChange: (a) => b(a.target.value),
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex justify-end gap-3 pt-2 border-t border-slate-100",
        children: [
          e.jsx("button", {
            type: "button",
            onClick: n,
            className: "btn",
            children: "Cancel",
          }),
          e.jsx("button", {
            type: "submit",
            disabled: d,
            className: "btn-primary",
            children: d ? "Creating…" : "Create Audit",
          }),
        ],
      }),
    ],
  });
}
function O() {
  const r = S(),
    [n, d] = h.useState(!1),
    { data: c, isLoading: t, isError: x, error: u, refetch: g } = R(),
    m = F();
  async function b(s) {
    const i = await m.mutateAsync(s);
    r(`/growth/brand-audits/${i.id}`);
  }
  return e.jsxs("div", {
    className: "flex flex-col flex-1 overflow-auto",
    children: [
      e.jsx(P, {
        title: "Brand Audits",
        actions: n
          ? void 0
          : e.jsxs("button", {
              onClick: () => d(!0),
              className: "btn-primary flex items-center gap-1.5",
              children: [e.jsx(M, { className: "w-4 h-4" }), "New Audit"],
            }),
      }),
      e.jsx("div", {
        className: "p-6 flex-1",
        children: n
          ? e.jsxs("div", {
              className: "max-w-3xl",
              children: [
                e.jsx("p", {
                  className: "text-sm font-semibold text-slate-800 mb-6",
                  children: "New Brand Audit",
                }),
                e.jsx(D, {
                  onSubmit: b,
                  onCancel: () => d(!1),
                  submitting: m.isPending,
                }),
              ],
            })
          : t
            ? e.jsx(w, {})
            : x
              ? e.jsx(I, { error: u, onRetry: g })
              : !c || c.length === 0
                ? e.jsx(U, {
                    title: "No brand audits yet",
                    description:
                      "Run a full AI-powered audit of a developer's digital presence.",
                  })
                : e.jsx("div", {
                    className: "card overflow-hidden",
                    children: e.jsxs("table", {
                      className: "w-full text-sm",
                      children: [
                        e.jsx("thead", {
                          className: "border-b border-slate-200 bg-slate-50/60",
                          children: e.jsxs("tr", {
                            children: [
                              e.jsx("th", {
                                className: "th",
                                children: "Brand",
                              }),
                              e.jsx("th", {
                                className: "th",
                                children: "City",
                              }),
                              e.jsx("th", {
                                className: "th",
                                children: "Status",
                              }),
                              e.jsx("th", {
                                className: "th text-right",
                                children: "Score",
                              }),
                              e.jsx("th", {
                                className: "th",
                                children: "Date",
                              }),
                              e.jsx("th", { className: "th" }),
                            ],
                          }),
                        }),
                        e.jsx("tbody", {
                          children: c.map((s) => {
                            var i, p;
                            return e.jsxs(
                              "tr",
                              {
                                className:
                                  "hover:bg-slate-50/60 transition-colors",
                                children: [
                                  e.jsx("td", {
                                    className: "td font-medium text-slate-900",
                                    children:
                                      ((i = s.developer) == null
                                        ? void 0
                                        : i.brandName) ?? "—",
                                  }),
                                  e.jsx("td", {
                                    className: "td text-slate-500",
                                    children:
                                      ((p = s.developer) == null
                                        ? void 0
                                        : p.city) ?? "—",
                                  }),
                                  e.jsx("td", {
                                    className: "td",
                                    children: e.jsx(E, { status: s.status }),
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "td text-right font-semibold tabular-nums",
                                    children:
                                      s.overallScore !== null
                                        ? s.overallScore
                                        : "—",
                                  }),
                                  e.jsx("td", {
                                    className: "td text-slate-500 text-xs",
                                    children: new Date(
                                      s.auditDate,
                                    ).toLocaleDateString("en-IN"),
                                  }),
                                  e.jsx("td", {
                                    className: "td text-right",
                                    children: e.jsx(A, {
                                      to: `/growth/brand-audits/${s.id}`,
                                      className:
                                        "text-xs font-semibold text-brand-600 hover:text-brand-800",
                                      children: "View →",
                                    }),
                                  }),
                                ],
                              },
                              s.id,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
      }),
    ],
  });
}
export { O as default };
