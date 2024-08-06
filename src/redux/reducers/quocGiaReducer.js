import { createSlice } from "@reduxjs/toolkit";

const quocGiaReducer = createSlice({
  name: "quocGiaReducer",
  initialState: {
    quocGia: [],
    detailQuocGia: [],
    quocGiaPending: false,
    quocGiaError: false,
  },
  reducers: {
    setQuocGiaStart: (state) => {
      state.quocGiaPending = true;
    },
    setQuocGiaError: (state) => {
      state.quocGiaPending = false;
      state.quocGiaError = true;
    },
    setQuocGiaSuccess: (state, action) => {
      state.quocGiaPending = false;
      state.quocGia = action.payload;
    },
    setDetailQuocGiaSuccess: (state, action) => {
      state.detailQuocGia = action.payload;
      state.quocGiaPending = false;
    },
  },
});

export const {
  setQuocGiaStart,
  setQuocGiaSuccess,
  setDetailQuocGiaSuccess,
  setQuocGiaError,
} = quocGiaReducer.actions;
export default quocGiaReducer.reducer;
