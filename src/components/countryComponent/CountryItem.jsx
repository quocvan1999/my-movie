import React from "react";
import { NavLink } from "react-router-dom";

const CountryItem = ({ data }) => {
  return (
    <div className="px-2">
      <NavLink
        to={`/viewresult/quoc-gia?country=${data.slug}&page=1&limit=20`}
        className="bg-[#141314] block text-white text-center py-5 rounded-lg cursor-pointer hover:bg-[#E40813] transition-all duration-500 ease-in-out"
      >
        {data.name}
      </NavLink>
    </div>
  );
};

export default CountryItem;
