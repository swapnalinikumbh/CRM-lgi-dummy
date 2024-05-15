import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import Login from "../Components/Pages/Login";
import Home from "../Components/Pages/Home";

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouteComponent;
