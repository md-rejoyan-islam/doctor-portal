import { createSlice } from "@reduxjs/toolkit";
import { getAllAppointments } from "./appointmentApiSlice";

// create auth slice
const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointments: [],
    error: null,
    message: null,
    loading: true,
  },
  reducers: {
    setAppointmentMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // all users
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getAllAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.appointments = action.payload.data;
      });
  },
});

// selectors
export const getAllAppointmentsData = (state) => state.appointments;
// actions
export const { setAppointmentMessageEmpty } = appointmentSlice.actions;

// export
export default appointmentSlice.reducer;
