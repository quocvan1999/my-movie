import { createSlice } from "@reduxjs/toolkit";

const phimBoReducer = createSlice({
  name: "phimBoReducer",
  initialState: {
    phimBo: [],
    phimBoPending: false,
    phimBoError: false,
  },
  reducers: {
    setPhimBoStart: (state) => {
      state.phimBoPending = true;
    },
    setPhimBoError: (state) => {
      state.phimBoPending = false;
      state.phimBoError = true;
    },
    setPhimBoSuccess: (state, action) => {
      state.phimBoPending = false;
      state.phimBo = action.payload;
    },
  },
});

export const { setPhimBoStart, setPhimBoSuccess, setPhimBoError } =
  phimBoReducer.actions;
export default phimBoReducer.reducer;
