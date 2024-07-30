import React from "react";

const StreamContent = () => {
  return (
    <div className="flex flex-col lg:flex-row px-3">
      <div className="w-full lg:w-[50%]">
        <div className="flex items-end gap-2">
          <h1 className="text-3xl">The Hunter</h1>
          <p className="italic">(The hunter)</p>
        </div>
        <div className="flex flex-wrap gap-3 text-[14px] leading-[14px] text-white items-center font-medium mt-2">
          <div className="px-2 py-1 rounded-md bg-[#E40813]">FHD</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">1hr:58min</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">2024</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">Vietsub</div>
          <div className="px-2 py-1 rounded-md bg-[#E40813]">Việt Nam</div>
        </div>
        <p className="text-white text-[14px] mt-6">
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
      <div className="w-full lg:w-[50%] text-[14px] mt-5">
        <p>
          <span className="font-bold">Thể loại:</span> Viễn Tưởng, Thần Thoại,
          Phiêu Lưu
        </p>
        <p>
          <span className="font-bold">Đạo diễn:</span>: A
        </p>
        <p>
          <span className="font-bold">Diễn viên:</span> Chang Rongshan, Nianru
          Shen, 劉朙月, Ye Zhiqiu, Sheng Feng, 杨天翔, Yeqiao Yan, Guo Haoran,
          Xin Teng, 閻麼麼, Yuntu Cao, Cheng Xue
        </p>
      </div>
    </div>
  );
};

export default StreamContent;
