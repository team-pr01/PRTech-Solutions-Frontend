import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import OurWork from "../pages/OurWork/OurWork";
import ContactUs from "../pages/ContactUs/ContactUs";
import ComingSoon from "../components/Homepage/ComingSoon/ComingSoon";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails/BlogDetails";

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
        path: "/about-us",
        element: <AboutUs />,
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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
