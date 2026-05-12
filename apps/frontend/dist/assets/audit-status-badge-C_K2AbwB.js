import { j as r } from "./index-DFd5EwAv.js";
import { C as t } from "./chip-DZUyQQjk.js";
function n(e) {
  switch (e) {
    case "DRAFT":
      return "slate";
    case "COLLECTING":
      return "blue";
    case "ANALYZING":
      return "amber";
    case "COMPLETE":
      return "emerald";
    case "FAILED":
      return "red";
  }
}
const a = {
  DRAFT: "Draft",
  COLLECTING: "Collecting",
  ANALYZING: "Analysing",
  COMPLETE: "Complete",
  FAILED: "Failed",
};
function i({ status: e }) {
  return r.jsx(t, { tone: n(e), dot: !0, children: a[e] });
}
export { i as A };
