import React from "react";
import { useSelector } from "react-redux";

const DetailBackground = () => {
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );
  return (
    <>
      {detailMoviePending === false && detailMovie && detailMovie?.movie && (
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img
            className="w-full h-full object-cover"
            src={detailMovie.movie.thumb_url}
            alt="..."
          />
        </div>
      )}
    </>
  );
};

export default DetailBackground;
