import React from "react";

const VideoContainer = ({ isVideoPlaying }) => {
  return (
    <iframe
      className="video-responsive-container w-full h-full lg:mt-[100px]"
      src={isVideoPlaying ? isVideoPlaying.link_embed : ""}
      frameborder="0"
      allowfullscreen
    ></iframe>
  );
};

export default VideoContainer;
