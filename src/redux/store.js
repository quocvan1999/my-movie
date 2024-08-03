import { configureStore } from "@reduxjs/toolkit";

import newMovieReducer from "./reducers/newMovieReducer";
import detailMovieReducer from "./reducers/detailMovieReducer";
import videoPlayingReducer from "./reducers/videoPlayingReducer";

export const store = configureStore({
  reducer: {
    newMovieReducer: newMovieReducer,
    detailMovieReducer: detailMovieReducer,
    videoPlayingReducer: videoPlayingReducer,
  },
});