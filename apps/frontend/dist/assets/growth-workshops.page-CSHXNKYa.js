import { e as g, j as e, A as f, m as o, f as v } from "./index-lPmb1MQk.js";
import { T as w, S as y, E as j } from "./chip-TP8sKoPN.js";
import { u as N, C, W as _ } from "./use-workshops-B9FOnRlE.js";
import "./workshop-status-badge-D6bULriC.js";
import "./progress-bar-aDGUIu-U.js";
import "./format-BYjKddXJ.js";
import "./en-US-Dc-C28vX.js";
const k = [
    { label: "All", value: "" },
    { label: "Upcoming", value: "Upcoming" },
    { label: "Live", value: "Live" },
    { label: "Completed", value: "Completed" },
    { label: "Cancelled", value: "Cancelled" },
  ],
  S = {
    "": "bg-brand-500 text-white shadow-[0_0_14px_rgba(45,63,231,0.3)]",
    Upcoming: "bg-brand-500 text-white shadow-[0_0_14px_rgba(45,63,231,0.3)]",
    Live: "bg-emerald-500 text-white shadow-[0_0_14px_rgba(16,185,129,0.3)]",
    Completed: "bg-slate-600  text-white",
    Cancelled:
      "bg-red-500    text-white shadow-[0_0_14px_rgba(239,68,68,0.25)]",
  },
  T =
    "bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700";
function U() {
  const [n, x] = g(),
    l = n.get("search") ?? "",
    a = n.get("status") ?? "",
    {
      data: p,
      isLoading: c,
      isError: h,
      error: m,
      refetch: u,
    } = N({ search: l || void 0, status: a || void 0 });
  function d(t, r) {
    x((b) => {
      const i = new URLSearchParams(b);
      return (r ? i.set(t, r) : i.delete(t), i);
    });
  }
  const s = p ?? [];
  return e.jsxs("div", {
    className: "flex flex-col flex-1 overflow-auto bg-[#F4F6FB]",
    children: [
      e.jsx(w, { title: "Workshops" }),
      e.jsxs("div", {
        className: "p-6 space-y-5 flex-1",
        children: [
          e.jsxs("div", {
            className: "flex flex-wrap items-center gap-3",
            children: [
              e.jsx("div", {
                className: "flex items-center gap-1.5 flex-wrap",
                children: k.map((t) => {
                  const r = a === t.value;
                  return e.jsxs(
                    "button",
                    {
                      onClick: () => d("status", t.value),
                      className: `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${r ? S[t.value] : T}`,
                      children: [
                        t.label,
                        !c &&
                          t.value === a &&
                          s.length > 0 &&
                          e.jsxs("span", {
                            className: "ml-1.5 opacity-75",
                            children: ["(", s.length, ")"],
                          }),
                      ],
                    },
                    t.value,
                  );
                }),
              }),
              e.jsxs("div", {
                className: "relative ml-auto",
                children: [
                  e.jsx(y, {
                    className:
                      "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none",
                  }),
                  e.jsx("input", {
                    type: "text",
                    placeholder: "Search workshops…",
                    value: l,
                    onChange: (t) => d("search", t.target.value),
                    className:
                      "pl-8 pr-3 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 w-52 transition-all",
                  }),
                ],
              }),
            ],
          }),
          e.jsx(f, {
            mode: "wait",
            children: c
              ? e.jsx(
                  o.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    children: e.jsx(v, {}),
                  },
                  "loading",
                )
              : h
                ? e.jsx(
                    o.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      children: e.jsx(j, { error: m, onRetry: u }),
                    },
                    "error",
                  )
                : s.length === 0
                  ? e.jsxs(
                      o.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.3 },
                        className:
                          "border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center text-center gap-3 bg-white/60",
                        children: [
                          e.jsx(C, { className: "w-9 h-9 text-slate-300" }),
                          e.jsx("p", {
                            className: "text-sm font-semibold text-slate-600",
                            children: a
                              ? `No ${a.toLowerCase()} workshops`
                              : "No workshops yet",
                          }),
                          e.jsx("p", {
                            className:
                              "text-xs text-slate-400 max-w-xs leading-relaxed",
                            children: a
                              ? "Try a different filter or schedule a new workshop from the sidebar."
                              : "Schedule your first workshop using the button in the sidebar.",
                          }),
                        ],
                      },
                      "empty",
                    )
                  : e.jsx(
                      o.div,
                      {
                        initial: { opacity: 0, y: 8 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                        children: e.jsx(_, { workshops: s }),
                      },
                      a + l,
                    ),
          }),
        ],
      }),
    ],
  });
}
export { U as default };
