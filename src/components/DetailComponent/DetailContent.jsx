import React, { useState } from "react";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import { NavLink } from "react-router-dom";
import { truncateText, formatString } from "../../assets/js/method/method";

const DetailContent = ({ detailMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    name,
    origin_name,
    poster_url,
    quality,
    time,
    year,
    lang,
    country,
    episode_current,
    category,
    actor,
    director,
    content,
    trailer_url,
    slug,
  } = detailMovie;

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className="max-w-[1280px] h-full mx-auto lg:py-14">
      <ModalTrailer
        toggleModal={toggleModal}
        modalIsOpen={modalIsOpen}
        trailerKey={trailer_url}
      />
      <div className="w-full h-full flex items-start flex-col">
        <div className="w-full flex flex-col lg:flex-row lg:items-center">
          <div className="w-[250px] h-[300px] p-3 mx-auto">
            <img
              src={poster_url}
              alt="..."
              className="w-full h-full block rounded-lg object-cover"
            />
          </div>
          <div className="p-3 w-full">
            <div className="flex flex-col md:flex-row md:items-end md:gap-3">
              <h1 className="text-3xl text-white font-medium">{name}</h1>
              <p className="text-white italic text-[14px] leading-[24px]">
                ({origin_name && origin_name})
              </p>
            </div>
            <div className="flex gap-3 text-[14px] leading-[14px] text-white items-center font-medium mt-2">
              <div className="px-2 py-1 rounded-md bg-[#E40813]">{quality}</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">{time}</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">{year}</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">{lang}</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">
                {country && formatString(country, 1, "name")}
              </div>
            </div>
            <div className="text-white mt-4 text-[14px]">
              <p>
                <span className="font-bold">Số tập:</span>{" "}
                <span>{episode_current}</span>
              </p>
              <p>
                <span className="font-bold">Thể loại:</span>{" "}
                <span>{category && formatString(category, 1, "name")}</span>
              </p>
              <p>
                <span className="font-bold">Đạo diễn:</span>:{" "}
                <span>{director}</span>
              </p>
              <p>
                <span className="font-bold">Diễn viên:</span>{" "}
                <span>{actor && formatString(actor, 2, "")}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div
                className="flex items-center group cursor-pointer"
                onClick={toggleModal}
              >
                <div className="w-9 h-9 me-1 border flex items-center justify-center text-[#E40813] rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#E40813] hover:text-white">
                  <i className="bx bxs-video"></i>
                </div>
                <span className="text-white font-semibold group-hover:text-[#E40813] transition-all duration-500 ease-in-out">
                  Trailer
                </span>
              </div>
              <NavLink
                to={`/streamvideo/${slug}`}
                className="flex items-center group cursor-pointer"
              >
                <div className="w-9 h-9 me-1 border flex items-center justify-center text-[#E40813] rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#E40813] hover:text-white">
                  <i className="bx bx-play text-2xl"></i>
                </div>
                <span className="text-white font-semibold group-hover:text-[#E40813] transition-all duration-500 ease-in-out">
                  Watch Now
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <p className="text-white text-[14px] p-3 italic">{content}</p>
      </div>
    </div>
  );
};

export default DetailContent;
