import { useNavigate, useRouteError } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../feature/auth/authApiSlice";

function Error() {
  const dispatch = useDispatch();
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());

    navigate("/login");
  };

  return (
    <div>
      <p className="text-red-500">Something went wrong!!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        {" "}
        Please <button onClick={handleLogOut}>Sign out</button> and log back in
      </h4>
    </div>
  );
}

export default Error;
