import axios from "axios";
import {
  setDetailMovieStart,
  setDetailMovieSuccess,
  setDetailMovieError,
} from "../reducers/detailMovieReducer";

export const setDetailMovieAsync = (id) => {
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

export const getMovies = (
  keyUrl,
  page,
  limit,
  setStart,
  setSuccess,
  setError
) => {
  return async (dispatch) => {
    let url = "";
    dispatch(setStart());
    try {
      if (keyUrl === "phim-moi") {
        url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}&limit=${limit}`;
      } else {
        url = `https://phimapi.com/v1/api/danh-sach/${keyUrl}?page=${page}&limit=${limit}`;
      }
      const res = await axios.get(url);
      dispatch(setSuccess(res.data));
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
};
