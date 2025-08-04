import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL;

// get all doctor
export const getAllDoctors = createAsyncThunk(
  "doctor/getAllDoctors",
  async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/doctors`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// create doctor
export const createDoctor = createAsyncThunk(
  "doctor/createDoctor",
  async (fields) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/doctors`, fields, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// delete doctor
export const deleteDoctor = createAsyncThunk(
  "doctor/deleteDoctor",
  async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/api/v1/doctors/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
