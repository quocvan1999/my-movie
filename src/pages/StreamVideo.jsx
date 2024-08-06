import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailMovieAsync,
  getMoviesInTypeAsync,
} from "../redux/apiRequests/apiRequests";

import StreamContent from "../components/StreamVideo/StreamContent";
import VideoContainer from "../components/StreamVideo/VideoContainer";
import EpisodeList from "../components/StreamVideo/EpisodeList";
import Loading from "../components/Loading";
import VideoList from "../components/VideosComponent/VideoList";

const StreamVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isDetail, setIsDetail] = useState(false);
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );
  const { phimTheoTheLoai, phimTheoTheLoaiPending } = useSelector(
    (state) => state.phimTheoTheLoaiReducer
  );

  const setDetailMovieApi = async (id) => {
    const action = setDetailMovieAsync(id);
    dispatch(action);
    setIsDetail(true);
  };

  const getMoviesInTypeApi = async () => {
    if (detailMoviePending === false && detailMovie && detailMovie?.movie) {
      const action = getMoviesInTypeAsync(detailMovie?.movie.category);
      dispatch(action);
    }
  };

  useEffect(() => {
    setDetailMovieApi(id);
  }, [id]);

  useEffect(() => {
    if (isDetail === true) {
      getMoviesInTypeApi();
    }
  }, [detailMoviePending, detailMovie]);

  return (
    <>
      {detailMoviePending === false && detailMovie && detailMovie.movie ? (
        <div className="w-full text-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10 h-[300px] md:h-[500px]">
              <VideoContainer />
            </div>
            <div className="pb-10">
              <StreamContent />
            </div>
            <div className="mb-10">
              <EpisodeList />
            </div>
          </div>
          <div>
            {phimTheoTheLoaiPending === false &&
            phimTheoTheLoai &&
            phimTheoTheLoai?.length > 0
              ? phimTheoTheLoai.map((item, index) => {
                  return (
                    <VideoList data={item.data} key={index} type="caroucel" />
                  );
                })
              : ""}
          </div>
        </div>
      ) : (
        <div className="w-full h-[100vh]">
          <Loading />
        </div>
      )}
    </>
  );
};

export default StreamVideo;
