import { createSlice } from "@reduxjs/toolkit";

const phimLeReducer = createSlice({
  name: "phimLeReducer",
  initialState: {
    phimLe: [],
    phimLePending: false,
    phimLeError: false,
  },
  reducers: {
    setPhimLeStart: (state) => {
      state.phimLePending = true;
    },
    setPhimLeError: (state) => {
      state.phimLePending = false;
      state.phimLeError = true;
    },
    setPhimLeSuccess: (state, action) => {
      state.phimLePending = false;
      state.phimLe = action.payload;
    },
  },
});

export const { setPhimLeStart, setPhimLeSuccess, setPhimLeError } =
  phimLeReducer.actions;
export default phimLeReducer.reducer;
