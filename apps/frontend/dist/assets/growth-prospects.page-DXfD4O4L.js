import { e as f, j as s, f as g } from "./index-DFd5EwAv.js";
import { T as j, E as S } from "./chip-DZUyQQjk.js";
import { E as v } from "./empty-state-D65d0flt.js";
import { u as P, P as A } from "./use-prospects-2wn24cWt.js";
import "./prospect-stage-badge-Ct33_wOa.js";
import "./en-US-D2VrG88w.js";
const w = [
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
  ],
  N = ["Agency", "Transaction", "Both", "Unclear"];
function R() {
  const [t, p] = f(),
    n = t.get("search") ?? void 0,
    i = t.get("stage") ?? void 0,
    c = t.get("classification") ?? void 0,
    {
      data: a,
      isLoading: d,
      isError: u,
      error: h,
      refetch: m,
    } = P({ search: n, stage: i, classification: c });
  function o(e, l) {
    p((x) => {
      const r = new URLSearchParams(x);
      return (l ? r.set(e, l) : r.delete(e), r);
    });
  }
  return s.jsxs("div", {
    className: "flex flex-col flex-1 overflow-auto",
    children: [
      s.jsx(j, { title: "Prospects" }),
      s.jsxs("div", {
        className: "p-6 space-y-4 flex-1",
        children: [
          s.jsxs("div", {
            className: "flex flex-wrap gap-3",
            children: [
              s.jsx("input", {
                type: "text",
                placeholder: "Search prospects...",
                value: n ?? "",
                onChange: (e) => o("search", e.target.value),
                className: "input w-56",
              }),
              s.jsxs("select", {
                value: i ?? "",
                onChange: (e) => o("stage", e.target.value),
                className: "input w-52",
                children: [
                  s.jsx("option", { value: "", children: "All stages" }),
                  w.map((e) => s.jsx("option", { value: e, children: e }, e)),
                ],
              }),
              s.jsxs("select", {
                value: c ?? "",
                onChange: (e) => o("classification", e.target.value),
                className: "input w-44",
                children: [
                  s.jsx("option", {
                    value: "",
                    children: "All classifications",
                  }),
                  N.map((e) => s.jsx("option", { value: e, children: e }, e)),
                ],
              }),
            ],
          }),
          d
            ? s.jsx(g, {})
            : u
              ? s.jsx(S, { error: h, onRetry: m })
              : !a || a.length === 0
                ? s.jsx(v, {
                    title: "No prospects found",
                    description:
                      "Try adjusting your filters or add prospects from a workshop.",
                  })
                : s.jsx(A, { prospects: a }),
        ],
      }),
    ],
  });
}
export { R as default };
