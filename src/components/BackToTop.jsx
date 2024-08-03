import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 30 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isScrolled && (
        <div className="text-white fixed z-[1000] bottom-10 right-10">
          <a
            href="#top"
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#E40813] rounded-full"
          >
            <i className="bx bx-caret-up"></i>
          </a>
        </div>
      )}
    </>
  );
};

export default BackToTop;
