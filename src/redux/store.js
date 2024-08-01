import { configureStore } from "@reduxjs/toolkit";

import newMovieReducer from "./reducers/newMovieReducer";

export const store = configureStore({
  reducer: {
    newMovieReducer: newMovieReducer,
  },
});
