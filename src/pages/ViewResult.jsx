import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getMovies } from "../redux/apiRequests/apiRequests";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/Loading";
import VideoList from "../components/VideosComponent/VideoList";
import ListPage from "../components/PageList/ListPage";
import LimitPage from "../components/LimitPage/LimitPage";

import {
  setPhimLeStart,
  setPhimLeSuccess,
  setPhimLeError,
} from "../redux/reducers/phimLeReducer";
import {
  setPhimBoStart,
  setPhimBoSuccess,
  setPhimBoError,
} from "../redux/reducers/phimBoReducer";
import {
  setTvShowsStart,
  setTvShowsSuccess,
  setTvShowsError,
} from "../redux/reducers/tvShowsReducer";
import {
  setHoatHinhStart,
  setHoatHinhSuccess,
  setHoatHinhError,
} from "../redux/reducers/hoatHinhReducer";
import {
  setSearchResultStart,
  setSearchResultSuccess,
  setSearchResultError,
} from "../redux/reducers/searchResultReducer";

const ViewResult = () => {
  const { keyUrl } = useParams();
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams();

  const page = searchParam.get("page");
  const limit = searchParam.get("limit");
  const searchValue = searchParam.get("searchValue");

  const getData = (keyUrl) => {
    let data = [];
    let pending = true;

    switch (keyUrl) {
      case "phim-bo":
        const { phimBo, phimBoPending } = useSelector(
          (state) => state.phimBoReducer
        );
        data = phimBo;
        pending = phimBoPending;
        break;
      case "phim-le":
        const { phimLe, phimLePending } = useSelector(
          (state) => state.phimLeReducer
        );
        data = phimLe;
        pending = phimLePending;
        break;
      case "tv-shows":
        const { tvShows, tvShowsPending } = useSelector(
          (state) => state.tvShowsReducer
        );
        data = tvShows;
        pending = tvShowsPending;
        break;
      case "hoat-hinh":
        const { hoatHinh, hoatHinhPending } = useSelector(
          (state) => state.hoatHinhReducer
        );
        data = hoatHinh;
        pending = hoatHinhPending;
        break;
      case "search":
        const { searchResult, searchResultPending } = useSelector(
          (state) => state.searchResultReducer
        );
        data = searchResult;
        pending = searchResultPending;
        break;
      default:
        break;
    }

    return { data, pending };
  };

  const getResultApi = async (keyUrl, limit, page, searchValue) => {
    let start = null;
    let success = null;
    let error = null;

    switch (keyUrl) {
      case "phim-bo":
        start = setPhimBoStart;
        success = setPhimBoSuccess;
        error = setPhimBoError;
        break;
      case "phim-le":
        start = setPhimLeStart;
        success = setPhimLeSuccess;
        error = setPhimLeError;
        break;
      case "tv-shows":
        start = setTvShowsStart;
        success = setTvShowsSuccess;
        error = setTvShowsError;
        break;
      case "hoat-hinh":
        start = setHoatHinhStart;
        success = setHoatHinhSuccess;
        error = setHoatHinhError;
        break;
      case "search":
        start = setSearchResultStart;
        success = setSearchResultSuccess;
        error = setSearchResultError;
        break;
      default:
        break;
    }
    const action = getMovies(
      keyUrl,
      page,
      limit,
      start,
      success,
      error,
      searchValue
    );
    dispatch(action);
  };

  const { data, pending } = getData(keyUrl);

  useEffect(() => {
    getResultApi(keyUrl, limit, page, searchValue);
  }, [keyUrl, limit, page, searchValue]);

  return (
    <>
      {pending === false && data && data?.data && data.data?.items ? (
        <div className="w-full">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[url(../../../../public/images/movie/breadcrumb-bg.webp)] bg-cover bg-no-repeat">
            <div className="w-full h-full bg-[#00000094] flex justify-center flex-col items-center">
              <h1 className="text-[#E40813] font-bold text-4xl uppercase">
                {data.data.titlePage}
              </h1>
              {/* <div className="text-white text-center">
                <p className="underline">{data.data.seoOnPage.titleHead}</p>
              </div> */}
            </div>
          </div>
          <div>
            <VideoList type="" data={data.data} />
          </div>
          <div className="max-w-[1280px] mx-auto my-3 px-3 flex justify-between">
            <LimitPage data={data.data} />
            <ListPage data={data.data} />
          </div>
        </div>
      ) : (
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ViewResult;
