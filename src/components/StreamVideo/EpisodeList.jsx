import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EpisodeItem from "./EpisodeItem";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const EpisodeList = ({ detailMovie }) => {
  return (
    <>
      {detailMovie &&
        detailMovie.map((server, indexServer) => {
          return (
            <div key={indexServer}>
              <h1>{server.server_name}</h1>
              <Carousel className="mt-2" responsive={responsive}>
                {server.server_data.map((episode, index) => {
                  return <EpisodeItem key={index} episode={episode} />;
                })}
              </Carousel>
            </div>
          );
        })}
    </>
  );
};

export default EpisodeList;
