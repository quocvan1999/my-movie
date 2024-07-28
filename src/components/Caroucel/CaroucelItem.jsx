import React from "react";
import { NavLink } from "react-router-dom";
import "./caroucel.css";

const CaroucelItem = ({ item }) => {
  const { img, title } = item;

  return (
    <NavLink
      to="/detail/10"
      className="h-full p-5 transition-all duration-500 block"
    >
      <div
        className="w-full h-full bg-blue-500 rounded-lg relative"
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
