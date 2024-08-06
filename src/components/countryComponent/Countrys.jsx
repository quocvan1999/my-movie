import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountryItem from "./CountryItem";

const Countrys = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1000, min: 768 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 3,
    },
  };
  const { quocGia, quocGiaPending } = useSelector(
    (state) => state.quocGiaReducer
  );

  return (
    <div>
      <h1 className="text-white inline-block uppercase text-2xl leading-7 after:content-[''] after:h-[2px] after:w-full after:block after:bg-[#e40813] after:mt-1 px-3">
        Quốc gia
      </h1>
      <Carousel responsive={responsive} className="my-5">
        {quocGiaPending === false &&
          quocGia &&
          quocGia.length > 0 &&
          quocGia?.map((item, index) => {
            return <CountryItem key={index} data={item} />;
          })}
      </Carousel>
    </div>
  );
};

export default Countrys;
