import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import DepartmentsCard from "../components/Departments/DepartmentsCard";

const Departments = () => {
  return (
    <>
      <PageBanner
        pageTitle="Departments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Departments"
        bgImage="page-title-one"
      />

      <DepartmentsCard />

    </>
  );
};

export default Departments;
