import React from "react";
import StreamContent from "../components/StreamVideo/StreamContent";
import VideoContainer from "../components/StreamVideo/VideoContainer";
import EpisodeList from "../components/StreamVideo/EpisodeList";

const StreamVideo = () => {
  return (
    <div className="w-full text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10">
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
  );
};

export default StreamVideo;
