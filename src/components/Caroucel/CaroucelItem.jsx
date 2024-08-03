import React from "react";
import { NavLink } from "react-router-dom";

const CaroucelItem = ({ item }) => {
  const { poster_url, slug } = item;

  return (
    <NavLink
      to={`/detail/${slug}`}
      className="h-full p-5 transition-all duration-500 block"
    >
      <div
        className="w-full h-full bg-blue-500 rounded-lg relative bg-style-custom"
        style={{
          background: `url(${poster_url})`,
        }}
      >
        <span
          className="w-full h-full block absolute rounded-lg"
          style={{
            background: "radial-gradient(circle, transparent, black)",
          }}
        />
      </div>
    </NavLink>
  );
};

export default CaroucelItem;
