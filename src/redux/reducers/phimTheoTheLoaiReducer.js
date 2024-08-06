import { createSlice } from "@reduxjs/toolkit";

const phimTheoTheLoaiReducer = createSlice({
  name: "phimTheoTheLoaiReducer",
  initialState: {
    phimTheoTheLoai: [],
    phimTheoTheLoaiPending: false,
    phimTheoTheLoaiError: false,
  },
  reducers: {
    setPhimTheoTheLoaiStart: (state) => {
      state.phimTheoTheLoaiPending = true;
    },
    setPhimTheoTheLoaiError: (state) => {
      state.phimTheoTheLoaiPending = false;
      state.phimTheoTheLoaiError = true;
    },
    setPhimTheoTheLoaiSuccess: (state, action) => {
      state.phimTheoTheLoaiPending = false;
      state.phimTheoTheLoai = [...state.phimTheoTheLoai, action.payload];
    },
    resetPhimTheoTheLoai: (state) => {
      state.phimTheoTheLoai = [];
    },
  },
});

export const {
  setPhimTheoTheLoaiStart,
  setPhimTheoTheLoaiSuccess,
  setPhimTheoTheLoaiError,
  resetPhimTheoTheLoai,
} = phimTheoTheLoaiReducer.actions;
export default phimTheoTheLoaiReducer.reducer;
