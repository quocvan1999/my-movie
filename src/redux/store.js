import { configureStore } from "@reduxjs/toolkit";

import phimMoiReducer from "./reducers/phimMoiReducer";
import detailMovieReducer from "./reducers/detailMovieReducer";
import videoPlayingReducer from "./reducers/videoPlayingReducer";

export const store = configureStore({
  reducer: {
    phimMoiReducer: phimMoiReducer,
    detailMovieReducer: detailMovieReducer,
    videoPlayingReducer: videoPlayingReducer,
  },
});
