import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Hair Transplant in Delhi",
        p1: "It has been often mentioned that the ‘First impression is the last impression!’ In the case of a human body, the first thing that is noticed by anyone is the face. However, given the stressful times and deteriorating lifestyle, your hairline might not be what and how you like. You need not worry about the same, since you can easily opt for a hair transplant in Delhi. Hair transplant is a long-lasting solution for your hair loss issues. Dermaiims Clinic in Delhi provides the best facility and treatments. You can visit us and get the best hair transplant in Delhi.",
        p3: "Though Hair Transplant is considered to be a safe and result oriented procedure, we encourage you to check the credentials of our clinic, meet the doctor, and get answers to your queries and concerns. When you visit us, our experts at the clinic will analyze your scalp and hair quality and advise you to get the optimum solution related to hair transplant in Delhi. We assure you that the treatments administered at Dermaiims Clinic are 100 percent safe.",
        image: "/images/hair/img5.jpg",
        p2: "Use of Advanced Technology: Dermaiims Clinic uses the latest technology in the field of hair treatment domain. State of the art tools, equipment, infrastructure and professionally qualified doctor make us the best in the Hair Transplant industry.Availability of Specialists: The customers visiting the clinic for hair transplant and other treatment have different issues and levels of complications such as different grades of hair fall or hair thinning. Each of these issues requires personalized attention. Our hair transplant expert is easy to approach and give a patient hearing to understand and solve the problems of each individual patient.Patient Safety is the Priority: Patients are the customers of any hair transplant clinic and therefore, their safety is of the utmost priority for us. We ensure safe procedure with minimum pain and absolutely no complications during or after the treatment. Further, we also provide regular assessments after the procedure and guide patients to take due care post-procedure to avoid any issues.Assurance of Best long term results: Long term results in case of a hair transplant treatment is assured in terms of - enhancing hair density, increasing hairline, reducing hair fall, enhancing hair growth, and more.Affordable Procedure: Everything comes at a price! True, but this price also needs to be affordable. At Dermaiims, we provide high-end procedure at affordable cost which is easy on your pocket."
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
