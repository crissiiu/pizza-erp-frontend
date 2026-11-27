import { useState } from "react";
import type { SidebarState } from "@/shared/types/layout.type";

export function useSidebar(): SidebarState {
  const [collapsed, setCollapsed] = useState(false);

  return {
    collapsed,
    setCollapsed,
    toggleCollapsed: () => setCollapsed((value) => !value),
  };
}
