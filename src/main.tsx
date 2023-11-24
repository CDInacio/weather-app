import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
