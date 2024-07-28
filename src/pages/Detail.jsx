import React from "react";
import DetailContent from "../components/DetailComponent/DetailContent";
import VideoList from "../components/VideosComponent/VideoList";

const Detail = () => {
  return (
    <div>
      <div
        className="w-full h-[100vh] mb-5"
        style={{
          background:
            "url(../../../../public/images/movie/bg-the-black-demon.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-[#000000af]">
          <DetailContent />
        </div>
      </div>
      <VideoList title="Phim tương tự" />
    </div>
  );
};

export default Detail;
