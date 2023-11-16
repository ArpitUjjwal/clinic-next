import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Stretch Marks Treatment",
        p1: "Stretch marks, also known as striae in dermatology, are a type of skin scar that often resembles thin lines and ridges, occasionally even seeming nearly like indentations. Initially, they are frequently crimson or purple before fading over time to a silvery-white hue. The areas where they often develop include the breasts, upper arms, upper arms, buttocks, and thighs. Obesity and pregnancy are typically linked with stretch marks.Stretch marks can vary in severity and size between people depending on genetic predisposition and skin-healing capacity. Both sexes are impacted, however women are somewhat more affected than men. Stretch marks develop as a result of the collagen and elastin fibres in the skin's dermis permanently rupturing. Because of this, Stretch Mark Treatment is needed to make them disappear.",
        image: "/images/skin/skin5.jpg",
        p3: "The Stretch Mark Treatment takes 45 to 90 minutes to complete. The targeted area is made numb with topical anaesthesia so the procedure is virtually painless. After the procedure is over, the space is cleaned by the supporting personnel, and antibiotic creams are applied. The patients can go for their daily routine almost immediately.  Once the procedure is finished, follow-up is planned and post-care instructions are given."
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
