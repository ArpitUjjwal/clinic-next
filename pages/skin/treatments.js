import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import SkinServices from "./SkinServices";

const ServiceDetailsContent = () => {
    return (
        <>
            <PageBanner
                pageTitle="Skin Treatment"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Skin"
                bgImage="page-title-skin"
            />
            <div className="service-details-area pb-100">
                <div className="container">
                    <div className="services-details-img">
                        <SkinServices/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
