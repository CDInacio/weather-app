import { createBrowserRouter } from "react-router-dom";

import DetailScreen from "../screens/DetailScreen";
import Home from "../screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:countryName",
    element: <DetailScreen />,
  },
]);

export default router;
