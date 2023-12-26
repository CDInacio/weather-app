import { createBrowserRouter } from "react-router-dom";

import Error from "../components/Error";
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
    errorElement: <Error />,
  },
]);

export default router;
