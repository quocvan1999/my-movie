import { data } from "autoprefixer";
import {
  setnewMovieStart,
  setnewMovieSuccess,
  setnewMovieError,
} from "../reducers/newMovieReducer";
import {
  setDetailMovieStart,
  setDetailMovieSuccess,
  setDetailMovieError,
} from "../reducers/detailMovieReducer";

import axios from "axios";

export const getNewMovieAsync = async (dispatch) => {
  dispatch(setnewMovieStart());
  try {
    const res = await axios.get(
      "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1"
    );
    dispatch(setnewMovieSuccess(res.data.items));
  } catch (e) {
    dispatch(setnewMovieError(e.message));
  }
};

export const getDetailMovieAsync = (id) => {
  return async (dispatch) => {
    dispatch(setDetailMovieStart());
    try {
      const res = await axios.get(`https://phimapi.com/phim/${id}`);
      dispatch(setDetailMovieSuccess(res.data.movie));
    } catch (e) {
      dispatch(setDetailMovieError(e.message));
    }
  };
};
