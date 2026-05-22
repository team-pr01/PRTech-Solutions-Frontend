import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import OurWork from "../pages/OurWork/OurWork";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-work",
        element: <OurWork />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
