import { createSlice } from "@reduxjs/toolkit";

const resultMovieReducel = createSlice({
  name: "resultMovieReducel",
  initialState: {
    resultMovie: [],
    resultMoviePending: false,
    resultMovieError: false,
  },
  reducers: {
    setResultMovieStart: (state) => {
      state.resultMoviePending = true;
    },
    setResultMovieError: (state) => {
      state.resultMoviePending = false;
      state.resultMovieError = true;
    },
    setResultMovieSuccess: (state, action) => {
      state.resultMoviePending = false;
      state.resultMovie = action.payload;
    },
  },
});

export const {
  setResultMovieStart,
  setResultMovieSuccess,
  setResultMovieError,
} = resultMovieReducel.actions;
export default resultMovieReducel.reducer;
