import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
