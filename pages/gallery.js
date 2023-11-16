import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import BlogGrid from "../components/Blog/BlogGrid";

const Blog = () => {
  return (
    <>
      <PageBanner
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Gallery"
        bgImage="page-title-gallery"
      />

      <BlogGrid />
    </>
  );
};

export default Blog;
