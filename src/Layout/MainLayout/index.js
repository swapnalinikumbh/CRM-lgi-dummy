import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderPage from "../../Pages/Header";
import FooterPage from "../../Pages/Footer";
const MainLayout = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <HeaderPage />
          <Outlet />
          <FooterPage />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
