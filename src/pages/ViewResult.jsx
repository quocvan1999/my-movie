import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResultMovieAsync } from "../redux/apiRequests/apiRequests";

import VideoList from "../components/VideosComponent/VideoList";
import Loading from "../components/Loading";

const ViewResult = () => {
  const { keyUrl } = useParams();
  const dispatch = useDispatch();
  const { resultMovie, resultMoviePending } = useSelector(
    (state) => state.resultMovieReducel
  );

  const getResultApi = async (url, page, limit) => {
    const action = getResultMovieAsync(url, page, limit);
    dispatch(action);
  };

  useEffect(() => {
    getResultApi(keyUrl, 1, 20);
  }, [keyUrl]);

  return (
    <>
      {resultMoviePending === false && resultMovie.data ? (
        <div className="w-full">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[url(../../../../public/images/movie/breadcrumb-bg.webp)] bg-cover bg-no-repeat">
            <div className="w-full h-full bg-[#00000094] flex justify-center flex-col items-center">
              <h1 className="text-[#E40813] font-bold text-4xl uppercase">
                {resultMovie.data.titlePage}
              </h1>
              <div className="text-white text-center">
                <p className="underline">
                  {resultMovie.data.seoOnPage.titleHead}
                </p>
                <p className="mt-3 italic">
                  {resultMovie.data.seoOnPage.descriptionHead}
                </p>
              </div>
            </div>
          </div>
          <div>
            <VideoList title="" type="" all={false} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ViewResult;
