import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const ModalTrailer = ({ modalIsOpen, toggleModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%", // Đảm bảo modal chiếm 90% chiều rộng của màn hình
      maxWidth: "800px", // Giới hạn tối đa chiều rộng
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
        <YouTube videoId="inIVdZSFfc0" opts={opts} />
      </div>
    </Modal>
  );
};

export default ModalTrailer;
