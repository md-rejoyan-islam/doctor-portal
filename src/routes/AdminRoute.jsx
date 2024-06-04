import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthData } from "../feature/auth/authSlice";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const { user, loading } = useSelector(getAuthData);
  const isAdmin = user.role === "admin";

  // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading) {
    return "loading...";
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
