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
import {
  setQuocGiaStart,
  setQuocGiaSuccess,
  setDetailQuocGiaSuccess,
  setQuocGiaError,
} from "../reducers/quocGiaReducer";

export const getQuocGia = async (dispatch) => {
  try {
    dispatch(setQuocGiaStart());
    const res = await axios.get("https://phimapi.com/quoc-gia");
    dispatch(setQuocGiaSuccess(res.data));
  } catch (error) {
    dispatch(setQuocGiaError(error.message));
  }
};

export const getDetailQuocGia = (quocGia, page, limit) => {
  return async (dispatch) => {
    dispatch(setQuocGiaStart());
    try {
      const res = await axios.get(
        `https://phimapi.com/v1/api/quoc-gia/${quocGia}?page=${page}&limit=${limit}`
      );
      dispatch(setDetailQuocGiaSuccess(res.data));
    } catch (error) {
      dispatch(setQuocGiaError(error.message));
    }
  };
};

export const getMoviesInTypeAsync = (type, page, limit) => {
  return async (dispatch) => {
    dispatch(setPhimTheoTheLoaiStart());
    dispatch(resetPhimTheoTheLoai());
    try {
      if (typeof type === "object") {
        for (let index = 0; index < type.length; index++) {
          const res = await axios.get(
            `https://phimapi.com/v1/api/the-loai/${type[index].slug}?page=1&limit=20`
          );
          dispatch(setPhimTheoTheLoaiSuccess(res.data));
        }
      } else {
        const res = await axios.get(
          `https://phimapi.com/v1/api/the-loai/${type}?page=${page}&limit=${limit}`
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
