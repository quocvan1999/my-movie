import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const PageItem = ({ page }) => {
  const [searchParam, setSearchParam] = useSearchParams();

  const { resultMovie, resultMoviePending } = useSelector(
    (state) => state.resultMovieReducel
  );

  const handlePageClick = (page) => {
    const limit = searchParam.get("limit");
    setSearchParam({ page: page, limit: limit });
  };

  return (
    <>
      {resultMoviePending === false && resultMovie.data ? (
        <button
          onClick={() => {
            handlePageClick(page);
          }}
          className={`w-[30px] h-[30px] flex items-center justify-center rounded-md hover:bg-[#E40813] transition-all duration-500 ease-in-out ${
            resultMovie.data.params.pagination.currentPage === page
              ? "bg-[#E40813]"
              : "bg-[#202020]"
          }`}
        >
          <span className="text-white">{page}</span>
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default PageItem;
