import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import OurWork from "../pages/OurWork/OurWork";
import ContactUs from "../pages/ContactUs/ContactUs";
import ComingSoon from "../components/Homepage/ComingSoon/ComingSoon";


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
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
