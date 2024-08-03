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
  const [isVideoPlaying, setIsVideoPlaying] = useState({});
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );
  const dispatch = useDispatch();

  const getDetailMovie = async (id) => {
    const action = getDetailMovieAsync(id);
    dispatch(action);
  };

  const getVideoPlaying = (type, indexServer, indexVideo) => {
    let video = {};
    switch (type) {
      case 1:
        video = detailMovie.episodes[indexServer].server_data[indexVideo];
        break;
      case 2:
        // let idServer = detailMovie.episodes.findIndex(
        //   (server) => server.server_name === indexServer
        // );
        // let idMovie = detailMovie.server_data.findIndex(
        //   (movie) => movie.slug === indexVideo
        // );
        // console.log(idServer, idMovie);

        // video = detailMovie.episodes[idServer].server_data[idMovie];
        break;
      default:
        break;
    }
    setIsVideoPlaying(video);
  };

  useEffect(() => {
    getDetailMovie(id);
  }, [id]);

  useEffect(() => {
    getVideoPlaying(1, 0, 0);
  }, [detailMovie]);

  return (
    <>
      {detailMoviePending ? (
        <Loading />
      ) : (
        <div className="w-full text-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10 h-[300px] md:h-[500px]">
              {isVideoPlaying ? (
                <VideoContainer isVideoPlaying={isVideoPlaying} />
              ) : (
                <Loading />
              )}
            </div>
            <div className="pb-10">
              <StreamContent />
            </div>
            <div className="mb-10">
              <EpisodeList detailMovie={detailMovie.episodes} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StreamVideo;
