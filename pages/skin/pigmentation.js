import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Pigmentation Treatment",
        p1: "Pigmentation treatment refers to the medical and cosmetic procedures aimed at reducing or eliminating abnormal skin coloration caused by an overproduction or uneven distribution of melanin, the pigment responsible for skin, hair, and eye color. Pigmentation issues can manifest as dark spots, patches, or uneven skin tone, and they are commonly caused by various factors such as sun exposure, hormonal changes, aging, and certain medical conditions.Your complexion may be negatively impacted by pigmentation, which can take many various forms, including melasma, freckles, sunspots, pimple marks, and more. Melasma is one of the common forms of pigmentation issues. Let us briefly discuss what is Melasma treatment and it’s treatment process.",
        p2: "Melasma is a typical skin condition. You may experience blue-grey, dark brown, or light brown spots on your skin if you have melasma. They might seem as freckle-like dots or flat patches. Forearms and your face, particularly the cheekbones, upper lip, and forehead, are frequently afflicted areas. Reasons of melasma could be many it could be genetic, sun exposure or hormonal changes  Due to its frequent occurrence in expectant women, melasma is sometimes referred to as the mask of pregnancy Over time, melasma usually darkens and lightens, frequently going worse in the summer and better in the winter.",
        image: "/images/skin/skin4.jpg",
        p3: "Also at Dermaiims Clinic, You will get best Treatment for pigmented lips: Pigmentation on the lips can be caused by various factors, including sun exposure, hormonal changes, smoking, and certain medical conditions. The treatment for pigmentation on the lips aims to lighten and even out the color, providing a more natural and uniform appearance. However, it is essential to note that the lips are a delicate area, and treatments should be approached with caution to avoid any adverse effects. Dermaiims Clinic offering best pigmentation treatment in delhi."
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
