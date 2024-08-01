import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getNewMovieAsync } from "../../redux/apiRequests/apiRequests";

import CustomButtonGroupAsArrows from "./CustomButtonGroupAsArrows";
import CaroucelItem from "./CaroucelItem";
import CaroucelContent from "./CaroucelContent";
import { useDispatch, useSelector } from "react-redux";

const Caroucel = () => {
  const dispatch = useDispatch();
  const { newMovie } = useSelector((state) => state.newMovieReducer);

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

  const items = [
    { id: 1, title: "Slide 1", img: "../../../public/images/movie/65.jpg" },
    { id: 2, title: "Slide 2", img: "../../../public/images/movie/bg-65.jpeg" },
    {
      id: 3,
      title: "Slide 3",
      img: "../../../public/images/movie/bg-little-mermaid.jpg",
    },
    {
      id: 4,
      title: "Slide 4",
      img: "../../../public/images/movie/bg-the-black-demon.jpeg",
    },
    {
      id: 5,
      title: "Slide 5",
      img: "../../../public/images/movie/bg-the-covenant.jpeg",
    },
    {
      id: 6,
      title: "Slide 5",
      img: "../../../public/images/movie/bg-the-tank.jpeg",
    },
    {
      id: 7,
      title: "Slide 5",
      img: "../../../public/images/movie/the-black-demon.jpg",
    },
    {
      id: 8,
      title: "Slide 5",
      img: "../../../public/images/movie/the-covenant.jpg",
    },
    {
      id: 9,
      title: "Slide 5",
      img: "../../../public/images/movie/the-little-mermaid.jpeg",
    },
    {
      id: 10,
      title: "Slide 5",
      img: "../../../public/images/movie/the-tank.jpeg",
    },
  ];

  const getNewMovie = async () => {
    const action = getNewMovieAsync;
    dispatch(action);
  };

  useEffect(() => {
    getNewMovie();
  }, []);

  return (
    <div className="w-full h-[100vh] lg:mt-0 bg-[url(../../../../../public/images/ott1.webp)] bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full bg-custom-radial ">
        <div className="h-full max-w-[1280px] mx-auto py-[100px] md:flex md:items-center">
          <div className="w-full md:w-[50%] lg:w-[60%] h-full px-3 flex flex-col justify-center">
            <CaroucelContent />
          </div>
          <div className="d-none md:w-[50%] lg:w-[40%] h-full text-white md:flex md:items-center relative ">
            <div className="bg-[#0c0c0cd0] h-[350px] md:w-full lg:w-[375px] p-7 pe-0 flex flex-col justify-between absolute right-0 rounded-lg ">
              <Carousel
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
                {items.map((item, index) => (
                  <CaroucelItem key={index} item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caroucel;
