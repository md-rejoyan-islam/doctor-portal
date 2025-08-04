// register user

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { firebaseAuth, googleProvider } from "../../firebase/firebase";

const API_URL = import.meta.env.VITE_SERVER_API_URL;

// Login with Google
export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    try {
      const response = await signInWithPopup(firebaseAuth, googleProvider);

      const signInUser = {
        email: response.user.email,
        name: response.user.displayName,
        provider: "firebase",
        photo: response.user.photoURL,
        phone: response.user.phoneNumber,
      };

      // register data set in server
      const result = await axios.post(
        `${API_URL}/api/v1/auth/google-login`,
        signInUser,
        {
          withCredentials: true,
        }
      );

      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

// onAuthStateChanged
export const onAuthStateChange = createAsyncThunk(
  "auth/onAuthStateChanged",
  async () => {
    try {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(firebaseAuth, async (user) => {
          if (user) {
            resolve(user);
          } else {
            // try {
            //   const response = await axios.get(`${API_URL}/api/v1/auth/me`, {
            //     withCredentials: true,
            //   });
            //   resolve(response.data);
            // } catch (error) {
            //   reject(error.response.data.error);
            // }

            reject("Failed to login.");
          }
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  }
);

// Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post(
      `${API_URL}/api/v1/auth/logout`,
      {},
      { withCredentials: true }
    );
    signOut(firebaseAuth);
    return true;
  } catch (error) {
    throw new Error(error);
  }
});

// user register
export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async ({ fields, reset, navigate, from, setLoading }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/auth/register`,
        fields,
        {
          withCredentials: true,
        }
      );
      reset();
      navigate(from, { replace: true });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    } finally {
      setLoading(false);
    }
  }
);

// login user
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ fields, reset, navigate, from, setLoading }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/auth/login`,
        fields,
        {
          withCredentials: true,
        }
      );
      reset();
      navigate(from, { replace: true });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    } finally {
      setLoading(false);
    }
  }
);

// logged in user
export const loggedInUser = createAsyncThunk(
  "auth/loggedInUser",
  async (data = {}) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/auth/me`, {
        withCredentials: true,
      });

      return {
        ...response.data,
        data: {
          ...response.data.data,
          photo: response?.data.data.photo || data.photoURL,
        },
      };
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// update user profile
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (data) => {
    try {
      const id = data.get("id");
      const response = await axios.patch(
        `${API_URL}/api/v1/users/${id}`,
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

// update user password
export const updateUserPassword = createAsyncThunk(
  "auth/updateUserPassword",
  async ({ id, passwordFields, resetForm }) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/v1/users/update-password/${id}`,
        passwordFields,
        {
          withCredentials: true,
        }
      );

      //modal close
      document.getElementById("edit_personal_details").click();
      // reset form
      resetForm();
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
