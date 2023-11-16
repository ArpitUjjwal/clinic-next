import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Cost Of hair transplant",
        p1: "Your hair changes your look and personality just like your smile improves your face value. However, your body functions based on multiple parameters including your health vitals, your lifestyle and your eating habits. The stressful lives and unhealthy lifestyles you tend to follow have led to various health issues including issues of your hair. In such a circumstance, hair transplant and other such treatments come to your rescue. ",
        p2: "Hair transplant procedures have often been belittled in the past. The reason for this primarily involves the nascent procedural techniques. However, the latest developments in the technology have helped the hair transplant experts in providing natural looking hair implants that are much more permanent as compared to the earlier treatments.",
        image: "/images/hair/img4.jpg",
        p3: "Though hair transplant costs in India have been comparatively affordable than the rest of the world, the entire procedure of hair transplanting has always been considered to be quite a costly affair due to the high demand of such treatment and limited supply of good hair transplant clinics. However, these days the cost of hair transplant in Delhi has become affordable to quite an extent, given the development in the field of technology implemented in the best hair transplant centers in Delhi."
    };

    return (
        <>
            <PageBanner
                pageTitle="Cost Of hair transplant"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Hair Treatments"
                bgImage="page-title-hair"
            />
            <ServiceDetailsContent
                heading={data.heading}
                p1={data.p1}
                p2={data.p2}
                p3={data.p3}
                image={data.image}
            />
        </>
    );
};

export default Info;
