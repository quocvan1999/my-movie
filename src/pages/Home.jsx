import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getQuocGia } from "../redux/apiRequests/apiRequests";

import {
  setPhimMoiStart,
  setPhimMoiSuccess,
  setPhimMoiError,
} from "../redux/reducers/phimMoiReducer";
import {
  setPhimBoStart,
  setPhimBoSuccess,
  setPhimBoError,
} from "../redux/reducers/phimBoReducer";
import {
  setPhimLeStart,
  setPhimLeSuccess,
  setPhimLeError,
} from "../redux/reducers/phimLeReducer";
import {
  setTvShowsStart,
  setTvShowsSuccess,
  setTvShowsError,
} from "../redux/reducers/tvShowsReducer";
import {
  setHoatHinhStart,
  setHoatHinhSuccess,
  setHoatHinhError,
} from "../redux/reducers/hoatHinhReducer";

import Caroucel from "../components/Caroucel/Caroucel";
import VideoList from "../components/VideosComponent/VideoList";
import Loading from "../components/Loading";
import Countrys from "../components/countryComponent/Countrys";

const Home = () => {
  const dispatch = useDispatch();

  const { phimMoi, phimMoiPending } = useSelector(
    (state) => state.phimMoiReducer
  );
  const { phimBo, phimBoPending } = useSelector((state) => state.phimBoReducer);
  const { phimLe, phimLePending } = useSelector((state) => state.phimLeReducer);
  const { tvShows, tvShowsPending } = useSelector(
    (state) => state.tvShowsReducer
  );
  const { hoatHinh, hoatHinhPending } = useSelector(
    (state) => state.hoatHinhReducer
  );

  const getQuocGiaApi = async () => {
    const action = getQuocGia;
    dispatch(action);
  };

  const getPhimMoiApi = async () => {
    const action = getMovies(
      "phim-moi",
      1,
      20,
      setPhimMoiStart,
      setPhimMoiSuccess,
      setPhimMoiError
    );
    dispatch(action);
  };

  const getPhimBoApi = async () => {
    const action = getMovies(
      "phim-bo",
      1,
      20,
      setPhimBoStart,
      setPhimBoSuccess,
      setPhimBoError
    );
    dispatch(action);
  };

  const getPhimLeApi = async () => {
    const action = getMovies(
      "phim-le",
      1,
      20,
      setPhimLeStart,
      setPhimLeSuccess,
      setPhimLeError
    );
    dispatch(action);
  };

  const getTvShowsApi = async () => {
    const action = getMovies(
      "tv-shows",
      1,
      20,
      setTvShowsStart,
      setTvShowsSuccess,
      setTvShowsError
    );
    dispatch(action);
  };

  const getHoatHinhApi = async () => {
    const action = getMovies(
      "hoat-hinh",
      1,
      20,
      setHoatHinhStart,
      setHoatHinhSuccess,
      setHoatHinhError
    );
    dispatch(action);
  };

  useEffect(() => {
    getPhimMoiApi();
    getPhimBoApi();
    getPhimLeApi();
    getTvShowsApi();
    getHoatHinhApi();
    getQuocGiaApi();
  }, []);

  return (
    <div>
      <div className="w-full h-[100vh]">
        {phimMoiPending === false &&
        phimMoi &&
        phimMoi?.items &&
        phimMoi?.items.length > 0 ? (
          <Caroucel />
        ) : (
          <Loading />
        )}
      </div>
      <div className="mt-10 lg:mx-3">
        <div>
          {phimBoPending === false &&
          phimBo &&
          phimBo?.data &&
          phimBo?.data.items ? (
            <VideoList data={phimBo.data} type="caroucel" />
          ) : (
            ""
          )}
        </div>
        <div>
          {phimLePending === false &&
          phimLe &&
          phimLe?.data &&
          phimLe?.data.items ? (
            <VideoList data={phimLe.data} type="caroucel" />
          ) : (
            ""
          )}
        </div>
        <div>
          {tvShowsPending === false &&
          tvShows &&
          tvShows?.data &&
          tvShows?.data.items ? (
            <VideoList data={tvShows.data} type="caroucel" />
          ) : (
            ""
          )}
        </div>
        <div>
          {hoatHinhPending === false &&
          hoatHinh &&
          hoatHinh?.data &&
          hoatHinh?.data.items ? (
            <VideoList data={hoatHinh.data} type="caroucel" />
          ) : (
            ""
          )}
        </div>
        <div className="max-w-[1280px] mx-auto">
          <Countrys />
        </div>
      </div>
    </div>
  );
};

export default Home;
