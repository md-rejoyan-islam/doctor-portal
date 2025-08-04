import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getAuthData } from "../../../feature/auth/authSlice";
import { logout } from "../../../feature/auth/authApiSlice";

const Navbar = () => {
  const { user } = useSelector(getAuthData);

  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/appointment"}>Appointment</NavLink>
      </li>

      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>

      {user?.email ? (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <Link onClick={handleSignOut}>Sign Out</Link>{" "}
          </li>
        </>
      ) : (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:flex lg:justify-around h-[64px]  max-w-[1440px] mx-auto ">
      <div className="navbar-start  w-screen z-10 ">
        <div className="dropdown ">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden hover:bg-[#0fceec21]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content space-y-[2px]  mt-3 p-2 shadow-md border border-zinc-100 bg-base-100 rounded-box w-52 "
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className=" px-4 font-bold    normal-case text-xl text-[#0fceec]"
        >
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex pr-2">
        <ul className="menu menu-horizontal p-0 space-x-2">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
