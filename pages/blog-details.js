import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import LatestBlogPost from "../components/Blog/LatestBlogPost";
import Blog1 from "../components/Blog/Blog1";

const BlogList = ({ blog }) => {
  switch (blog) {
    case 1: return <Blog1 />
    default: return null;
  }
}

const BlogDetails = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImage="page-title-four"
      />

      <BlogList blog={1}/>

      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default BlogDetails;
