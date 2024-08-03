import React from "react";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const { videoPlaying } = useSelector((state) => state.videoPlayingReducer);
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
        ""
      )}
    </>
  );
};

export default VideoContainer;
