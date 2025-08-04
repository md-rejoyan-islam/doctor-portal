import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL + "/api/v1/bookings";

// get all bookings
export const allBookings = createAsyncThunk(
  "booking/allBookings",
  async ({ email }) => {
    try {
      const response = await axios.get(`${API_URL}?email=${email}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// create booking
export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async ({ booking }) => {
    try {
      const response = await axios.post(API_URL, booking, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// update booking
export const updateBooking = createAsyncThunk(
  "booking/updateBooking",
  async ({ id, fields }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, fields, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// delete booking

export const deleteBooking = createAsyncThunk(
  "booking/deleteBooking",
  async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// get booking
export const getBookingById = createAsyncThunk(
  "booking/getBookingById",
  async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
