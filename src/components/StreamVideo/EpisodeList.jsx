import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EpisodeItem from "./EpisodeItem";
import { useSelector } from "react-redux";

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

const EpisodeList = () => {
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  return (
    <>
      <div></div>
      {detailMoviePending === false &&
        detailMovie &&
        detailMovie?.episodes &&
        detailMovie?.episodes.map((server, indexServer) => {
          return (
            <div key={indexServer} className="w-full">
              <h1>Server: {server.server_name}</h1>
              <Carousel className="mt-2 w-full" responsive={responsive}>
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
