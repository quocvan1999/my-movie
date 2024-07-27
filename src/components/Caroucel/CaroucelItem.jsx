import React from "react";

import "./caroucel.css";

const CaroucelItem = ({ item }) => {
  const { img, title } = item;

  return (
    <div className="h-full p-5 transition-all duration-500">
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
    </div>
  );
};

export default CaroucelItem;
