import axios from "axios";
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
import {
  setResultMovieStart,
  setResultMovieSuccess,
  setResultMovieError,
} from "../reducers/resultMovieReducel";

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
      dispatch(setDetailMovieSuccess(res.data));
    } catch (e) {
      dispatch(setDetailMovieError(e.message));
    }
  };
};

export const getResultMovieAsync = (keyUrl, page, limit) => {
  return async (dispatch) => {
    dispatch(setResultMovieStart());
    try {
      const res = await axios.get(
        `https://phimapi.com/v1/api/danh-sach/${keyUrl}?page=${page}&limit=${limit}`
      );
      dispatch(setResultMovieSuccess(res.data));
    } catch (e) {
      dispatch(setResultMovieError(e.message));
    }
  };
};
