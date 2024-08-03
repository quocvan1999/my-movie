import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  getNewMovieAsync,
  getDetailMovieAsync,
} from "../../redux/apiRequests/apiRequests";

import CustomButtonGroupAsArrows from "./CustomButtonGroupAsArrows";
import CaroucelItem from "./CaroucelItem";
import CaroucelContent from "./CaroucelContent";
import Loading from "../Loading";

import { useDispatch, useSelector } from "react-redux";

const Caroucel = () => {
  const dispatch = useDispatch();
  const { newMovie, newMoviePending } = useSelector(
    (state) => state.newMovieReducer
  );
  const { detailMovie, detailMoviePending } = useSelector(
    (state) => state.detailMovieReducer
  );

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

  const handleAfterChange = (previousSlide, { currentSlide }) => {
    let index = 0;
    currentSlide - 2 > newMovie.length - 1
      ? (index = 0)
      : currentSlide - 2 === -1
      ? (index = newMovie.length - 1)
      : currentSlide - 2 === -2
      ? (index = newMovie.length - 2)
      : (index = currentSlide - 2);

    getDetailMovie(newMovie[index].slug);
  };

  const getNewMovie = async () => {
    const action = getNewMovieAsync;
    dispatch(action);
  };

  const getDetailMovie = async (id) => {
    const action = getDetailMovieAsync(id);
    dispatch(action);
  };

  useEffect(() => {
    getNewMovie();
  }, []);

  useEffect(() => {
    if (newMovie.length > 0) {
      const movieId = newMovie[0].slug;
      getDetailMovie(movieId);
    }
  }, [newMovie]);

  return (
    <>
      {newMoviePending && detailMoviePending ? (
        <Loading />
      ) : (
        <div
          className={`w-full h-[100vh] lg:mt-0 bg-cover bg-no-repeat bg-center`}
          style={{
            background: `url(${detailMovie && detailMovie.thumb_url})`,
          }}
        >
          <div className="w-full h-full bg-custom-radial ">
            <div className="h-full max-w-[1280px] mx-auto py-[100px] md:flex md:items-center">
              <div className="w-full md:w-[50%] lg:w-[60%] h-full px-3 flex flex-col justify-center">
                <CaroucelContent detailMovie={detailMovie} />
              </div>
              <div className="d-none md:w-[50%] lg:w-[40%] h-full text-white md:flex md:items-center relative ">
                <div className="bg-[#0c0c0cd0] h-[350px] md:w-full lg:w-[375px] p-7 pe-0 flex flex-col justify-between absolute right-0 rounded-lg ">
                  <Carousel
                    afterChange={handleAfterChange}
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay={false}
                    autoPlaySpeed={2000}
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
                    {newMovie &&
                      newMovie.map((item, index) => (
                        <CaroucelItem key={index} item={item} />
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Caroucel;
