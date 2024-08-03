import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getResultMovieAsync } from "../../redux/apiRequests/apiRequests";

const PageItem = ({ page }) => {
  const dispatch = useDispatch();
  const { keyUrl } = useParams();
  const { resultMovie, resultMoviePending } = useSelector(
    (state) => state.resultMovieReducel
  );

  const handlePageClick = (page) => {
    const action = getResultMovieAsync(keyUrl, page, 20);
    dispatch(action);
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
