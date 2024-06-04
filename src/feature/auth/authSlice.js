// create auth slice
import { createSlice } from "@reduxjs/toolkit";
import {
  loggedInUser,
  logout,
  onAuthStateChange,
  signInWithGoogle,
  userLogin,
  userRegister,
} from "./authApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage?.getItem("user"))
      : null,
    error: null,
    message: null,
    loading: true,
  },
  reducers: {
    setAuthMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // sign in with google
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInWithGoogle.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      // logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        localStorage.removeItem("user");
      })
      // on state change
      .addCase(onAuthStateChange.pending, () => {
        // state.loading = true;
      })
      .addCase(onAuthStateChange.rejected, () => {
        // state.loading = false;
        // state.error = action.error.message;
      })
      .addCase(onAuthStateChange.fulfilled, (state, action) => {
        // state.loading = false;
        state.user = {
          _id: action?.payload?.uid,
          emailVerified: action?.payload.emailVerified,
          phone: action?.payload.phoneNumber,
          photo: action?.payload.photoURL,
          name: action?.payload.displayName,
          email: action?.payload.email,
        };
      })
      // register
      .addCase(userRegister.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.data;
      })

      // login
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.message = action.payload.message;
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })

      // logged in user
      .addCase(loggedInUser.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
        state.user = null;
      })
      .addCase(loggedInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        // state.message = action.payload.message;
      });

    // // update user data
    // .addCase(updateUserProfile.rejected, (state, action) => {
    //   state.error = action.error.message;
    // })
    // .addCase(updateUserProfile.fulfilled, (state, action) => {
    //   state.user = action.payload.data;
    //   state.message = action.payload.message;
    //   localStorage.setItem("user", JSON.stringify(action.payload.data));
    // })
    // // update user password
    // .addCase(updateUserPassword.rejected, (state, action) => {
    //   state.error = action.error.message;
    // })
    // .addCase(updateUserPassword.fulfilled, (state, action) => {
    //   state.message = action.payload.message;
    //   state.user = action.payload.data;
    //   localStorage.setItem("user", JSON.stringify(action.payload.data));
    // });
  },
});

// selectors
export const getAuthData = (state) => state.auth;

// actions
export const { setAuthMessageEmpty } = authSlice.actions;
// exports
export default authSlice.reducer;
