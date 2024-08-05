import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetailMovieAsync } from "../redux/apiRequests/apiRequests";

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

  const setDetailMovieApi = async (id) => {
    const action = setDetailMovieAsync(id);
    dispatch(action);
  };

  useEffect(() => {
    setDetailMovieApi(id);
  }, [id]);

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
