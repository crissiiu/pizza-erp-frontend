import { useLocation } from "react-router-dom";
import { ROUTES } from "@/shared/constants/route.constant";

export function useActiveMenu() {
  const { pathname } = useLocation();

  if (pathname.startsWith(ROUTES.products)) return [ROUTES.products];
  if (pathname.startsWith(ROUTES.reports)) return [ROUTES.reports];
  return [ROUTES.dashboard];
}
