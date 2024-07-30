import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoItem from "./VideoItem";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1000, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 480 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 2,
  },
};

const VideoList = ({ title, type, all = true }) => {
  const [sizeItem, setSizeItem] = useState(0);

  useEffect(() => {
    const size = window.innerWidth;
    if (size >= 1000) {
      setSizeItem(5);
    } else if (size >= 768) {
      setSizeItem(4);
    } else if (size >= 480) {
      setSizeItem(3);
    } else {
      setSizeItem(2);
    }
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto py-2">
      <div className="flex justify-between px-3">
        <h1 className="text-white uppercase text-2xl leading-7">{title}</h1>
        {all && (
          <NavLink to="/viewresult/viewall" className="text-[#E40813]">
            View All
          </NavLink>
        )}
      </div>
      <div>
        {type === "caroucel" ? (
          <Carousel responsive={responsive}>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </Carousel>
        ) : (
          <div className="flex flex-wrap w-full">
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
            <VideoItem width={`Calc(100%/${sizeItem})`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoList;
