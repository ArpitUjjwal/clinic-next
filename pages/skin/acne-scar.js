import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Acne Scar Treatment",
        p1: "Amongst the most prevalent problems today that many people deal with is acne. It is a bothersome problem that also causes acne scars. Scars from acne can be difficult to remove. They detract from a person's facial attractiveness and may lower their self-confidence. Dermaiims provides several methods for treating acne scars. Acne Scar Treatments are tailored to each patient's individual needs.",
        p2: "Typical methods for Acne Scar Treatment include:1.    Co2 fractional Laser,2.    MNRF Treatment,3.    Micro needling, 4.    Dermabrasion,5.    Chemical peel ,6.    Microdermabrasion,7.    Fillers,8.    Punch excisions - With this kind of skin surgery, each acne scar is excised, or cut out, to eradicate it. Very small Stitches might be used to close the wound.3-6 sittings are enough in this treatment.",
        image: "/images/skin/skin2.jpg",
        p3: "Other issues including pigmentation and scarring are linked to acne in addition to merely acne. Even after acne has cured, unsightly scars and markings may remain. Post-inflammatory hyperpigmentation, a relatively frequent side effect, refers to the dark areas that remain after the acne has cleared up. It is brought on by an increase in the synthesis of pigment under your skin. These may often be addressed with sophisticated lasers or chemical peels, both of which are relatively risk-free. That is why our doctors watch out for healthy skin healing to lessen pigmentation and scarring. Along with other dos and don'ts, they will provide you advice on the proper diet and other matters so you can stay clear of acne in the future."
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
