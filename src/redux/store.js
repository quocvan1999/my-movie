import { configureStore } from "@reduxjs/toolkit";

import phimMoiReducer from "./reducers/phimMoiReducer";
import detailMovieReducer from "./reducers/detailMovieReducer";

export const store = configureStore({
  reducer: {
    phimMoiReducer: phimMoiReducer,
    detailMovieReducer: detailMovieReducer,
  },
});
