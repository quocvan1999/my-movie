import { createSlice } from "@reduxjs/toolkit";

const tvShowsReducer = createSlice({
  name: "tvShowsReducer",
  initialState: {
    tvShows: [],
    tvShowsPending: false,
    tvShowsError: false,
  },
  reducers: {
    setTvShowsStart: (state) => {
      state.tvShowsPending = true;
    },
    setTvShowsError: (state) => {
      state.tvShowsPending = false;
      state.tvShowsError = true;
    },
    setTvShowsSuccess: (state, action) => {
      state.tvShowsPending = false;
      state.tvShows = action.payload;
    },
  },
});

export const { setTvShowsStart, setTvShowsSuccess, setTvShowsError } =
  tvShowsReducer.actions;
export default tvShowsReducer.reducer;
