import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setVideoPlaying } from "../../redux/reducers/videoPlayingReducer";
import Loading from "../Loading";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videoPlaying } = useSelector((state) => state.videoPlayingReducer);
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  const setVideoPlay = (video) => {
    const action = setVideoPlaying(video);
    dispatch(action);
  };

  useEffect(() => {
    if (detailMoviePending === false && detailMovie && detailMovie?.episodes) {
      const video = detailMovie.episodes[0].server_data[0];
      setVideoPlay(video);
    }
  }, []);

  return (
    <>
      {videoPlaying ? (
        <iframe
          src={`${videoPlaying.link_embed}`}
          frameBorder="0"
          allowFullScreen
          className="video-responsive-container w-full h-full lg:mt-[100px]"
        ></iframe>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default VideoContainer;
