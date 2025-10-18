import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { ToastProvider } from "./contexts/toast/toast";

// biome-ignore lint/style/noNonNullAssertion: mandatory for createRoot
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);
