import { DashboardOutlined, DatabaseOutlined, FileTextOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ROUTES } from "@/shared/constants/route.constant";

export const MAIN_MENU_ITEMS: MenuProps["items"] = [
  { key: ROUTES.dashboard, icon: <DashboardOutlined />, label: "Tổng quan" },
  {
    key: "master-data",
    icon: <DatabaseOutlined />,
    label: "Danh mục & Kho",
    children: [{ key: ROUTES.products, label: "Sản phẩm / Nguyên liệu" }],
  },
  { key: ROUTES.reports, icon: <FileTextOutlined />, label: "Báo cáo" },
];
