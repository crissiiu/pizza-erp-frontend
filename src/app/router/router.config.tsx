import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { ProductsPage } from "@/features/inventory/pages/ProductsPage";
import { ReportsPage } from "@/features/reports/pages/ReportsPage";
import { NotFoundPage } from "@/shared/components/static-pages/NotFoundPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";

export const appRouter = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate replace to="/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "reports", element: <ReportsPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
