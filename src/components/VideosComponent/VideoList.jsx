import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ title }) => {
  return (
    <div className="max-w-[1280px] mx-auto py-2">
      <div className="flex justify-between">
        <h1 className="text-white uppercase text-2xl leading-7">{title}</h1>
      </div>
      <div className="flex flex-wrap">
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
        <VideoItem width="calc(100%/5)" />
      </div>
    </div>
  );
};

export default VideoList;
