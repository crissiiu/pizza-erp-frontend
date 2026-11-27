import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/constants/route.constant";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Trang bạn yêu cầu không tồn tại."
      extra={<Button onClick={() => navigate(ROUTES.dashboard)}>Về tổng quan</Button>}
    />
  );
}
