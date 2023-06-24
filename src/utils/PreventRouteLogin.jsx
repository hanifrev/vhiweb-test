import React from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PreventRouteLogin = ({ children }) => {
  const authenticated = Cookies.get("access_token");

  const location = useLocation();
  const pathname = location.pathname;

  if (authenticated && pathname == "/") {
    return <Navigate to="/users" replace />;
  }

  return children;
};

export default PreventRouteLogin;
