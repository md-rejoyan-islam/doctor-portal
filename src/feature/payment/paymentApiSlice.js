import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL + "/api/v1/payment";

// create payment intent
export const createPaymentIntent = createAsyncThunk(
  "payment/createPaymentIntent",
  async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/create-payment-intent`,
        data,
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

// create doctor
export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (data) => {
    try {
      const response = await axios.post(`${API_URL}/pay`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// get all payments
export const getAllPayments = createAsyncThunk(
  "payment/getAllPayments",
  async (data) => {
    try {
      const response = await axios.get(`${API_URL}?email=${data.email}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
