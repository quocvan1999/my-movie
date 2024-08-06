import { createSlice } from "@reduxjs/toolkit";

const quocGiaReducer = createSlice({
  name: "quocGiaReducer",
  initialState: {
    quocGia: [],
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
  },
});

export const { setQuocGiaStart, setQuocGiaSuccess, setQuocGiaError } =
  quocGiaReducer.actions;
export default quocGiaReducer.reducer;
