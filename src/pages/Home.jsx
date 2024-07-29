import React from "react";
import Caroucel from "../components/Caroucel/Caroucel";
import VideoList from "../components/VideosComponent/VideoList";

const Home = () => {
  return (
    <div>
      <Caroucel />
      <div className="mt-10">
        <VideoList title="Phim mới" type="caroucel" />
      </div>
    </div>
  );
};

export default Home;
