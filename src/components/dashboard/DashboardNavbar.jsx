import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { logout } from "../../feature/auth/authApiSlice";
import { getAuthData } from "../../feature/auth/authSlice";
import { ImPower } from "react-icons/im";

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getAuthData);
  const handleSignOut = () => {
    dispatch(logout());
  };
  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {/* <li>
        <Link onClick={handleSignOut}>Sign Out</Link>{" "}
      </li> */}
      <li className="border-none">
        <div className="dropdown dropdown-end hover:bg-transparent p-0 border-none rounded-full">
          <div
            tabIndex={0}
            role="button"
            className="btn  rounded-full focus:scale-[1] bg-transparen min-h-fit h-fit w-fit p-0 focus:bg-none"
          >
            <div className="avatar">
              <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user.photo ? (
                  <img src={user?.photo} />
                ) : (
                  <span className="flex justify-center items-center h-full">
                    <FaUser className=" text-secondary  text-lg mx-auto" />
                  </span>
                )}
              </div>
            </div>

            {/* {user.photo ? (
              <img
                src={user?.photo}
                alt="User photo"
                className="h-[30px] w-[30px] rounded-full border ring-offset-1 ring-2"
              />
            ) : (
              <button className="h-[30px] bg-white w-[30px]  justify-center  flex items-center rounded-full border ring-offset-1 ring-2">
                <FaUser className=" text-secondary  text-lg" />
              </button>
            )} */}
          </div>
          <div
            tabIndex={0}
            className="dropdown-content cursor-text z-[1] top-12 menu p-2 shadow bg-base-100 rounded-lg w-52"
          >
            <div className="p-2">
              <h2
                className=" pb-2 flex items-center gap-2 capitalize"
                title="Role"
              >
                <ImPower className="text-lg text-secondary " /> {user?.role}
              </h2>
              <hr />
              <h2 className="flex items-center gap-2 pt-2" title="Name">
                <FaUser className="text-lg text-secondary " />
                {user?.name}
              </h2>
              <p className="flex items-center gap-2 py-2" title="Email">
                <MdEmail className="text-lg text-secondary " />
                {user?.email}
              </p>
            </div>
            <ul className="w-full ml-0 pl-0">
              <li>
                <hr className="py-0 w-full" />
              </li>
              <li>
                <button className="w-full px-2" onClick={handleSignOut}>
                  <BiLogOut className="text-lg text-secondary " /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white  lg:flex lg:justify-around h-[64px]  max-w-[1440px] mx-auto border-b">
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
        <ul className="menu menu-horizontal p-0 space-x-2 items-center">
          {menuItems}
        </ul>
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
