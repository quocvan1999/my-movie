import { createSlice } from "@reduxjs/toolkit";

const detailMovieReducer = createSlice({
  name: "detailMovieReducer",
  initialState: {
    detailMovie: [],
    pending: false,
    error: false,
  },
  reducers: {
    setDetailMovieStart: (state) => {
      state.pending = true;
    },
    setDetailMovieError: (state) => {
      state.pending = false;
      state.error = true;
    },
    setDetailMovieSuccess: (state, action) => {
      state.detailMovie = action.payload;
      state.pending = false;
    },
  },
});

export const {
  setDetailMovieStart,
  setDetailMovieSuccess,
  setDetailMovieError,
} = detailMovieReducer.actions;

export default detailMovieReducer.reducer;
