import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoItem from "./VideoItem";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const VideoList = ({ title }) => {
  return (
    <div className="max-w-[1280px] mx-auto py-14">
      <div className="flex justify-between">
        <h1 className="text-white uppercase text-2xl leading-7">{title}</h1>
        <NavLink to="/">View All</NavLink>
      </div>
      <div className="mt-6">
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
        </Carousel>
      </div>
    </div>
  );
};

export default VideoList;
