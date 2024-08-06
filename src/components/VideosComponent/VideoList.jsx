import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import VideoItem from "./VideoItem";
import Loading from "../Loading";

const VideoList = ({ type = "", data = [] }) => {
  const [sizeItem, setSizeItem] = useState(0);

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
    <>
      {data && data.items ? (
        <div className="max-w-[1280px] mx-auto py-2">
          <div className="flex justify-between px-3">
            {type === "caroucel" && (
              <>
                <h1 className="text-white uppercase text-2xl leading-7 after:content-[''] after:h-[2px] after:w-full after:block after:bg-[#e40813] after:mt-1">
                  {data.titlePage}
                </h1>
                <NavLink
                  to={`/viewresult/${data.type_list}?page=1&limit=20`}
                  className="text-[#E40813]"
                >
                  View All
                </NavLink>
              </>
            )}
          </div>
          <div>
            {type === "caroucel" ? (
              <Carousel responsive={responsive}>
                {data &&
                  data?.items &&
                  data?.items.map((item, index) => (
                    <VideoItem key={index} item={item} />
                  ))}
              </Carousel>
            ) : (
              <div className="flex flex-wrap w-full">
                {data &&
                  data.items.map((item, index) => (
                    <VideoItem
                      key={index}
                      item={item}
                      width={`Calc(100%/${sizeItem})`}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default VideoList;
