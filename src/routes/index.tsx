import { createBrowserRouter } from "react-router-dom";

import CityPage from "../pages/CityPage";
import Home from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:cityId",
    element: <CityPage />,
  },
]);

export default router;
