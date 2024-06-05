import { createSlice } from "@reduxjs/toolkit";
import { createDoctor, deleteDoctor, getAllDoctors } from "./doctorApiSlice";

// create auth slice
const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    error: null,
    message: null,
    loading: true,
  },
  reducers: {
    setDoctorMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // all users
      .addCase(getAllDoctors.rejected, (state) => {
        // state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getAllDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.doctors = action.payload.data;
      })
      .addCase(createDoctor.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.doctors = [...state.doctors, action.payload.data];
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.doctors = state.doctors.filter(
          (doctor) => doctor._id !== action.payload.data._id
        );
      });
  },
});

// selectors
export const getAllDoctorsData = (state) => state.doctors;
// actions
export const { setDoctorMessageEmpty } = doctorSlice.actions;

// export
export default doctorSlice.reducer;
