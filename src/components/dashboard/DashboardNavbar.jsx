import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    e.preventDefault();
    // dispatch(logout());
  };
  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <Link onClick={handleSignOut}>Sign Out</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  lg:flex lg:justify-around h-[64px]  max-w-[1440px] mx-auto border-b">
      <div className="navbar-start  w-screen ">
        <div className="dropdown ">
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content space-y-[2px]  mt-3 p-2 shadow-md border border-zinc-100 bg-base-100 rounded-box w-52 "
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className=" px-4 font-bold lg:hidden   normal-case text-xl text-[#0fceec]"
        >
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex pr-2">
        <ul className="menu menu-horizontal p-0 space-x-2">{menuItems}</ul>
      </div>
      <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
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
    </div>
  );
};

export default DashboardNavbar;
