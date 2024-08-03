import { createSlice } from "@reduxjs/toolkit";

const detailMovieReducer = createSlice({
  name: "detailMovieReducer",
  initialState: {
    detailMovie: [],
    detailMoviePending: false,
    detailMovieError: false,
  },
  reducers: {
    setDetailMovieStart: (state) => {
      state.detailMoviePending = true;
    },
    setDetailMovieError: (state) => {
      state.detailMoviePending = false;
      state.detailMovieError = true;
    },
    setDetailMovieSuccess: (state, action) => {
      state.detailMovie = action.payload;
      state.detailMoviePending = false;
    },
  },
});

export const {
  setDetailMovieStart,
  setDetailMovieSuccess,
  setDetailMovieError,
} = detailMovieReducer.actions;

export default detailMovieReducer.reducer;
