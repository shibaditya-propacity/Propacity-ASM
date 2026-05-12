import { j as r } from "./index-DFd5EwAv.js";
const l = {
  brand: "bg-brand-600",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
};
function t({ value: e, max: a = 100, tone: s = "brand" }) {
  const d = Math.min(100, Math.round((e / a) * 100));
  return r.jsx("div", {
    className: "w-full h-1.5 bg-slate-100 rounded-full overflow-hidden",
    children: r.jsx("div", {
      className: `h-full rounded-full ${l[s]}`,
      style: { width: `${d}%` },
    }),
  });
}
export { t as P };
