// create booking slice
import { createSlice } from "@reduxjs/toolkit";
import {
  allBookings,
  createBooking,
  deleteBooking,
  getBookingById,
  updateBooking,
} from "./bookingApiSlice";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
    error: null,
    message: null,
    loading: true,
    booking: null,
  },
  reducers: {
    setBookingMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //create booking
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = [...state.bookings, action.payload.data];
        state.message = action.payload.message;
      })
      .addCase(allBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(allBookings.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      })
      .addCase(allBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload.data;
      })
      .addCase(updateBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(getBookingById.pending, () => {})
      .addCase(getBookingById.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getBookingById.fulfilled, (state, action) => {
        state.booking = action.payload.data;
        state.message = action.payload.message;
      });
  },
});

// selectors
export const getBookingData = (state) => state.booking;

// actions
export const { setBookingMessageEmpty } = bookingSlice.actions;
// exports
export default bookingSlice.reducer;
