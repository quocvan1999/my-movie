import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BackgroundCaroucel = () => {
  const [bg, setBg] = useState("");
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  useEffect(() => {
    if (detailMoviePending === false && detailMovie && detailMovie?.movie) {
      setBg(detailMovie.movie.thumb_url);
    }
  }, [detailMovie]);

  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 z-0">
        {detailMoviePending === false && detailMovie && detailMovie?.movie ? (
          <img
            className="object-cover w-full h-full relative animate__animated animate__fadeIn"
            src={detailMovie.movie.thumb_url}
            alt="..."
          />
        ) : (
          <img
            className="object-cover w-full h-full relative"
            src={bg}
            alt="..."
          />
        )}
        <span className="w-full h-full block absolute bg-custom-radial left-0 bottom-0"></span>
      </div>
    </>
  );
};

export default BackgroundCaroucel;
