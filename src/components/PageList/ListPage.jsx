import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PageItem from "./PageItem";

const ListPage = () => {
  const { resultMovie, resultMoviePending } = useSelector(
    (state) => state.resultMovieReducel
  );
  const [pages, setPages] = useState([]);

  const setTatalPages = () => {
    if (resultMovie.data) {
      const totalPages = resultMovie.data.params.pagination.totalPages;
      for (let index = 0; index < totalPages; index++) {
        setPages((pages) => [...pages, index + 1]);
      }
    }
  };

  useEffect(() => {
    setPages([]);
    setTatalPages();
  }, [resultMovie]);

  return (
    <>
      {resultMoviePending === false && resultMovie.data && pages ? (
        <div className="w-[70%] flex flex-wrap justify-end gap-2">
          {pages &&
            pages.map((page, index) => <PageItem key={index} page={page} />)}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListPage;
