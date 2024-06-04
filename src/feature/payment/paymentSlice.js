import { createSlice } from "@reduxjs/toolkit";
import { createPaymentIntent } from "./paymentApiSlice";

// create auth slice
const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    client_secret: null,
    error: null,
    message: null,
    loading: true,
  },
  reducers: {
    setPaymentMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // all users
      .addCase(createPaymentIntent.rejected, (state, action) => {
        // state.error = action.error.message;
        // state.loading = false;
      })
      .addCase(createPaymentIntent.fulfilled, (state, action) => {
        // state.loading = false;
        // state.message = action.payload.message;
        state.client_secret = action.payload.data.clientSecret;
      });
  },
});

// selectors
export const getPaymentData = (state) => state.payment;
// actions
export const { setPaymentMessageEmpty } = paymentSlice.actions;

// export
export default paymentSlice.reducer;
