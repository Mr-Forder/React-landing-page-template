import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  //sidebar toggle func
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} samePageLink={true} />
      <InfoSection {...homeObjTwo} samePageLink={true} />
      <ServicesSection />
      <InfoSection {...homeObjThree} samePageLink={true} />

      <Footer />
    </>
  );
};

export default Home;
