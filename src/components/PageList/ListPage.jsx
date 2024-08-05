import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const ListPage = () => {
  // const { resultMovie, resultMoviePending } = useSelector(
  //   (state) => state.resultMovieReducel
  // );
  // const [searchParam, setSearchParam] = useSearchParams();
  // const [pages, setPages] = useState([]);
  // const [sizePages, setSizePages] = useState(0);

  // const page = searchParam.get("page");
  // const limit = searchParam.get("limit");

  // const setTatalPages = () => {
  //   if (resultMovie.data) {
  //     const totalPages = resultMovie.data.params.pagination.totalPages;
  //     for (let index = 0; index < totalPages; index++) {
  //       setPages((pages) => [...pages, index + 1]);
  //     }
  //   }
  // };

  // const handlePageClick = (value) => {
  //   const newPage = value.selected + 1;
  //   setSearchParam({ page: newPage, limit: limit });
  // };

  // useEffect(() => {
  //   setPages([]);
  //   setTatalPages();
  // }, [resultMovie]);

  // useEffect(() => {
  //   const size = window.innerWidth;
  //   if (size >= 1000) {
  //     setSizePages(4);
  //   } else if (size >= 768) {
  //     setSizePages(2);
  //   } else if (size >= 480) {
  //     setSizePages(1);
  //   } else {
  //     setSizePages(1);
  //   }
  // }, []);

  return (
    <>
      <div className="flex">
        <ReactPaginate
          previousLabel="<"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={pages.length}
          pageRangeDisplayed={2}
          marginPagesDisplayed={sizePages}
          forcePage={page - 1}
          className="flex text-white gap-1 items-center"
          pageLinkClassName="text-white w-[35px] h-[35px] cursor-pointer
            flex items-center rounded-md justify-center bg-[#202020] hover:bg-[#E40813] transition-all duration-500 ease-in-out"
          activeLinkClassName="text-white w-[35px] h-[35px] flex cursor-pointer items-center rounded-md justify-center bg-[#E40813]"
          breakLinkClassName="text-white w-[35px] h-[35px] flex justify-center items-center"
          previousLinkClassName="text-white w-[35px] h-[35px] cursor-pointer
            flex items-center rounded-md justify-center bg-[#202020] hover:bg-[#E40813] transition-all duration-500 ease-in-out"
          nextLinkClassName="text-white w-[35px] h-[35px] cursor-pointer
            flex items-center rounded-md justify-center bg-[#202020] hover:bg-[#E40813] transition-all duration-500 ease-in-out"
        />
      </div>
    </>
  );
};

export default ListPage;
