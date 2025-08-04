import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthData } from "../feature/auth/authSlice";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const { user, loading } = useSelector(getAuthData);
  const isAdmin = user.role === "admin";
  const id = user._id;

  const location = useLocation();

  if (loading) {
    return;
  }

  if (isAdmin) {
    return children;
  } else if (id) {
    return (
      <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
    );
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
