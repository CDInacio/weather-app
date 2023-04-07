import { createBrowserRouter } from "react-router-dom";

import Home from "../screens/Home";
import DetailScreen from "../screens/DetailScreen";

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
