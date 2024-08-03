import React, { useEffect, useState } from "react";
import LimitItem from "./LimitItem";
import { useSearchParams } from "react-router-dom";

export const LimitPage = () => {
  const [limitPage, setLimitPage] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const page = searchParam.get("page");
  const limit = searchParam.get("limit");

  const renderLimitItem = (number) => {
    for (let index = 1; index * 10 <= number; index++) {
      setLimitPage((prev) => [...prev, index * 10]);
    }
  };

  const handleChangeLimitPage = (value) => {
    setSearchParam({ page: page, limit: value });
  };

  useEffect(() => {
    setLimitPage([]);
    renderLimitItem(100);
  }, []);

  return (
    <div className="w-[30%]">
      <form className="max-w-sm mx-auto">
        <select
          onChange={(e) => {
            handleChangeLimitPage(e.target.value);
          }}
          className="bg-[#202020] text-white text-sm rounded-md inline-block p-2 cursor-pointer"
          value={limit}
        >
          {limitPage.map((limit, index) => (
            <LimitItem key={index} limit={limit} />
          ))}
        </select>
      </form>
    </div>
  );
};
