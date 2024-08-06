import { createSlice } from "@reduxjs/toolkit";

const searchResultReducer = createSlice({
  name: "searchResultReducer",
  initialState: {
    searchResult: [],
    searchResultPending: false,
    searchResultError: false,
  },
  reducers: {
    setSearchResultStart: (state) => {
      state.searchResultPending = true;
    },
    setSearchResultError: (state) => {
      state.searchResultPending = false;
      state.searchResultError = true;
    },
    setSearchResultSuccess: (state, action) => {
      state.searchResultPending = false;
      state.searchResult = action.payload;
    },
  },
});

export const {
  setSearchResultStart,
  setSearchResultSuccess,
  setSearchResultError,
} = searchResultReducer.actions;
export default searchResultReducer.reducer;
