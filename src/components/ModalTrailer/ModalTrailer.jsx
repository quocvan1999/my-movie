import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { getYouTubeVideoId } from "../../assets/js/method/method";

const ModalTrailer = ({ modalIsOpen, toggleModal, trailerKey }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "800px",
      height: "auto",
      padding: "0",
    },
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="video-responsive">
        <YouTube
          videoId={trailerKey && getYouTubeVideoId(trailerKey)}
          opts={opts}
        />
      </div>
    </Modal>
  );
};

export default ModalTrailer;
