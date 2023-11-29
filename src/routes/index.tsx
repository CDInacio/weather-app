import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/HomePage";
import WeatherDetails from "../pages/WeatherDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:city",
    element: <WeatherDetails />,
  },
]);

export default router;
