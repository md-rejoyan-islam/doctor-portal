import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = (e) => {
    e.preventDefault()
    userSignOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/appointment"}>Appointment</Link>
      </li>

      <li>
        <Link to={"/contact"}>Contact Us</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link to={"/dashboard"}>dashboard</Link>
          </li>
          <li>
            <Link onClick={handleSignOut}>Sign Out</Link>{" "}
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </React.Fragment>
  );
    return (
      <div className="navbar bg-base-100 lg:flex lg:justify-around h-[64px]">
        <div className="navbar-start w-screen ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Doctors portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <label
          htmlFor="my-drawer-2"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
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
      </div>
    );
};

export default Navbar;