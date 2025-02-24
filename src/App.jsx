import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import HomeAnimation from "./components/animation/HomeAnimation.jsx";
import { getAllAppointments } from "./feature/appointment/appointmentApiSlice.js";
import {
  loggedInUser,
  onAuthStateChange,
} from "./feature/auth/authApiSlice.js";
import { getAuthData, setAuthMessageEmpty } from "./feature/auth/authSlice.js";
import { allBookings } from "./feature/bookings/bookingApiSlice.js";
import {
  getBookingData,
  setBookingMessageEmpty,
} from "./feature/bookings/bookingSlice.js";
import { getAllDoctors } from "./feature/doctor/doctorApiSlice.js";
import {
  getAllDoctorsData,
  setDoctorMessageEmpty,
} from "./feature/doctor/doctorSlice.js";
import {
  getAllFeedbackData,
  setFeedbackMessageEmpty,
} from "./feature/feedback/feedbackSlice.js";
import {
  getAllUsersData,
  setUsersMessageEmpty,
} from "./feature/users/userSlice.js";
import router from "./routes/router.jsx";

function App() {
  const dispatch = useDispatch();

  const {
    loading,
    message: authMessage,
    error: authError,
  } = useSelector(getAuthData);
  const { message: bookingMessage, error: bookingError } =
    useSelector(getBookingData);

  const { message: doctorsMessage, error: doctorsError } =
    useSelector(getAllDoctorsData);

  const { message: usersMessage, error: usersError } =
    useSelector(getAllUsersData);

  const { message: feedbackMessage, error: feedbackError } =
    useSelector(getAllFeedbackData);

  const message =
    bookingMessage ??
    authMessage ??
    usersMessage ??
    doctorsMessage ??
    feedbackMessage;
  const error =
    bookingError ?? authError ?? usersError ?? doctorsError ?? feedbackError;

  useEffect(() => {
    (async () => {
      const response = await dispatch(onAuthStateChange());

      const user = await dispatch(loggedInUser(response?.payload));

      if (user?.payload?.data?.email) {
        dispatch(allBookings({ email: user?.payload?.data?.email }));
      }
    })();

    dispatch(getAllAppointments());
    dispatch(getAllDoctors());
  }, [dispatch]);

  // show toast message
  useEffect(() => {
    message && toast.success(message);

    error && toast.error(error);
    dispatch(setBookingMessageEmpty());
    dispatch(setAuthMessageEmpty());
    dispatch(setUsersMessageEmpty());
    dispatch(setDoctorMessageEmpty());
    dispatch(setFeedbackMessageEmpty());
  }, [dispatch, message, error]);

  if (loading) return <HomeAnimation />;

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
