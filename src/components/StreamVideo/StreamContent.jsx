import React from "react";
import { formatString } from "../../assets/js/method/method";
import { useSelector } from "react-redux";

const StreamContent = () => {
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );
  return (
    <>
      {detailMoviePending === false && detailMovie && detailMovie.movie && (
        <div className="flex flex-col lg:flex-row px-3 gap-0 lg:gap-4 ">
          <div className="w-full lg:w-[50%]">
            <div className="flex items-end flex-wrap">
              <h1 className="text-3xl">{detailMovie.movie.name}</h1>
              <p className="italic">({detailMovie.movie.origin_name})</p>
            </div>
            <div className="flex flex-wrap gap-3 text-[14px] leading-[14px] text-white items-center font-medium mt-2">
              <div className="px-2 py-1 rounded-md bg-[#E40813]">
                {detailMovie.movie.quality}
              </div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">
                {detailMovie.movie.time}
              </div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">
                {detailMovie.movie.year}
              </div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">
                {detailMovie.movie.lang}
              </div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">
                {formatString(detailMovie.movie.country, 1, "name")}
              </div>
            </div>
            <p className="text-white text-[14px] mt-6">
              {detailMovie.movie.content}
            </p>
          </div>
          <div className="w-full lg:w-[50%] text-[14px] mt-5">
            <p>
              <span className="font-bold">Thể loại:</span>{" "}
              <span>{formatString(detailMovie.movie.category, 1, "name")}</span>
            </p>
            <p>
              <span className="font-bold">Đạo diễn:</span>:{" "}
              <span>{formatString(detailMovie.movie.director, 2, "")}</span>
            </p>
            <p>
              <span className="font-bold">Diễn viên:</span>{" "}
              <span>{formatString(detailMovie.movie.actor, 2, "")}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default StreamContent;
