import { createSlice } from "@reduxjs/toolkit";

const hoatHinhReducer = createSlice({
  name: "hoatHinhReducer",
  initialState: {
    hoatHinh: [],
    hoatHinhPending: false,
    hoatHinhError: false,
  },
  reducers: {
    setHoatHinhStart: (state) => {
      state.hoatHinhPending = true;
    },
    setHoatHinhError: (state) => {
      state.hoatHinhPending = false;
      state.hoatHinhError = true;
    },
    setHoatHinhSuccess: (state, action) => {
      state.hoatHinhPending = false;
      state.hoatHinh = action.payload;
    },
  },
});

export const { setHoatHinhStart, setHoatHinhSuccess, setHoatHinhError } =
  hoatHinhReducer.actions;
export default hoatHinhReducer.reducer;
