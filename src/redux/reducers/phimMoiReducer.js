import { createSlice } from "@reduxjs/toolkit";

const phimMoiReducer = createSlice({
  name: "phimMoiReducer",
  initialState: {
    phimMoi: [],
    phimMoiPending: false,
    phimMoiError: false,
  },
  reducers: {
    setPhimMoiStart: (state) => {
      state.phimMoiPending = true;
    },
    setPhimMoiError: (state) => {
      state.phimMoiPending = false;
      state.phimMoiError = true;
    },
    setPhimMoiSuccess: (state, action) => {
      state.phimMoiPending = false;
      state.phimMoi = action.payload;
    },
  },
});

export const { setPhimMoiStart, setPhimMoiSuccess, setPhimMoiError } =
  phimMoiReducer.actions;
export default phimMoiReducer.reducer;
