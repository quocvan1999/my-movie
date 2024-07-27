import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full z-50  text-white fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
        isScrolled === true ? "bg-[#151515]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-6">
        <div className="max-w-[150px]">
          <NavLink to="/">
            <img
              className="w-full"
              src="../../public/images/logo.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <nav className="flex items-center gap-6 font-bold text-gray-100">
          <NavLink
            className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-semibold ${({
              isActive,
            }) => (isActive ? "active" : "")}`}
            to="/"
          >
            Trang Chủ
          </NavLink>
          <NavLink
            className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-semibold ${({
              isActive,
            }) => (isActive ? "active" : "")}`}
            to="/phimbo"
          >
            Phim Bộ
          </NavLink>
          <NavLink
            className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-semibold ${({
              isActive,
            }) => (isActive ? "active" : "")}`}
            to="/phimle"
          >
            Phim Lẻ
          </NavLink>
          <NavLink
            className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-semibold ${({
              isActive,
            }) => (isActive ? "active" : "")}`}
            to="/tvshows"
          >
            TV Shows
          </NavLink>
          <NavLink
            className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-semibold ${({
              isActive,
            }) => (isActive ? "active" : "")}`}
            to="/hoathinh"
          >
            Hoạt Hình
          </NavLink>
        </nav>
        <div
          className={`flex items-center px-3 py-2 gap-3 rounded-lg  ${
            isScrolled === true ? "bg-[#191919]" : "border-b bg-transparent "
          }`}
        >
          <i className="bx bx-search cursor-pointer"></i>
          <input
            type="text"
            placeholder="Search"
            className="px-4 bg-transparent placeholder:text-white placeholder:text-[14px] border-l focus:outline-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
