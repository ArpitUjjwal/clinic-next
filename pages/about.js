import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import OurExpertise from "../components/HomeTwo/OurExpertise";
import Services from "../components/HomeTwo/Services";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import FunFacts from "../components/Common/FunFacts";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <>
      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImage="page-title-skin"
      />

      <AboutContent />

      <OurExpertise />

      {/* <TestimonialSlider /> */}

      <LatestBlogPost />
    </>
  );
};

export default About;
