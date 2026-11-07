import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import NetworkStatus from "../../components/NetworkStatus/NetworkStatus";
// import PromoBar from "../../components/Shared/PromoBar/PromoBar";

const MainLayout = () => {
  return (
    <div>
      {/* <PromoBar/> */}
      <NetworkStatus/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
