import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL;

// get all users
export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/users`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
});

// make admin
export const makeAdmin = createAsyncThunk("users/makeAdmin", async (id) => {
  try {
    const response = await axios.patch(
      `${API_URL}/api/v1/users/make-admin/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
});

export const changeRole = createAsyncThunk("users/changeRole", async (data) => {
  try {
    const response = await axios.patch(
      `${API_URL}/api/v1/users/role-change/${data.id}`,
      {
        role: data.role,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
});
