import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/main/Error";
import Home from "../pages/main/Home";
import Login from "../pages/main/auth/Login";
import About from "../pages/main/About";
import SignUp from "../pages/main/auth/SignUp";
import Contact from "../pages/main/Contact";
import Appointment from "../pages/main/Appointment";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import MyAppointment from "../pages/dashboard/MyAppointment";
import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/dashboard/AllUsers";
import AddDoctor from "../pages/dashboard/AddDoctor";
import ManageDoctors from "../pages/dashboard/ManageDoctor";
import PublicRoute from "./PublicRoute";
import Payment from "../pages/dashboard/payment/Payment";
import ForgotPassword from "../pages/main/auth/ForgotPassword";
import AllFeedbacks from "../pages/dashboard/AllFeedbacks";
import MyPayment from "../pages/dashboard/MyPayment";
import Profile from "../pages/dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <MyAppointment />,
      },
      {
        path: "mypayment",
        element: <MyPayment />,
      },
      {
        path: "allfeedbacks",
        element: <AllFeedbacks />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
