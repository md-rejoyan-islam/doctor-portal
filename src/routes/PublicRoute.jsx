import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthData } from "../feature/auth/authSlice";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { user, loading } = useSelector(getAuthData);

  if (loading) {
    return;
  }
  if (!user) {
    return children;
  }
  return <Navigate to={from} state={{ from: location }} replace></Navigate>;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
