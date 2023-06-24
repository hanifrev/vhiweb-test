import React from "react";
import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authenticated = Cookies.get("access_token");

  const location = useLocation();
  const pathname = location.pathname;

  if (!authenticated && pathname == "/users") {
    return <Navigate to="/" replace />;
  } else if (!authenticated && pathname.startsWith("/users/")) {
    return <Navigate to="/" replace />;
  } else if (!authenticated && pathname) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default PrivateRoute;
