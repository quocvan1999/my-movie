import React from "react";
import DetailContent from "../components/DetailComponent/DetailContent";
import VideoList from "../components/VideosComponent/VideoList";

const Detail = () => {
  return (
    <div>
      <div className="w-full bg-[url(../../../../public/images/movie/bg-the-black-demon.jpeg)] bg-cover bg-no-repeat bg-center mb-5">
        <div className="w-full h-full bg-[#000000af]">
          <DetailContent />
        </div>
      </div>
      <VideoList title="Phim tương tự" type="" />
    </div>
  );
};

export default Detail;
