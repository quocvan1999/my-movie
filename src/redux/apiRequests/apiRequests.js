import {
  setnewMovieStart,
  setnewMovieSuccess,
  setnewMovieError,
} from "../reducers/newMovieReducer";

import axios from "axios";

export const getAllProductsAsync = async (dispatch) => {
  dispatch(setnewMovieStart());
  try {
    const res = await axios.get(
      "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1"
    );
    // dispatch(setnewMovieSuccess(res.data.content));
    console.log(res);
  } catch (e) {
    dispatch(setnewMovieError(e.message));
  }
};
