import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/apiRequests/apiRequests";

import {
  setPhimMoiStart,
  setPhimMoiSuccess,
  setPhimMoiError,
} from "../redux/reducers/phimMoiReducer";

import Caroucel from "../components/Caroucel/Caroucel";
import VideoList from "../components/VideosComponent/VideoList";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();

  const { phimMoi, phimMoiPending } = useSelector(
    (state) => state.phimMoiReducer
  );

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

  useEffect(() => {
    getPhimMoiApi();
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
        {/* <VideoList title="Phim lẽ" type="caroucel" all="true" data={}/> */}
      </div>
    </div>
  );
};

export default Home;
