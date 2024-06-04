import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/main/shared/Navbar";
import { useSelector } from "react-redux";
import { getAuthData } from "../feature/auth/authSlice";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import { RiReservedLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

const DashboardLayout = () => {
  const { user } = useSelector(getAuthData);

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="drawer drawer-mobile lg:drawer-open   h-[calc(100vh-3px)]">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content h-full lg:h-fit w-full ">
        <DashboardNavbar />
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay" />

        <ul className="menu p-4 dashboard-menu border-r w-72 min-h-full flex flex-col space-y-1 z-[100]  text-base-content  bg-slate-50 ">
          <Link
            to={"/"}
            className=" px-4 font-bold  h-[64px]   normal-case text-xl text-[#0fceec] hidden lg:block"
          >
            Doctors Portal
          </Link>
          <li>
            <Link
              to="/dashboard"
              className={pathname === "/dashboard" ? "active" : ""}
            >
              <RiReservedLine className="text-xl text-secondary" /> My
              Appointments
            </Link>
          </li>
          {user.role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/allusers">
                  {" "}
                  <FaUsers className="text-xl text-secondary" />
                  All users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adddoctor">
                  {" "}
                  <FaUserDoctor className="text-xl text-secondary" />
                  Add A Doctor
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managedoctors">
                  {" "}
                  <GiPlagueDoctorProfile className="text-xl text-secondary" />
                  Manage Doctors
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allfeedbacks">
                  <VscFeedback className="text-xl text-secondary" />
                  All Feedbacks
                </NavLink>
              </li>
            </>
          )}
          <li className="flex-1 flex justify-end ">
            <Link to={"/"} className="bg-[#19d3ae73]">
              Main Menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
