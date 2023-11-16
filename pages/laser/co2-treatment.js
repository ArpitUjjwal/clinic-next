import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Co2 Laser Treatment",
        p1: "CO2 laser treatment is a popular and successful skin rejuvenation process that treats wrinkles, fine lines, scars, and uneven skin texture. It's critical to understand the CO2 laser treatment Cost in Delhi.The CO2 laser treatment Cost in Delhi may vary depending on the type of CO2 laser technology employed. Traditional CO2 lasers and fractional CO2 lasers are available, with fractional lasers being the more popular option due to their ability to give precise and targeted outcomes while minimising downtime and adverse effects.",
        p2: "CO2 Laser Technology: There are two kinds of CO2 lasers available: standard CO2 lasers and fractional CO2 lasers. Because of their capacity to offer precise and focused outcomes while minimising downtime and adverse effects, fractional CO2 lasers are becoming increasingly popular. The type of laser technology utilised can influence treatment costs.Additional Services or Pre/Post-Treatment Care: Some clinics may offer extra services or pre/post-treatment care in their package, affecting the overall cost. It's critical to ask about any additional treatments or post-treatment care that could be required and if they're included in the cost estimate.",
        image: "/images/laser/laser6.jpg",
        p3: "Dermaiims Clinic is dedicated to satisfying patients' CO2 laser treatment needs by delivering thorough and personalised service. Here's how Dermaiims Clinic maintains patient happiness and meets its unique requirements:Expert Dermatologists: Dermaiims Clinic employs a staff of skilled doctors specialising in CO2 laser treatment. These experts have considerable expertise and experience conducting laser operations and are up to speed on the most recent developments in the industry. They understand each patient's specific needs and adjust the treatment strategy appropriately.Personalised Consultations: The clinic greatly values personalised consultations to understand better each patient's issues, objectives, and medical history. The dermatologist analyses the patient's skin condition and discusses their expectations during the consultation. This enables them to develop a personalised treatment plan that fits the patient's needs and produces the best outcomes."
    };

    return (
        <>
            <PageBanner
                pageTitle={data.heading}
                homePageUrl="/"
                homePageText="Home"
                activePageText="Laser Treatments"
                bgImage="page-title-laser"
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
