import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import HairServices from "./HairServices";

const ServiceDetailsContent = () => {
    return (
        <>
            <PageBanner
                pageTitle="Hair Transplant"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Hair"
                bgImage="page-title-hair"
            />

            <div className="service-details-area pb-100">
                <div className="container">
                    <div className="services-details-img">
                        <HairServices />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
