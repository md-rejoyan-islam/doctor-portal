// create store

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import bookingReducer from "../feature/bookings/bookingSlice";
import usersReducer from "../feature/users/userSlice";
import appointmentReducer from "../feature/appointment/appointmentSlice";
import doctorsReducer from "../feature/doctor/doctorSlice";
import paymentReducer from "../feature/payment/paymentSlice";
import feedbackReducer from "../feature/feedback/feedbackSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    users: usersReducer,
    appointments: appointmentReducer,
    doctors: doctorsReducer,
    payment: paymentReducer,
    feedback: feedbackReducer,
    // product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

// export
export default store;
