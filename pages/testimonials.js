import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import OurExpertise from "../components/HomeTwo/OurExpertise";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import OurDoctors from "../components/Common/OurDoctors";
import Footer from "../components/_App/Footer";

const Testimonials = () => {
  return (
    <>
      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        bgImage="page-title-one"
      />

      <div className="pt-100">
        <OurExpertise />
      </div>

      <TestimonialSlider />

      <OurDoctors />
    </>
  );
};

export default Testimonials;
