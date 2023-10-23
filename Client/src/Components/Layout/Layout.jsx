import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="pb-5 mb-4" >
        <div style={{ position: "fixed", width: "100%",zIndex:'100' }}>
          <Navbar />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
