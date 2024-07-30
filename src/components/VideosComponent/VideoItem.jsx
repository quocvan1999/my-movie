import React from "react";
import { NavLink } from "react-router-dom";

const VideoItem = ({ width = "" }) => {
  return (
    <div
      className="text-white h-[350px] px-3 py-6 rounded-lg hover:scale-110 hover:z-50 transition-all ease-in-out duration-500 group"
      style={{ width: `${width}` }}
    >
      <div className="w-full h-full rounded-lg cursor-pointer bg-[url(../../../../../public/images/movie/bg-little-mermaid.jpg)] bg-cover bg-no-repeat">
        <div className="w-full h-full flex flex-col justify-between bg-[#0000007e] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-3">
          <div className="text-white">
            <h1 className="text-2xl font-semibold">The Hunter</h1>
            <p className="text-[14px]">1hr: 58mins</p>
          </div>
          <div>
            <NavLink
              to="/detail/10"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-500 ease-in-out hover:bg-[#E40813] hover:border-[#E40813]"
            >
              <i className="bx bx-play text-3xl text-white"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
