import React from "react";

const EpisodeItem = ({ episode }) => {
  return (
    <button className="bg-[#202020] text-white font-medium mx-2 text-center py-[6px] px-6 rounded-lg cursor-pointer">
      {episode.name}
    </button>
  );
};

export default EpisodeItem;
