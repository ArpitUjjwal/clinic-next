import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Lip Filler Treatment",
        p1: "Lip fillers have grown in popularity as a non-surgical cosmetic technique for improving the look of the lips. If you're thinking of getting lip fillers in Delhi, you should be aware of the elements that determine the cost of the process. The Lip fillers cost in Delhi might vary based on several factors.While the Lip fillers cost in Delhi must be considered, it is also critical to prioritise the practitioner's experience and safety and the quality of the items utilised. Selecting a decent place with competent practitioners prioritising patient safety is critical to achieving the best outcomes.A consultation with a skilled practitioner is suggested to discuss your unique goals, verify your suitability for the operation, and obtain an exact cost estimate based on your circumstances. The practitioner will analyse your lips, discuss your expectations, and offer the best treatment strategy during the consultation.",
        p2: "Expert Practitioners: Skinroots Clinic employs an expert team of highly qualified and experienced practitioners specialising in cosmetic procedures such as lip fillers. The practitioners have received considerable training and are up-to-date on the latest lip augmentation procedures and trends. They have a thorough awareness of facial aesthetics and strive for natural-looking and proportional results.",
        image: "/images/skin/filler2.jpg",
        p3: "Personalised Consultations: The clinic offers consultations to understand each patient's needs and aspirations better. During the appointment, the practitioner will examine the patient's lips, discuss their desired goal, and offer professional advice on the best lip filler alternatives. This guarantees that the treatment plan is personalised to the patient's needs and preferences.High-Quality Products: Skinroots Clinic exclusively employs high-quality lip fillers approved by regulatory agencies. These hyaluronic acid-based fillers are well-known for their safety and efficacy. The clinic obtains its goods from renowned suppliers to ensure patients receive safe and trustworthy care.Natural Results: Skinroots Clinic practitioners aspire to natural-looking outcomes that enhance the patient's attractiveness. They understand the significance of facial harmony and balance and ensure that the lip fillers complement the patient's overall facial characteristics. The objective is to provide balanced and visually acceptable outcomes that fulfil the patient's expectations."
    };

    return (
        <>
            <PageBanner
                pageTitle={data.heading}
                homePageUrl="/"
                homePageText="Home"
                activePageText="Skin Treatments"
                bgImage="page-title-skin"
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
