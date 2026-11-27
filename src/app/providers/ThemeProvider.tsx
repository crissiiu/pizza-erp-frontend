import { App as AntdApp, ConfigProvider } from "antd";
import type { ReactNode } from "react";
import { antdLocale, antdTheme } from "@/shared/constants/theme.constant";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider locale={antdLocale} theme={antdTheme}>
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}
