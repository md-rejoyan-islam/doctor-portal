import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthData } from "../feature/auth/authSlice";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import { RiReservedLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { RiMenuFold3Fill } from "react-icons/ri";

const DashboardLayout = () => {
  const { user } = useSelector(getAuthData);
  const { pathname } = useLocation();

  return (
    <div className="drawer drawer-mobile lg:drawer-open   h-[calc(100vh-3px)]">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content h-full lg:h-fit w-full ">
        <DashboardNavbar />
        <div className="bg-[#f4f7fc] h-[calc(100vh-64px)] overflow-auto p-4 sm:p-6">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay" />

        <ul className="menu p-4 dashboard-menu border-r w-72 min-h-full flex flex-col space-y-1 z-[100]  text-base-content  bg-white ">
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

          {user.role === "user" && (
            <li>
              <NavLink to="/dashboard/mypayment">
                <RiReservedLine className="text-xl text-secondary" /> My
                Payments
              </NavLink>
            </li>
          )}

          {user.role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/allusers">
                  {" "}
                  <FaUsers className="text-xl text-secondary" />
                  All Users
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
            </>
          )}
          <li>
            <NavLink to="/dashboard/allfeedbacks">
              <VscFeedback className="text-xl text-secondary" />
              All Feedbacks
            </NavLink>
          </li>
          <li className="flex-1 flex justify-end ">
            <Link to={"/"} className="bg-slate-200">
              <RiMenuFold3Fill className="text-xl text-secondary" /> Main Menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
