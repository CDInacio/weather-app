import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ForecastProvider } from "./context/forecastContext";
import "./index.css";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ForecastProvider>
      <RouterProvider router={router} />
    </ForecastProvider>
  </React.StrictMode>
);
