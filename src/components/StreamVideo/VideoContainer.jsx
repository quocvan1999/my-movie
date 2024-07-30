import React from "react";

const VideoContainer = () => {
  return (
    <iframe
      className="w-full h-[500px]"
      src="https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240717/zxXfSDOk/index.m3u8"
      frameborder="0"
      allowfullscreen
    ></iframe>
  );
};

export default VideoContainer;
