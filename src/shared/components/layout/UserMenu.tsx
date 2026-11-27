import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/constants/route.constant";
import { useAuthStore } from "@/shared/stores/auth.store";

const items: MenuProps["items"] = [
  { key: "profile", icon: <UserOutlined />, label: "Thông tin tài khoản" },
  { type: "divider" },
  { key: "logout", icon: <LogoutOutlined />, label: "Đăng xuất", danger: true },
];

export function UserMenu() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "logout") {
      logout();
      navigate(ROUTES.login);
    }
  };

  return (
    <Dropdown menu={{ items, onClick: handleClick }} placement="bottomRight">
      <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100">
        <Avatar size="small" icon={<UserOutlined />} className="bg-blue-600" />
        <span className="hidden text-sm font-medium text-slate-700 sm:inline">
          Nhân viên ERP
        </span>
      </div>
    </Dropdown>
  );
}
