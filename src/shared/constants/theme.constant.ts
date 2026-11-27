import { theme } from "antd";
import viVN from "antd/locale/vi_VN";

export const antdLocale = viVN;

export const antdTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 6,
    fontSize: 14,
    colorBgLayout: "#f5f7fa",
  },
  components: {
    Layout: { siderBg: "#0f172a", headerBg: "#ffffff" },
    Menu: {
      darkItemBg: "#0f172a",
      darkSubMenuItemBg: "#020617",
      darkItemSelectedBg: "#1677ff",
    },
    Table: {
      headerBg: "#f8fafc",
      headerColor: "#334155",
      cellPaddingBlock: 10,
      cellPaddingInline: 12,
    },
  },
};
