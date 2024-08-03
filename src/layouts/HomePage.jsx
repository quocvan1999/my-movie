import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const HomePage = () => {
  return (
    <div id="top">
      <BackToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
