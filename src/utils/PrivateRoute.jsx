import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authenticated = Cookies.get("access_token");

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
