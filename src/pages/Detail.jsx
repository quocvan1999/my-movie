import React, { useEffect } from "react";
import DetailContent from "../components/DetailComponent/DetailContent";
import VideoList from "../components/VideosComponent/VideoList";
import { useParams } from "react-router-dom";
import { getDetailMovieAsync } from "../redux/apiRequests/apiRequests";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const { detailMovie } = useSelector((state) => state.detailMovieReducer);
  const dispatch = useDispatch();

  const getDetailMovie = async (id) => {
    const action = getDetailMovieAsync(id);
    dispatch(action);
  };

  useEffect(() => {
    getDetailMovie(id);
  }, [id]);

  return (
    <div>
      <div
        className="w-full bg-cover bg-no-repeat bg-center mb-5"
        style={{
          background: `url(${detailMovie && detailMovie.thumb_url})`,
        }}
      >
        <div className="w-full h-full bg-[#000000af]">
          <DetailContent detailMovie={detailMovie} />
        </div>
      </div>
      <VideoList title="Phim tương tự" type="" />
    </div>
  );
};

export default Detail;
