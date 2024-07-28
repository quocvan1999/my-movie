import React from "react";

import Caroucel from "../components/Caroucel/Caroucel";
import VideoListCaroucel from "../components/VideosComponent/VideoListCaroucel";

const Home = () => {
  return (
    <div>
      <Caroucel />
      <div className="mt-10">
        <VideoListCaroucel title="Top movie" />
      </div>
    </div>
  );
};

export default Home;
