import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import { ScaleContextProvider } from "./context/scaleContext";
import { ThemeContextProvider } from "./context/themeContext";
import "./index.css";
import router from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScaleContextProvider>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeContextProvider>
    </ScaleContextProvider>
  </React.StrictMode>
);
