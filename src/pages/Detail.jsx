import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetailMovieAsync } from "../redux/apiRequests/apiRequests";
import DetailContent from "../components/DetailComponent/DetailContent";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  const setDetailMovieApi = async (id) => {
    const action = setDetailMovieAsync(id);
    dispatch(action);
  };

  useEffect(() => {
    setDetailMovieApi(id);
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
