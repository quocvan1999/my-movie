import { configureStore } from "@reduxjs/toolkit";

import phimMoiReducer from "./reducers/phimMoiReducer";
import phimLeReducer from "./reducers/phimLeReducer";
import detailMovieReducer from "./reducers/detailMovieReducer";
import videoPlayingReducer from "./reducers/videoPlayingReducer";

export const store = configureStore({
  reducer: {
    phimMoiReducer: phimMoiReducer,
    phimLeReducer: phimLeReducer,
    detailMovieReducer: detailMovieReducer,
    videoPlayingReducer: videoPlayingReducer,
  },
});
