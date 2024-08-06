import { configureStore } from "@reduxjs/toolkit";

import phimMoiReducer from "./reducers/phimMoiReducer";
import phimBoReducer from "./reducers/phimBoReducer";
import detailMovieReducer from "./reducers/detailMovieReducer";
import videoPlayingReducer from "./reducers/videoPlayingReducer";
import phimLeReducer from "./reducers/phimLeReducer";
import tvShowsReducer from "./reducers/tvShowsReducer";
import hoatHinhReducer from "./reducers/hoatHinhReducer";
import searchResultReducer from "./reducers/searchResultReducer";

export const store = configureStore({
  reducer: {
    phimMoiReducer: phimMoiReducer,
    phimBoReducer: phimBoReducer,
    phimLeReducer: phimLeReducer,
    tvShowsReducer: tvShowsReducer,
    hoatHinhReducer: hoatHinhReducer,
    detailMovieReducer: detailMovieReducer,
    videoPlayingReducer: videoPlayingReducer,
    searchResultReducer: searchResultReducer,
  },
});
