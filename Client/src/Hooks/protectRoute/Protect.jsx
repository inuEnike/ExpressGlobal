import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Signin from "../../Pages/Admin/Auth/Signin";

export const UseProtect = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const UseAdminProtect = () => {
  const token = localStorage.getItem("Atoken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const PrivateRoute = () => {
  const protect = UseProtect();

  return protect ? <Outlet /> : <Navigate to="/" />;
};

export const AdminPrivateRoute = () => {
  const protect = UseAdminProtect();

  return protect ? <Outlet /> : <Navigate to="/admin/signin" />;
};
