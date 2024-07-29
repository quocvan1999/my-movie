import React from "react";
import VideoList from "../components/VideosComponent/VideoList";

const ViewResult = () => {
  return (
    <div className="w-full">
      <div
        className="w-full h-[300px]"
        style={{
          background: "url(../../../../public/images/movie/breadcrumb-bg.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-[#00000094] flex justify-center items-center">
          <h1 className="text-white font-medium text-4xl">View All</h1>
        </div>
      </div>
      <div>
        <VideoList title="" type="" all={false} />
      </div>
    </div>
  );
};

export default ViewResult;
