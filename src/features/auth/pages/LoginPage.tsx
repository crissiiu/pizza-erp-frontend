import { Button, Card, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_NAME } from "@/shared/constants/app.constant";
import { ROUTES } from "@/shared/constants/route.constant";
import { useAuthStore } from "@/shared/stores/auth.store";

export function LoginPage() {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const handleFinish = () => {
    setAccessToken("development-token");
    navigate(ROUTES.dashboard);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <Card className="w-full max-w-md">
        <Typography.Title level={3}>{APP_NAME}</Typography.Title>
        <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item name="username" label="Tài khoản" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>Đăng nhập</Button>
        </Form>
      </Card>
    </div>
  );
}
