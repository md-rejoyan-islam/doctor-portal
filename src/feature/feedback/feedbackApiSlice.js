import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL + "/api/v1/feedbacks";

// get all feedback
export const getAllFeedback = createAsyncThunk(
  "payment/getAllFeedback",
  async (data) => {
    try {
      const response = await axios.get(API_URL + `?email=${data.email}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// create feedback
export const createFeedback = createAsyncThunk(
  "payment/createFeedback",
  async ({ data, reset }) => {
    try {
      const response = await axios.post(API_URL, data, {
        withCredentials: true,
      });
      reset();
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// get feedback
export const getFeedbackById = createAsyncThunk(
  "payment/getFeedbackById",
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
// delete feedback
export const deleteFeedbackById = createAsyncThunk(
  "payment/deleteFeedbackById",
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
