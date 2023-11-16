import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Scar Treatment",
        p1: "Laser for scar treatment reduces the appearance of scars. It uses focused light therapy to either remove the outer layer of the skin’s surface or stimulate the production of new skin cells to cover damaged skin cells. Laser treatment for scars can reduce the appearance of warts, skin wrinkles, age spots, scars, and keloids. Other names for laser therapy include laser skin resurfacing and laser scar correction. This procedure requires a topical anaesthetic to numb the skin. Laser treatment for scars is an outpatient procedure. It should only be performed by a certified dermatologist.",
        p2: "Advanced technologies like CO2 laser resurfacing work wonders for scar treatment. In this treatment, laser light pulses are used. The laser beams penetrate the surface of the skin and gets absorbed by the water in the skin cells. During this procedure, the superficial layer or the epidermis gets vaporized. The middle layer or the dermis gets heated up which stimulate new collagen fiber growth. As healing in the area begins, new smoother, firmer, and younger looking skin replaces the old layers.At Dermaiims Clinic, the dermatologist or the cosmetic surgeon is highly experienced and expert in the procedure. Specific skin areas are targeted with utmost precision, so that the nearby skin is not affected by the treatment. Ice pack is recommended after the treatment to prevent swelling. A nonstick dressing and antibacterial ointment is applied on the treated skin.",
        image: "/images/laser/laser5.jpg",
        p3: "The team of Dermaiims is dedicated in providing you the best results possible while centering around philosophy of integrity and safety. Our primary focus is ensuring that every patient feels comfortable and confident. We offer you most affordable and cost-effective procedures with latest technology. To know the cost of the Laser for scar Treatment, kindly request a consultation. We will be there to offer you full explanations regarding your queries."
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
