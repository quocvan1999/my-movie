import { createSlice } from "@reduxjs/toolkit";

const newMovieReducer = createSlice({
  name: "newMovieReducer",
  initialState: {
    newMovie: [],
    newMoviePending: false,
    newMovieError: false,
  },
  reducers: {
    setnewMovieStart: (state) => {
      state.newMoviePending = true;
    },
    setnewMovieError: (state) => {
      state.newMoviePending = false;
      state.newMovieError = true;
    },
    setnewMovieSuccess: (state, action) => {
      state.newMoviePending = false;
      state.newMovie = action.payload;
    },
  },
});

export const { setnewMovieStart, setnewMovieSuccess, setnewMovieError } =
  newMovieReducer.actions;
export default newMovieReducer.reducer;
