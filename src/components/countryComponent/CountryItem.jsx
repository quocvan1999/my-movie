import React from "react";

const CountryItem = ({ data }) => {
  return (
    <div className="px-2">
      <div className="bg-[#141314] text-white text-center py-5 rounded-lg cursor-pointer hover:bg-[#E40813] transition-all duration-500 ease-in-out">
        {data.name}
      </div>
    </div>
  );
};

export default CountryItem;
