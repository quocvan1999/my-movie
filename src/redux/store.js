import { configureStore } from "@reduxjs/toolkit";

import newMovieReducer from "./reducers/newMovieReducer";
import detailMovieReducer from "./reducers/detailMovieReducer";

export const store = configureStore({
  reducer: {
    newMovieReducer: newMovieReducer,
    detailMovieReducer: detailMovieReducer,
  },
});
