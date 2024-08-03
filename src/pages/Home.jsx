import React from "react";

import Caroucel from "../components/Caroucel/Caroucel";
import VideoList from "../components/VideosComponent/VideoList";

const Home = () => {
  return (
    <div>
      <Caroucel />
      <div className="mt-10 lg:mx-3">
        <VideoList title="Phim lẽ" type="caroucel" />
      </div>
    </div>
  );
};

export default Home;
