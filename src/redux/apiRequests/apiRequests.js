import axios from "axios";
import {
  setDetailMovieStart,
  setDetailMovieSuccess,
  setDetailMovieError,
} from "../reducers/detailMovieReducer";
import {
  setPhimTheoTheLoaiStart,
  setPhimTheoTheLoaiSuccess,
  setPhimTheoTheLoaiError,
  resetPhimTheoTheLoai,
} from "../reducers/phimTheoTheLoaiReducer";

export const getMoviesInTypeAsync = (type) => {
  return async (dispatch) => {
    dispatch(setPhimTheoTheLoaiStart());
    dispatch(resetPhimTheoTheLoai());
    try {
      for (let index = 0; index < type.length; index++) {
        const res = await axios.get(
          `https://phimapi.com/v1/api/the-loai/${type[index].slug}`
        );
        dispatch(setPhimTheoTheLoaiSuccess(res.data));
      }
    } catch (e) {
      dispatch(setPhimTheoTheLoaiError(e.message));
    }
  };
};

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
  setError,
  searchValue
) => {
  return async (dispatch) => {
    let url = "";
    dispatch(setStart());
    try {
      if (keyUrl === "phim-moi") {
        url = `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}&limit=${limit}`;
      } else if (keyUrl === "search") {
        url = `https://phimapi.com/v1/api/tim-kiem?keyword=${searchValue}&page=${page}&limit=${limit}`;
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
