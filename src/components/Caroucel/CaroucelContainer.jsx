import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetailMovieAsync } from "../../redux/apiRequests/apiRequests";

import Carousel from "react-multi-carousel";
import CaroucelItem from "../Caroucel/CaroucelItem";
import CustomButtonGroupAsArrows from "../Caroucel/CustomButtonGroupAsArrows";

const CaroucelContainer = () => {
  const dispatch = useDispatch();
  const { phimMoi, phimMoiPending } = useSelector(
    (state) => state.phimMoiReducer
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
    if (phimMoi?.items.length > 0) {
      setDetailMovie(phimMoi.items[0].slug);
    }
  }, [phimMoi]);

  return (
    <>
      {phimMoiPending === false &&
        phimMoi &&
        phimMoi?.items &&
        phimMoi?.items.length > 0 && (
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
            {phimMoi &&
              phimMoi?.items &&
              phimMoi?.items.map((item, index) => (
                <CaroucelItem key={index} item={item} />
              ))}
          </Carousel>
        )}
    </>
  );
};

export default CaroucelContainer;
