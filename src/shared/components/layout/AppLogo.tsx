import { APP_NAME, APP_SHORT_NAME } from "@/shared/constants/app.constant";

interface AppLogoProps {
  collapsed: boolean;
}

export function AppLogo({ collapsed }: AppLogoProps) {
  return (
    <div className="flex h-14 items-center justify-center border-b border-white/10 px-3">
      <span className="truncate text-base font-semibold tracking-wide text-white">
        {collapsed ? APP_SHORT_NAME : APP_NAME}
      </span>
    </div>
  );
}
