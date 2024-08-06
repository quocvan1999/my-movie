import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
  };

  const handleChangeButtonMenu = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleChangeInputSearch = (value) => {
    if (value.trim() === "") {
      navigate("/");
    } else {
      navigate(`/viewresult/search?searchValue=${value}&page=1&limit=20`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full text-white lg:fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-[2000] ${
        isScrolled ? "lg:bg-[#151515]" : ""
      }`}
    >
      <div className="max-w-[1280px] mx-auto block lg:flex justify-between items-center lg:py-3 lg:px-3">
        {/* Logo */}
        <div className="flex items-center justify-between px-3 py-4 lg:px-0 lg:py-0 bg-[#151515] lg:bg-transparent">
          {/* Logo */}
          <div className="max-w-[150px]">
            <NavLink to="/" className="cursor-pointer">
              <img
                className="w-full"
                src="../../public/images/logo.png"
                alt="logo"
              />
            </NavLink>
          </div>
          {/* BTN Menu */}
          <div className="block lg:hidden">
            <i
              className="bx bxs-grid-alt text-3xl hover:text-[#E40813]"
              onClick={handleChangeButtonMenu}
            ></i>
          </div>
        </div>
        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "d-none"
          } lg:flex flex-col lg:flex-row w-full items-center justify-between lg:justify-end gap-6 px-3 py-2 lg:px-0 lg:py-0 bg-[#000000ce] lg:bg-transparent z-20 ${
            isMenuOpen ? "fixed" : ""
          }`}
        >
          <nav className="flex flex-col lg:flex-row gap-4 items-center justify-center font-bold text-gray-100">
            <NavLink
              className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-medium ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
              to="/"
              onClick={handleChangeButtonMenu}
            >
              Trang Chủ
            </NavLink>
            <NavLink
              className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-medium ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
              to="/viewresult/phim-bo?page=1&limit=20"
              onClick={handleChangeButtonMenu}
            >
              Phim Bộ
            </NavLink>
            <NavLink
              className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-medium ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
              to="/viewresult/phim-le?page=1&limit=20"
              onClick={handleChangeButtonMenu}
            >
              Phim Lẻ
            </NavLink>
            <NavLink
              className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-medium ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
              to="/viewresult/tv-shows?page=1&limit=20"
              onClick={handleChangeButtonMenu}
            >
              TV Shows
            </NavLink>
            <NavLink
              className={`hover:text-[#E40813] transition-all duration-500 ease-in-out text-[14px] font-medium ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
              to="/viewresult/hoat-hinh?page=1&limit=20"
              onClick={handleChangeButtonMenu}
            >
              Hoạt Hình
            </NavLink>
          </nav>
          {/* Input search */}
          <div
            className={`flex items-center w-full lg:w-[30%] px-3 py-2 gap-3 rounded-lg ${
              isScrolled === true ? "bg-[#191919]" : "border-b bg-transparent "
            }`}
          >
            <i className="bx bx-search cursor-pointer"></i>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                handleChangeInputSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                handleChangeInputSearch(e.target.value);
              }}
              className="px-4 bg-transparent placeholder:text-white placeholder:text-[14px] border-l focus:outline-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
