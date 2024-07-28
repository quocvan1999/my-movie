import React from "react";

const StreamVideo = () => {
  return (
    <div className="w-full mt-[100px] text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10">
          <iframe
            className="w-full h-[500px] border"
            src="https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240717/zxXfSDOk/index.m3u8"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StreamVideo;
