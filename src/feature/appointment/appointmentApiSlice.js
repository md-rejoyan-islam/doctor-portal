import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { formatDate } from "date-fns";

const API_URL = import.meta.env.VITE_SERVER_API_URL;

// get all users
export const getAllAppointments = createAsyncThunk(
  "appointment/getAllAppointments",
  async () => {
    try {
      const date = formatDate(new Date(), "PP");
      const response = await axios.get(
        `${API_URL}/api/v1/appointments?date=${date}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
