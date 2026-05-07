import { j as r } from "./index-DFd5EwAv.js";
import { C as t } from "./chip-DZUyQQjk.js";
function n(e) {
  switch (e) {
    case "Upcoming":
      return "blue";
    case "Live":
      return "emerald";
    case "Completed":
      return "slate";
    case "Cancelled":
      return "red";
    default:
      return "slate";
  }
}
function o({ status: e }) {
  return r.jsx(t, { tone: n(e), children: e });
}
export { o as W };
