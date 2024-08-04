import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  getMovies,
  setDetailMovieAsync,
} from "../../redux/apiRequests/apiRequests";
import {
  setPhimMoiStart,
  setPhimMoiSuccess,
  setPhimMoiError,
} from "../../redux/reducers/phimMoiReducer";

import CustomButtonGroupAsArrows from "./CustomButtonGroupAsArrows";
import CaroucelItem from "./CaroucelItem";
import CaroucelContent from "./CaroucelContent";
import Loading from "../Loading";

import { useDispatch, useSelector } from "react-redux";

const Caroucel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const dispatch = useDispatch();
  const { phimMoi, phimMoiPending } = useSelector(
    (state) => state.phimMoiReducer
  );
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

  const getPhimMoiApi = async () => {
    const action = getMovies(
      "phim-moi",
      1,
      10,
      setPhimMoiStart,
      setPhimMoiSuccess,
      setPhimMoiError
    );
    dispatch(action);
  };

  const setDetailMovie = async (id) => {
    const action = setDetailMovieAsync(id);
    dispatch(action);
  };

  const handleAfterChange = (previousSlide, { currentSlide }) => {
    let index = 0;
    currentSlide - 2 > phimMoi.items.length - 1
      ? (index = 0)
      : currentSlide - 2 === -1
      ? (index = phimMoi.items.length - 1)
      : currentSlide - 2 === -2
      ? (index = phimMoi.items.length - 2)
      : (index = currentSlide - 2);

    setDetailMovie(phimMoi.items[index].slug);
  };

  useEffect(() => {
    getPhimMoiApi();
  }, []);

  useEffect(() => {
    let id = "";
    phimMoi.items && (id = phimMoi.items[0].slug);
    setDetailMovie(id);
  }, [phimMoi]);

  return (
    <>
      {phimMoiPending === true && detailMoviePending === true ? (
        <Loading />
      ) : (
        <div>
          {detailMovie.movie ? (
            <div
              className={`w-full h-[100vh] lg:mt-0 bg-style-custom transition-all duration-500 ease-in-out`}
              style={{
                background: `url(${detailMovie.movie.thumb_url})`,
              }}
            >
              <div className="w-full h-full bg-custom-radial ">
                <div className="h-full max-w-[1280px] mx-auto py-[100px] md:flex md:items-center">
                  <div className="w-full md:w-[50%] lg:w-[60%] h-full px-3 flex flex-col justify-center">
                    <CaroucelContent />
                  </div>
                  <div className="d-none md:w-[50%] lg:w-[40%] h-full text-white md:flex md:items-center relative ">
                    <div className="bg-[#0c0c0cd0] h-[350px] md:w-full lg:w-[375px] p-7 pe-0 flex flex-col justify-between absolute right-0 rounded-lg ">
                      <Carousel
                        afterChange={handleAfterChange}
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlay={true}
                        autoPlaySpeed={10000}
                        centerMode={true}
                        className="h-[100%]"
                        containerClass="container-padding-bottom"
                        customButtonGroup={<CustomButtonGroupAsArrows />}
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={true}
                        itemClass="caroucel-banner-custome"
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside
                        renderDotsOutside={false}
                        responsive={responsive}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass="h-[100%] py-2"
                        slidesToSlide={1}
                        swipeable
                      >
                        {phimMoi.items &&
                          phimMoi.items?.map((item, index) => (
                            <CaroucelItem key={index} item={item} />
                          ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      )}
    </>
  );
};

export default Caroucel;
