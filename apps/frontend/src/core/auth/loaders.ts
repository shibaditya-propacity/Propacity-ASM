import { redirect } from "react-router-dom";
import { getToken } from "./token";

export function authLoader(): Response | null {
  if (!getToken()) {
    throw redirect("/signin");
  }
  return null;
}
