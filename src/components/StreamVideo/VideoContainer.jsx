import React from "react";

const VideoContainer = ({ isVideoPlaying }) => {
  console.log();

  return (
    <iframe
      src={`${isVideoPlaying.link_embed}`}
      frameBorder="0"
      allowFullScreen
      className="video-responsive-container w-full h-full lg:mt-[100px]"
    ></iframe>
  );
};

export default VideoContainer;
