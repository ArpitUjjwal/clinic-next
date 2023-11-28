import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import LaserServices from "./LaserServices";

const ServiceDetailsContent = () => {
    return (
        <>
            <PageBanner
                pageTitle="Laser"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Laser"
                bgImage="page-title-laser"
            />
            <div className="service-details-area pb-100">
                <div className="container">
                    <div className="services-details-img">
                        <LaserServices />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
