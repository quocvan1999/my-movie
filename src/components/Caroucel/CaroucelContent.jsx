import React from "react";
import { truncateText, formatString } from "../../assets/js/method/method";
import { useSelector } from "react-redux";

const CaroucelContent = () => {
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  return (
    <>
      {detailMoviePending == false && detailMovie ? (
        <div>
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-center bg-cover bg-[url(../../../../../public/images/texture.jpg)]">
            {detailMovie.movie.name}
          </h1>
          <p className="text-gray-300 mt-3 mb-8">
            {truncateText(detailMovie.movie.content, 250)}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-6">
            <div className="flex items-center">
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <i className="bx bxs-star text-2xl text-yellow-400"></i>
              <span className="font-medium text-2xl text-white ml-3">5.0</span>
            </div>
            <div className="flex gap-5">
              <p className="text-[14px] text-white">{detailMovie.movie.time}</p>
              <p className="text-[14px] text-white">
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
              <p className="text-[14px] text-white">
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
            <button className="bg-[#E40813] text-white uppercase text-[14px] leading-[21px] px-5 py-3 rounded-lg font-semibold flex items-center hover:bg-[#b82b32] transition-all ease-in-out duration-500">
              stream now <i className="bx bx-play text-[24px]"></i>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CaroucelContent;
