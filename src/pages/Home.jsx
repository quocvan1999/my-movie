import React from "react";

import Caroucel from "../components/Caroucel/Caroucel";
import VideoList from "../components/VideosComponent/VideoList";

const Home = () => {
  return (
    <div>
      <Caroucel />
      <VideoList title="Top movie" />
    </div>
  );
};

export default Home;
