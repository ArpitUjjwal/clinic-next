import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Dark Circle Treatment",
        p1: "The eyes reveal a wealth of information about one's emotional and physical health. Dark under-eye circles, dark pigmentation around the eye6s and wrinkles that affect one’s appearance can be corrected with the help of a pixel laser. The pigmentation and dark circles are formed due to the lack of subcutaneous fat around the eyes, and wrinkles are also formed due to loss of skin elasticity and loss of collagen production. Aging causes the skin to lose its youthful appearance and elasticity, and it particularly affects the skin around the eyes as it is very thin in comparison to other body parts.",
        p3: "The treatment is safe for all skin tones as it creates thousands of microscopic perforations and leaves the surrounding skin intact, and thus offers rapid healing and improved complexion. This treatment also triggers a biological process, as the lasers trigger the under-eye skin repair the damage, and decrease the appearance of fine lines, wrinkles, and pigmentation.",
        image: "/images/skin/darkcircle1.jpg",
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
