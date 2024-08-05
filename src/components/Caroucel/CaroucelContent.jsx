import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatString, truncateText } from "../../assets/js/method/method";
import { NavLink } from "react-router-dom";

const CaroucelContent = () => {
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  return (
    <div>
      {detailMoviePending === false && detailMovie && detailMovie?.movie && (
        <div className="transition-all duration-500 ease-in-out">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-center bg-cover bg-[url(../../../../../public/images/texture.jpg)] animate__animated animate__fadeIn animate__delay-1s">
            {detailMovie.movie.name}
          </h1>
          <p className="text-gray-300 mt-3 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            {truncateText(detailMovie.movie.content, 250)}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-6">
            <div className="flex items-center animate__animated animate__fadeIn animate__delay-1s">
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <span className="font-medium text-2xl text-white ml-3">5.0</span>
            </div>
            <div className="flex gap-5">
              <p className="text-[14px] text-white animate__animated animate__fadeIn animate__delay-1s">
                {detailMovie.movie.time}
              </p>
              <p className="text-[14px] text-white animate__animated animate__fadeIn animate__delay-1s">
                <span className="text-[#E40813]">
                  Genres:{" "}
                  <span className="text-white">
                    {truncateText(
                      formatString(detailMovie.movie.actor, 2, ""),
                      20
                    )}
                  </span>
                </span>
              </p>
              <p className="text-[14px] text-white animate__animated animate__fadeIn animate__delay-1s">
                <span className="text-[#E40813]">
                  Starring:{" "}
                  <span className="text-white">
                    {truncateText(
                      formatString(detailMovie.movie.director, 2, ""),
                      20
                    )}
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="mt-3">
            <NavLink
              to={`/detail/${detailMovie.movie.slug}`}
              className="bg-[#E40813] uppercase inline-block text-[14px] leading-[21px] px-5 py-3 rounded-lg font-semibold hover:bg-[#b82b32] transition-all ease-in-out duration-500 animate__animated animate__fadeIn animate__delay-1s"
            >
              <span className="text-white flex items-center">
                stream now <i className="bx bx-play text-[24px]"></i>
              </span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaroucelContent;
