import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    {/* <SmoothScroll> */}
    {/* <SocketProvider /> */}
    <RouterProvider router={router} />
    {/* </SmoothScroll> */}
    {/* <Toaster /> */}
  </HelmetProvider>,
);
