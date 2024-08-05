import { configureStore } from "@reduxjs/toolkit";

import phimMoiReducer from "./reducers/phimMoiReducer";
import phimBoReducer from "./reducers/phimBoReducer";
import detailMovieReducer from "./reducers/detailMovieReducer";
import videoPlayingReducer from "./reducers/videoPlayingReducer";

export const store = configureStore({
  reducer: {
    phimMoiReducer: phimMoiReducer,
    phimBoReducer: phimBoReducer,
    detailMovieReducer: detailMovieReducer,
    videoPlayingReducer: videoPlayingReducer,
  },
});
