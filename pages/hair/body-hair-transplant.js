import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Body Hair Transplant",
        p1: "Balance is the key element of anything. Anything in nature looks beautiful and pretty only when things are in balance. Just like sun in winter or rain amidst hot scorching summer, the fine balance of everything where and when it should be is appreciated the most.        Even in the case of natural hair, balance is required. While hair at unwanted places can cause embarrassment, hair in some prominent areas is absolutely mandatory for your beauty, look, and confidence. Yes! That is the reason why fuller eyebrows are appreciated while fuller underarms are not! However, there is a solution for all these issues.",
        p3: "Body Hair Transplant is a procedure that can help you gain hair growth where you need it the most while hair removal treatment helps you remove unwanted hair. Body Hair Transplant helps you with hairline development and hair growth in a selected area of your body such as your eyebrows or your moustache and beard (only for men though!) areas. Dermaiims Clinic is your personal hair care expert that understands your Body Hair Transplant requirements well and recommends you the best treatment and professionals for the best output!        Get heavier beard that completes your macho image with Beard Transplant.",
        image: "/images/hair/img6.jpg",
        p2: "Many people have thinner eyebrows and arches. The causes of thin eyebrow arch can vary from stress related issues, overdoing your eyebrow job, accident, or even heredity. However, Eyebrow Transplant can reverse the thinning eyebrows and help you look beautiful and confident just like you wanted to look. Eyebrow Transplant is a dermatological treatment where a donor hair patch from other parts of your body matching your original eyebrow hair is transplanted into your eyebrow region. Routine maintenance and proper care helps you have a fuller eyebrow within days of transplantation. Dermaiims Clinic near you can help you with the best eyebrow transplant."
    };

    return (
        <>
            <PageBanner
                pageTitle={data.heading}
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
