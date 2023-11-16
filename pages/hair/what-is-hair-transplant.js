import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "What is Hair transplant?",
        p1: "Hairfall can become a major issue that can affect your confidence and how you see yourself. With tremendous advancement in the field of cosmetic surgeries and with newer technology at your disposal, you can now get a head full of hair with hair transplantation. The intro method of hair transplantation is usually implemented to treat male pattern balding where hair follicles are removed from the “donor site” to the balding patches or the “recipient site”.Hair transplantation techniques are typically used at the leading hair transplant clinics and Skin Root Clinic is one the best names in the industry to help you with the purpose of hair transplantation.",
        p2: "The Different Indication Types Of Hair Transplant Techniques:Follicular Unit Extraction Method: One of the most popular hair transplantation techniques is the Follicular Unit Extraction or the FUE method.Direct Hair Transplantation: Direct Hair Transplantation is an advanced modification of FUE, where Graft extraction and graft implantation are done simultaneously, giving an edge in graft survival and eventually leading to better and enhanced results.Follicular Unit Transplantation: FUT or the Follicular Unit Transplantation technique entails the doctors cutting out a strip of skin with the hair follicles and tissues intact and covering up the bald patches. Robotic Hair Transplantation Method: Robotic Hair Transplantation Technique has become a favourite amongst clients thanks to the painless procedure and the maximum effectiveness post-surgery. The advanced robotic hair transplant by ARTAS robotic has revolutionized the hair transplant industry. This device is capable of creating slits and extracting graft precisely with help of artificial intelligence and 3 d cameras.  The newer models are now able to implant the grafts back into the created recipient area. Though this is the best advancement in hair transplant in the last 10 years, still robotic hair transplant is not as precise as human/manual hair transplant as of now but it will surely surpass the conventional hair transplant in precision and effectiveness by the next decade.",
        image: "/images/hair/img1.jpg",
        p3: "Benefits Of Hair Transplantation Treatment- Without balding patches and beautiful natural hair, your confidence gets a boost, and you can take care of hair fall once and for all.The techniques are non-invasive and do not require much maintenance, making the procedures cost-effective and a great investment.There are almost no risks of complications or side-effects post-treatment and it does not interfere with your lifestyle."
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
