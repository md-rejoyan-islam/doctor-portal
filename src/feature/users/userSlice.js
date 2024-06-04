import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, makeAdmin } from "./userApiSlice";

// create auth slice
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    message: null,
  },
  reducers: {
    setUsersMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // all users
      .addCase(getAllUser.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        (state.message = action.payload.message),
          (state.users = action.payload.data);
      })
      // make admin
      .addCase(makeAdmin.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(makeAdmin.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.users = state.users.map((user) => {
          if (user._id === action.payload.data._id) {
            user = action.payload.data;
          }
          return user;
        });
      });
  },
});

// selectors
export const getAllUsersData = (state) => state.users;
// actions
export const { setUsersMessageEmpty } = userSlice.actions;

// export
export default userSlice.reducer;
