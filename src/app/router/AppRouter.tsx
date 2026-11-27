import { RouterProvider } from "react-router-dom";
import { appRouter } from "@/app/router/router.config";

export function AppRouter() {
  return <RouterProvider router={appRouter} />;
}
