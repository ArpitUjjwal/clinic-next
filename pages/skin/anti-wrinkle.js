import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Anti Wrinkle Treatment",
        p1: "The effects of time on our skin grow increasingly visible as we age. Wrinkles, fine lines, and signs of ageing can impact our self-esteem and confidence. Fortunately, innovations in cosmetic dermatology have opened the way for successful anti-ageing treatments, with Anti wrinkle injection being one of the most popular.Botulinum Toxin (Anti wrinkle injection) is a non-surgical cosmetic technique that helps minimise the appearance of face wrinkles and fine lines. It works by temporarily paralysing the underlying muscles, reducing stretching and wrinkle formation. Anti wrinkle injection treatment in Delhi is a flexible therapy that may treat various issues, such as forehead wrinkles, frown lines, and excessive sweating.",
        p2: "Delhi, India's bustling capital city, is famed for its advanced health care and world-class healthcare facilities. It is home to several well-known medical professionals and cosmetic clinics that provide Anti wrinkle injection treatments. Whether you want to smooth out wrinkles, restore facial symmetry, or seem younger, Anti wrinkle injection treatment in Delhi has a variety of alternatives to meet your unique demands.",
        image: "/images/skin/filler1.jpg",
        p3: "You must consult with a trained and experienced dermatologist or cosmetic surgeon while considering Anti wrinkle injection treatment in Delhi. They will examine your skin, discuss your desires, and offer a personalised treatment plan based on your specific facial structure and desired outcomes. Anti wrinkle injection injections are given in precise and strategic locations to obtain natural-looking outcomes while preserving facial expression. Expertise and Experience: Skinroots Clinic has a team of highly qualified and experienced dermatologists and cosmetic surgeons that specialise in Anti wrinkle injection injections. They have a thorough grasp of facial anatomy and the skill to deliver Anti wrinkle injection injections accurately and reliably."
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
