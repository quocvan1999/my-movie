import React from "react";
import { useSelector } from "react-redux";

import "react-multi-carousel/lib/styles.css";

import Loading from "../Loading";
import CaroucelContent from "../Caroucel/CaroucelContent";
import CaroucelContainer from "./CaroucelContainer";
import BackgroundCaroucel from "./BackgroundCaroucel";

const Caroucel = () => {
  const { phimMoi, phimMoiPending } = useSelector(
    (state) => state.phimMoiReducer
  );

  return (
    <>
      {phimMoiPending === false &&
      phimMoi &&
      phimMoi?.items &&
      phimMoi?.items.length > 0 ? (
        <div
          className={`w-full h-full lg:mt-0 transition-all duration-500 ease-in-out relative`}
        >
          <BackgroundCaroucel />
          <div className="w-full h-full bg-custom-radial z-30">
            <div className="h-full max-w-[1280px] mx-auto py-[100px] md:flex md:items-center">
              <div className="w-full md:w-[50%] lg:w-[60%] h-full px-3 flex flex-col justify-center z-10">
                <CaroucelContent />
              </div>
              <div className="d-none md:w-[50%] lg:w-[40%] h-full text-white md:flex md:items-center relative ">
                <div className="bg-[#0c0c0cd0] h-[350px] md:w-full lg:w-[375px] p-7 pe-0 flex flex-col justify-between absolute right-0 rounded-lg ">
                  <CaroucelContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Caroucel;
