import React, { useState } from "react";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import { NavLink } from "react-router-dom";

const DetailContent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className="max-w-[1280px] h-full mx-auto lg:py-14">
      <ModalTrailer toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
      <div className="w-full h-full flex items-start flex-col">
        <div className="w-full flex flex-col lg:flex-row lg:items-center">
          <div className="w-[250px] h-[300px] p-3 mx-auto">
            <img
              src="../../public/images/movie/bg-the-black-demon.jpeg"
              alt="..."
              className="w-full h-full block rounded-lg object-cover"
            />
          </div>
          <div className="p-3 w-full">
            <h1 className="text-3xl text-white font-medium">The Hunter</h1>
            <div className="flex gap-3 text-[14px] leading-[14px] text-white items-center font-medium mt-2">
              <div className="px-2 py-1 rounded-md bg-[#E40813]">FHD</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">1hr:58min</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">2024</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">Vietsub</div>
              <div className="px-2 py-1 rounded-md bg-[#E40813]">Việt Nam</div>
            </div>
            <div className="text-white mt-1 text-[14px]">
              <p>
                <span className="font-bold">Số tập:</span> 117
              </p>
              <p>
                <span className="font-bold">Thể loại:</span> Viễn Tưởng, Thần
                Thoại, Phiêu Lưu
              </p>
              <p>
                <span className="font-bold">Đạo diễn:</span>: A
              </p>
              <p>
                <span className="font-bold">Diễn viên:</span> Chang Rongshan,
                Nianru Shen, 劉朙月, Ye Zhiqiu, Sheng Feng, 杨天翔, Yeqiao Yan,
                Guo Haoran, Xin Teng, 閻麼麼, Yuntu Cao, Cheng Xue
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div
                className="flex items-center group cursor-pointer"
                onClick={toggleModal}
              >
                <div className="w-9 h-9 me-1 border flex items-center justify-center text-[#E40813] rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#E40813] hover:text-white">
                  <i className="bx bxs-video"></i>
                </div>
                <span className="text-white font-semibold group-hover:text-[#E40813] transition-all duration-500 ease-in-out">
                  Trailer
                </span>
              </div>
              <NavLink
                to="/streamvideo/10"
                className="flex items-center group cursor-pointer"
              >
                <div className="w-9 h-9 me-1 border flex items-center justify-center text-[#E40813] rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#E40813] hover:text-white">
                  <i className="bx bx-play text-2xl"></i>
                </div>
                <span className="text-white font-semibold group-hover:text-[#E40813] transition-all duration-500 ease-in-out">
                  Watch Now
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <p className="text-white text-[14px] p-3 italic">
          Illumination's Despicable Me 4, Gru, the beloved former supervillain
          now working as an agent for the Anti-Villain League, makes a thrilling
          comeback.Illumination's Despicable Me 4, Gru, the beloved former
          supervillain now working as an agent for the Anti-Villain League,
          makes a thrilling comeback.Illumination's Despicable Me 4, Gru, the
          beloved former supervillain now working as an agent for the
          Anti-Villain League, makes a thrilling comeback.Illumination's
          Despicable Me 4, Gru, the beloved former supervillain now working as
          an agent for the Anti-Villain League, makes a thrilling
          comeback.Illumination's Despicable Me 4, Gru, the beloved former
          supervillain now working as an agent for the Anti-Villain League,
          makes a thrilling comeback.
        </p>
      </div>
    </div>
  );
};

export default DetailContent;
