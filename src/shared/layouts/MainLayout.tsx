import { AppHeader } from "@/shared/components/layout/AppHeader";
import { AppSidebar } from "@/shared/components/layout/AppSidebar";
import { useSidebar } from "@/shared/hooks/useSidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export function MainLayout() {
  const sidebar = useSidebar();

  return (
    <Layout className="min-h-screen">
      <AppSidebar {...sidebar} />
      <Layout className="min-w-0 h-dvh overflow-hidden flex-1">
        <AppHeader {...sidebar} />
        <Content className="min-w-0 flex-1 p-4 md:p-5">
          <div className="mx-auto min-h-full max-w-[1600px]">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
