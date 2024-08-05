import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/apiRequests/apiRequests";

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

import Caroucel from "../components/Caroucel/Caroucel";
import VideoList from "../components/VideosComponent/VideoList";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();

  const { phimMoi, phimMoiPending } = useSelector(
    (state) => state.phimMoiReducer
  );
  const { phimBo, phimBoPending } = useSelector((state) => state.phimBoReducer);

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

  const getPhimBoiApi = async () => {
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

  useEffect(() => {
    getPhimMoiApi();
    getPhimBoiApi();
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
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
