import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CustomButtonGroupAsArrows from "./CustomButtonGroupAsArrows";
import CaroucelItem from "./CaroucelItem";

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

const Caroucel = () => {
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

  const [itemActive, setItemActive] = useState([]);

  return (
    <div
      className="w-full h-[100vh] bg-top-center bg-no-repeat"
      style={{
        background: "url(../../../../../public/images/ott1.webp)",
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: "radial-gradient(circle, transparent, black)",
        }}
      >
        <div className="max-w-[1280px] h-full mx-auto py-[100px] flex items-center">
          <div className="w-[50%] h-full flex flex-col justify-center">
            <h1
              className="text-6xl font-extrabold text-transparent bg-clip-text bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(../../../../../public/images/texture.jpg)",
              }}
            >
              The Hunter
            </h1>
            <p className="text-gray-300 mt-3 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              quos odio maxime voluptas corporis commodi dicta expedita numquam
              aliquam quod reprehenderit, quia officiis corrupti voluptatum cum
              dolores necessitatibus.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <i className="bx bxs-star text-2xl text-yellow-400"></i>
                <i className="bx bxs-star text-2xl text-yellow-400"></i>
                <i className="bx bxs-star text-2xl text-yellow-400"></i>
                <i className="bx bxs-star text-2xl text-yellow-400"></i>
                <i className="bx bxs-star text-2xl text-yellow-400"></i>
                <span className="font-medium text-2xl text-white ml-3">
                  5.0
                </span>
              </div>
              <p className="text-[14px] text-white">1hr: 58mins</p>
              <p className="text-[14px] text-white">
                <span className="text-[#E40813]">Genres: </span>Drama
              </p>
              <p className="text-[14px] text-white">
                <span className="text-[#E40813]">Starring: </span>Olivia Foster
              </p>
            </div>
            <div className="mt-14">
              <button className="bg-[#E40813] text-white uppercase text-[14px] leading-[21px] px-5 py-3 rounded-lg font-semibold flex items-center">
                stream now <i className="bx bx-play text-[24px]"></i>
              </button>
            </div>
          </div>
          <div className="w-[50%] h-full text-white flex items-center justify-end">
            <div className="bg-[#0c0c0ce1] h-[90%] w-[70%] p-7 pe-0 flex flex-col justify-between">
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
                itemClass=""
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
