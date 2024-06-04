import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthData } from "../feature/auth/authSlice";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useSelector(getAuthData);
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
