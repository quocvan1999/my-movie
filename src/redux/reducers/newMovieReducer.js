import { createSlice } from "@reduxjs/toolkit";

const newMovieReducer = createSlice({
  name: "newMovieReducer",
  initialState: {
    newMovie: [],
    pending: false,
    error: false,
  },
  reducers: {
    setnewMovieStart: (state) => {
      state.pending = true;
    },
    setnewMovieError: (state) => {
      state.pending = false;
      state.error = true;
    },
    setnewMovieSuccess: (state, action) => {
      state.newMovie = action.payload;
      state.pending = false;
    },
  },
});

export const {} = newMovieReducer.actions;
export default newMovieReducer.reducer;
