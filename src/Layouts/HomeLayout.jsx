import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
