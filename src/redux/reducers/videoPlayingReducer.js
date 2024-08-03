import { createSlice } from "@reduxjs/toolkit";

const videoPlayingReducer = createSlice({
  name: "videoPlayingReducer",
  initialState: {
    videoPlaying: {},
  },
  reducers: {
    setVideoPlaying: (state, action) => {
      state.videoPlaying = action.payload;
    },
  },
});

export const { setVideoPlaying } = videoPlayingReducer.actions;
export default videoPlayingReducer.reducer;
