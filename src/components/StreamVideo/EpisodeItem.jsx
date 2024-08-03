import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoPlaying } from "../../redux/reducers/videoPlayingReducer";

const EpisodeItem = ({ episode }) => {
  const { videoPlaying } = useSelector((state) => state.videoPlayingReducer);
  const dispatch = useDispatch();

  const handleChangeEpisode = (movie) => {
    const action = setVideoPlaying(movie);
    dispatch(action);
  };

  return (
    <>
      {videoPlaying ? (
        <button
          onClick={() => {
            handleChangeEpisode(episode);
          }}
          className={`text-white font-medium mx-2 text-center py-[6px] px-6 rounded-lg cursor-pointer ${
            videoPlaying.slug === episode.slug ? "bg-[#E40813]" : "bg-[#202020]"
          }`}
        >
          {episode.name}
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default EpisodeItem;
