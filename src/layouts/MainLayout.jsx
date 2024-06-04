import { Outlet } from "react-router-dom";
import Navbar from "../pages/main/shared/Navbar";
import Footer from "../pages/main/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
