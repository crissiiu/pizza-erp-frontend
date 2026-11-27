import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ThemeProvider } from "./app/providers/ThemeProvider.tsx";
import "./index.css";
import dayjs from "dayjs";
import "dayjs/locale/vi";

dayjs.locale("vi");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
