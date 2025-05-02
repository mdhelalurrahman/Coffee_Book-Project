import Navber from "../Navber";
import Footer from "../Footer";
import {Outlet} from "react-router";
import {Toaster} from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster></Toaster>
      {/* Navber */}
      <div className="h-16">
        <Navber></Navber>
      </div>

      <div className="min-h-[calc(100vh-232px)] p-10 container mx-auto px-12">
        <Outlet />
      </div>
      {/* fototer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
