import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovieAsync } from "../redux/apiRequests/apiRequests";
import { setVideoPlaying } from "../redux/reducers/videoPlayingReducer";

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

  const setVideoIsPlaying = (video) => {
    const action = setVideoPlaying(video);
    dispatch(action);
  };

  useEffect(() => {
    getDetailMovie(id);
  }, [id]);

  useEffect(() => {
    if (detailMovie.movie) {
      let newMoviePlaying = detailMovie.episodes[0].server_data[0];
      setVideoIsPlaying(newMoviePlaying);
    }
  }, [detailMovie]);

  return (
    <>
      {detailMoviePending === false && detailMovie.movie ? (
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
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default StreamVideo;
