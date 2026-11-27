import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { MAIN_MENU_ITEMS } from "@/shared/constants/menu.constant";
import { useActiveMenu } from "@/shared/hooks/useActiveMenu";
import type { SidebarState } from "@/shared/types/layout.type";
import { AppLogo } from "@/shared/components/layout/AppLogo";

const { Sider } = Layout;

export function AppSidebar({ collapsed, setCollapsed }: SidebarState) {
  const navigate = useNavigate();
  const selectedKeys = useActiveMenu();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={240}
      breakpoint="lg"
      onBreakpoint={setCollapsed}
      className="select-none"
    >
      <AppLogo collapsed={collapsed} />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        defaultOpenKeys={["master-data"]}
        items={MAIN_MENU_ITEMS}
        onClick={({ key }) => {
          if (key.startsWith("/")) navigate(key);
        }}
        className="border-r-0"
      />
    </Sider>
  );
}
