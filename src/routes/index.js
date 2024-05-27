import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import MainLayout from "../Layout/MainLayout";
import Login from "../Components/Pages/Login";
import Home from "../Components/Pages/Home";

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path={ROUTES.home} element={<Home />} />
          {/* <Route path={ROUTES.dashboard} element={<Dashboard />} /> */}
        </Route>
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouteComponent;
