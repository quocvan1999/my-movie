import React from "react";
import { formatString } from "../../assets/js/method/method";

const StreamContent = ({ detailMovie }) => {
  const {
    name,
    origin_name,
    quality,
    time,
    year,
    lang,
    country,
    content,
    category,
    director,
    actor,
  } = detailMovie;
  return (
    <div className="flex flex-col lg:flex-row px-3">
      <div className="w-full lg:w-[50%]">
        <div className="flex items-end flex-wrap">
          <h1 className="text-3xl">{name}</h1>
          <p className="italic">({origin_name})</p>
        </div>
        <div className="flex flex-wrap gap-3 text-[14px] leading-[14px] text-white items-center font-medium mt-2">
          <div className="px-2 py-1 rounded-md bg-[#E40813]">{quality}</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">{time}</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">{year}</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">{lang}</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">
            {country && formatString(country, 1, "name")}
          </div>
        </div>
        <p className="text-white text-[14px] mt-6">{content}</p>
      </div>
      <div className="w-full lg:w-[50%] text-[14px] mt-5">
        <p>
          <span className="font-bold">Thể loại:</span>{" "}
          <span>{category && formatString(category, 1, "name")}</span>
        </p>
        <p>
          <span className="font-bold">Đạo diễn:</span>:{" "}
          <span>{director && formatString(director, 2, "")}</span>
        </p>
        <p>
          <span className="font-bold">Diễn viên:</span>{" "}
          <span>{actor && formatString(actor, 2, "")}</span>
        </p>
      </div>
    </div>
  );
};

export default StreamContent;
