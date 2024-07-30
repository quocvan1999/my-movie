import React from "react";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#141314] w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row lg:flex-nowrap sm:flex-wrap px-3 py-6 lg:py-14 text-white">
        <div className="w-full sm:w-[calc(100%/3)] text-center lg:text-start mb-3">
          <NavLink to="/" className="flex justify-center lg:justify-start">
            <img
              className="w-[150px]"
              src="../../public/images/logo.png"
              alt="logo"
            />
          </NavLink>
          <p className="text-[14px] leading-[21px] mt-2 hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer">
            Email us: customer@streamit.com
          </p>
          <p className="text-[14px] leading-[21px] mt-1 hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer">
            COSTUMER SERVICES
          </p>
          <p className="text-[14px] leading-[21px] mt-1 hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer">
            + (480) 555-0103
          </p>
        </div>
        <div className="w-full sm:w-[calc(100%/3)] text-center lg:text-start mb-3">
          <h3 className="text-[18px] font-medium leading-[31px]">
            Quick Links
          </h3>
          <ul className="lg:mt-3">
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Pricing Plan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-[calc(100%/3)] text-center lg:text-start mb-3">
          <h3 className="text-[18px] font-medium leading-[31px]">
            Movies To Watch
          </h3>
          <ul className="lg:mt-3">
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Top Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Recommended
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Popular
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-[calc(100%/3)] text-center lg:text-start mb-3">
          <h3 className="text-[18px] font-medium leading-[31px]">
            About Company
          </h3>
          <ul className="lg:mt-3">
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 cursor-pointer"
              >
                Terms Of Use
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-[calc(100%/3)] text-center lg:text-start mb-3">
          <h3 className="text-[18px] font-medium leading-[31px]">
            Subscribe Newsletter
          </h3>
          <input
            type="text"
            placeholder="Email"
            className="bg-[#191919] placeholder:text-white w-full px-4 py-2 rounded-md focus:outline-0 lg:mt-4"
          />
          <button className="bg-[#e40813] px-5 py-3 mt-2 rounded-md hover:bg-[#b82b32] transition-all ease-in-out duration-500 text-[14px]">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto text-white flex flex-col lg:flex-row lg:gap-5 items-center lg:items-start border-t border-[#272626] px-3 py-6 lg:py-14">
        <div className="w-full lg:w-[70%]">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 leading-[21px]"
            >
              Terms Of Use
            </a>
            <a
              href="#"
              className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 leading-[21px]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500 leading-[21px]"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-[14px] hover:text-[#e40813] transition-all ease-in-out duration-500"
            >
              Watch List
            </a>
          </div>
          <p className="text-[14px] leading-[21px] mt-5 lg:mt-4">
            © 2024 <span className="text-[#e40813]">STREAMIT</span>. All Rights
            Reserved. All videos and shows on this platform are trademarks of,
            and all related images and content are the property of, Streamit
            Inc. Duplication and copy of this is strictly prohibited.
          </p>
        </div>
        <div className="w-full lg:w-[30%] mt-4 lg:mt-0">
          <p className="text-[14px] leading-[14px]">Download Streamit Apps</p>
          <div className="mt-2 lg:mt-4 flex gap-3">
            <img
              className="w-24"
              src="../../public/images/google-play.png"
              alt="gg play"
            />
            <img
              className="w-24"
              src="../../public/images/apple.png"
              alt="apple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
