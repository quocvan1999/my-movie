import React, { useEffect, useState } from "react";
import LimitItem from "./LimitItem";
import { useSearchParams } from "react-router-dom";

const LimitPage = () => {
  const [limitPage, setLimitPage] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const page = searchParam.get("page");
  const limit = searchParam.get("limit");
  const country = searchParam.get("country");
  const searchValue = searchParam.get("searchValue");

  const handleChangeLimitPage = (value) => {
    setSearchParam({
      page: page,
      limit: value,
      searchValue: searchValue,
      country: country,
    });
  };

  const renderLimitItem = (number) => {
    for (let index = 1; index * 10 <= number; index++) {
      setLimitPage((prev) => [...prev, index * 10]);
    }
  };

  useEffect(() => {
    setLimitPage([]);
    renderLimitItem(100);
  }, []);

  return (
    <div className="w-full">
      <form className="">
        <select
          className="bg-[#202020] text-white text-sm rounded-md inline-block p-2 cursor-pointer"
          onChange={(e) => {
            handleChangeLimitPage(e.target.value);
          }}
          value={limit ? limit : 0}
        >
          {limitPage &&
            limitPage.length > 0 &&
            limitPage.map((limit, index) => (
              <LimitItem key={index} limit={limit} />
            ))}
        </select>
      </form>
    </div>
  );
};

export default LimitPage;
