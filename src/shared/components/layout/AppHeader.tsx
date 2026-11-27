import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { APP_DESCRIPTION } from "@/shared/constants/app.constant";
import { UserMenu } from "@/shared/components/layout/UserMenu";
import type { SidebarState } from "@/shared/types/layout.type";

const { Header } = Layout;
const { Text } = Typography;

export function AppHeader({ collapsed, toggleCollapsed }: SidebarState) {
  return (
    <Header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4">
      <div className="flex items-center gap-3">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          aria-label="Thu gọn menu"
        />
        <Text strong className="text-slate-700">{APP_DESCRIPTION}</Text>
      </div>
      <UserMenu />
    </Header>
  );
}
