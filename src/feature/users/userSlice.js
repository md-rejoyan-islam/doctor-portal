import { createSlice } from "@reduxjs/toolkit";
import { changeRole, getAllUser } from "./userApiSlice";

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
        state.error = action.error.message;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        // state.message = action.payload.message;

        state.users = action.payload.data;
      })
      // make admin
      .addCase(changeRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(changeRole.fulfilled, (state, action) => {
        state.message = action.payload.message;

        const index = state.users.findIndex(
          (user) => user._id === action.payload.data._id
        );
        state.users[index] = action.payload.data;

        console.log(action.payload.data);
        console.log(state.users);

        // state.users = state.users.map((user) => {
        //   if (user._id === action.payload.data._id) {
        //     user.role = action.payload.data.role;
        //   }
        //   console.log(user);

        //   return user;
        // });
      });
  },
});

// selectors
export const getAllUsersData = (state) => state.users;
// actions
export const { setUsersMessageEmpty } = userSlice.actions;

// export
export default userSlice.reducer;
