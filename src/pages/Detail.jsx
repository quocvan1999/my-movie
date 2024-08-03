import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovieAsync } from "../redux/apiRequests/apiRequests";
import { useDispatch, useSelector } from "react-redux";

import DetailContent from "../components/DetailComponent/DetailContent";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  const getDetailMovie = async (id) => {
    const action = getDetailMovieAsync(id);
    dispatch(action);
  };

  useEffect(() => {
    getDetailMovie(id);
  }, [id]);

  return (
    <div>
      {detailMoviePending === false && detailMovie.movie ? (
        <div
          className="w-full bg-style-custom mb-5"
          style={{
            background: `url(${detailMovie.movie.thumb_url})`,
          }}
        >
          <div className="w-full h-full bg-[#000000af]">
            <DetailContent />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
