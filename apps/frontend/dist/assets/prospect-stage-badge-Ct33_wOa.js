import { j as r } from "./index-DFd5EwAv.js";
import { C as t } from "./chip-DZUyQQjk.js";
function n(e) {
  switch (e) {
    case "Registered":
      return "slate";
    case "Attended":
      return "blue";
    case "Segmented · Agency":
    case "Segmented · Transaction":
      return "violet";
    case "Session Scheduled":
      return "amber";
    case "Audited":
      return "emerald";
    case "Proposal Sent":
      return "blue";
    case "In Discussion":
      return "amber";
    case "Won":
      return "emerald";
    case "Lost":
      return "red";
    default:
      return "slate";
  }
}
function u({ stage: e }) {
  return r.jsx(t, { tone: n(e), children: e });
}
export { u as P };
