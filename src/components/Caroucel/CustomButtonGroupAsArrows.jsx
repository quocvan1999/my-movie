import React from "react";

const CustomButtonGroupAsArrows = ({ previous, next }) => {
  return (
    <div className="custom-button-group flex gap-4 h-[10%]">
      <button
        className="w-[30px] h-[30px] border flex items-center justify-center rounded-full text-2xl"
        onClick={previous}
      >
        <i className="bx bx-chevron-left"></i>
      </button>
      <button
        className="w-[30px] h-[30px] border flex items-center justify-center rounded-full text-2xl"
        onClick={next}
      >
        <i className="bx bx-chevron-right"></i>
      </button>
    </div>
  );
};

export default CustomButtonGroupAsArrows;
