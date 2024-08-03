import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovieAsync } from "../redux/apiRequests/apiRequests";

import StreamContent from "../components/StreamVideo/StreamContent";
import VideoContainer from "../components/StreamVideo/VideoContainer";
import EpisodeList from "../components/StreamVideo/EpisodeList";
import Loading from "../components/Loading";

const StreamVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  const getDetailMovie = async (id) => {
    const action = getDetailMovieAsync(id);
    dispatch(action);
  };

  useEffect(() => {
    getDetailMovie(id);
  }, [id]);

  return (
    <>
      {detailMoviePending === false && detailMovie.movie ? (
        <div className="w-full text-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10 h-[300px] md:h-[500px]">
              {/* <VideoContainer isVideoPlaying={isVideoPlaying} /> */}
            </div>
            <div className="pb-10">
              <StreamContent detailMovie={detailMovie.movie} />
            </div>
            <div className="mb-10">
              {/* <EpisodeList detailMovie={detailMovie.episodes} /> */}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default StreamVideo;
