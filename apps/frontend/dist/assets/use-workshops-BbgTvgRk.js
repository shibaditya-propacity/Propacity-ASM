import {
  c as l,
  j as s,
  U as d,
  L as i,
  h as n,
  i as h,
} from "./index-DFd5EwAv.js";
import { W as o } from "./workshop-status-badge-liLd4QTz.js";
import { P as x } from "./progress-bar-BRrdAyBl.js";
import { f as r } from "./format-C87nH917.js";
import { A as m } from "./en-US-D2VrG88w.js";
import { u as p } from "./chip-DZUyQQjk.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k = l("CalendarX", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m14 14-4 4", key: "rymu2i" }],
  ["path", { d: "m10 14 4 4", key: "3sz06r" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j = l("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
function v({ workshops: t }) {
  return s.jsx("div", {
    className: "card overflow-hidden",
    children: s.jsxs("table", {
      className: "w-full text-sm",
      children: [
        s.jsx("thead", {
          children: s.jsxs("tr", {
            className: "bg-slate-50 border-b border-slate-200",
            children: [
              s.jsx("th", { className: "th w-[30%]", children: "Workshop" }),
              s.jsx("th", { className: "th", children: "Date" }),
              s.jsx("th", { className: "th", children: "Capacity" }),
              s.jsx("th", { className: "th", children: "Status" }),
              s.jsx("th", {
                className: "th hidden sm:table-cell",
                children: "Created by",
              }),
              s.jsx("th", { className: "th w-10" }),
            ],
          }),
        }),
        s.jsx("tbody", {
          children: t.map((e) => {
            const a =
                e.capacity > 0
                  ? Math.round((e.registered / e.capacity) * 100)
                  : 0,
              c = a >= 90 ? "emerald" : a >= 60 ? "brand" : "amber";
            return s.jsxs(
              "tr",
              {
                className:
                  "border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition-colors duration-100 group",
                children: [
                  s.jsxs("td", {
                    className: "td font-medium text-slate-900 max-w-0",
                    children: [
                      s.jsx("div", {
                        className: "truncate",
                        children: e.title,
                      }),
                      s.jsxs("div", {
                        className: "flex items-center gap-1 mt-0.5",
                        children: [
                          s.jsx("span", {
                            className: "text-[11px] text-slate-400 font-medium",
                            children: e.format,
                          }),
                          e.city &&
                            s.jsxs(s.Fragment, {
                              children: [
                                s.jsx("span", {
                                  className: "text-slate-200",
                                  children: "·",
                                }),
                                s.jsx(j, {
                                  className: "w-2.5 h-2.5 text-slate-300",
                                }),
                                s.jsx("span", {
                                  className: "text-[11px] text-slate-400",
                                  children: e.city,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("td", {
                    className: "td text-slate-600 whitespace-nowrap",
                    children: [
                      s.jsx("div", {
                        className: "text-[13px] font-medium",
                        children: r(new Date(e.date), "dd MMM"),
                      }),
                      s.jsx("div", {
                        className: "text-[11px] text-slate-400",
                        children: r(new Date(e.date), "yyyy"),
                      }),
                    ],
                  }),
                  s.jsxs("td", {
                    className: "td",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-1.5 mb-1.5",
                        children: [
                          s.jsx(d, {
                            className: "w-3 h-3 text-slate-400 shrink-0",
                          }),
                          s.jsxs("span", {
                            className: "text-[13px] text-slate-700",
                            children: [
                              s.jsx("span", {
                                className: "font-semibold text-slate-900",
                                children: e.registered,
                              }),
                              s.jsxs("span", {
                                className: "text-slate-400",
                                children: [" / ", e.capacity],
                              }),
                            ],
                          }),
                          s.jsxs("span", {
                            className: "text-[11px] text-slate-400 ml-auto",
                            children: [a, "%"],
                          }),
                        ],
                      }),
                      s.jsx(x, {
                        value: e.registered,
                        max: e.capacity,
                        tone: c,
                      }),
                    ],
                  }),
                  s.jsx("td", {
                    className: "td",
                    children: s.jsx(o, { status: e.status }),
                  }),
                  s.jsx("td", {
                    className:
                      "td hidden sm:table-cell text-[12px] text-slate-500",
                    children:
                      e.createdByName ??
                      s.jsx("span", {
                        className: "text-slate-300",
                        children: "—",
                      }),
                  }),
                  s.jsx("td", {
                    className: "td pr-4",
                    children: s.jsx(i, {
                      to: `/growth/workshops/${e.id}`,
                      className:
                        "flex items-center justify-end text-slate-300 group-hover:text-brand-500 transition-colors",
                      "aria-label": `View workshop ${e.title}`,
                      children: s.jsx(m, {
                        className:
                          "w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150",
                      }),
                    }),
                  }),
                ],
              },
              e.id,
            );
          }),
        }),
      ],
    }),
  });
}
function M(t = {}) {
  return p({
    queryKey: h.workshops(t),
    queryFn: () =>
      n.get("/growth/workshops", {
        ...(t.status !== void 0 && { status: t.status }),
        ...(t.search !== void 0 && { search: t.search }),
        limit: t.limit ?? 50,
        offset: t.offset ?? 0,
      }),
  });
}
export { k as C, v as W, M as u };
