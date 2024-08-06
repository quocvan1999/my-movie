import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailMovieAsync,
  getMoviesInTypeAsync,
} from "../redux/apiRequests/apiRequests";

import DetailContent from "../components/DetailComponent/DetailContent";
import Loading from "../components/Loading";
import DetailBackground from "../components/DetailComponent/DetailBackground";
import VideoList from "../components/VideosComponent/VideoList";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isDetail, setIsDetail] = useState(false);
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );
  const { phimTheoTheLoai, phimTheoTheLoaiPending } = useSelector(
    (state) => state.phimTheoTheLoaiReducer
  );

  const setDetailMovieApi = async (id) => {
    const action = setDetailMovieAsync(id);
    dispatch(action);
    setIsDetail(true);
  };

  const getMoviesInTypeApi = async () => {
    if (detailMoviePending === false && detailMovie && detailMovie?.movie) {
      const action = getMoviesInTypeAsync(detailMovie?.movie.category);
      dispatch(action);
    }
  };

  useEffect(() => {
    setDetailMovieApi(id);
  }, [id]);

  useEffect(() => {
    if (isDetail === true) {
      getMoviesInTypeApi();
    }
  }, [detailMoviePending, detailMovie]);

  return (
    <div>
      {detailMoviePending === false && detailMovie && detailMovie?.movie ? (
        <div>
          <div className="w-full bg-style-custom relative mb-5">
            <DetailBackground />
            <div className="w-full h-full bg-[#000000af] relative">
              <DetailContent />
            </div>
          </div>
          <div>
            {phimTheoTheLoaiPending === false &&
              phimTheoTheLoai &&
              phimTheoTheLoai?.length > 0 && (
                <div>
                  {phimTheoTheLoai &&
                    phimTheoTheLoai.map((item, index) => {
                      return (
                        <VideoList
                          key={index}
                          data={item.data}
                          type="caroucel"
                        />
                      );
                    })}
                </div>
              )}
          </div>
        </div>
      ) : (
        <div className="h-[100vh]">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Detail;
