import { createSlice } from "@reduxjs/toolkit";
import {
  createFeedback,
  deleteFeedbackById,
  getAllFeedback,
} from "./feedbackApiSlice";

// create auth slice
const feedbacktSlice = createSlice({
  name: "feedback",
  initialState: {
    feedbacks: [],
    error: null,
    message: null,
    loading: true,
  },
  reducers: {
    setFeedbackMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // all feedback
      .addCase(getAllFeedback.rejected, () => {
        // state.error = action.error.message;
      })
      .addCase(getAllFeedback.fulfilled, (state, action) => {
        // state.message = action.payload.message;
        state.feedbacks = action.payload.data;
      })
      // create feedback
      .addCase(createFeedback.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createFeedback.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.feedbacks = [...state.feedbacks, action.payload.data];
      })
      // delete feedback
      .addCase(deleteFeedbackById.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteFeedbackById.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.feedbacks = state.feedbacks.filter(
          (feedback) => feedback._id !== action.payload.data._id
        );
      });
  },
});

// selectors
export const getAllFeedbackData = (state) => state.feedback;
// actions
export const { setFeedbackMessageEmpty } = feedbacktSlice.actions;

// export
export default feedbacktSlice.reducer;
