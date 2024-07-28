import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const ModalTrailer = ({ modalIsOpen, toggleModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      style={{
        overlay: {
          position: "fixed",
          zIndex: 9999,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel="Example Modal"
    >
      <YouTube videoId="inIVdZSFfc0" opts={opts} />
    </Modal>
  );
};

export default ModalTrailer;
