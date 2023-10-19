import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import AppointmentForm from "../components/Appointment/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Appointment"
        bgImage="page-title-one"
      />

      <AppointmentForm />
    </>
  );
};

export default Appointment;
