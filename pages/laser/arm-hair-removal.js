import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Arm Hair Reduction",
        p1: "It is quite easy to shave off the hair from the arms as arms have easier access and the skin there is not much sensitive, but shaving the hair regularly is very time-consuming and hectic. Besides that, shaving can cause ingrown hair formation and can cause cuts and scarring if not done carefully. The cuts and nicks sometimes leave dark spots on the skin, making it even worse than the hair. Razor burns and skin irritation are other side effects of shaving off the hair regularly. Switching to waxing does not do much good either. Waxing is very time-consuming and even more painful, and very messy to do at home. Sometimes it can cause folliculitis, a skin condition when the hair follicles get infected with bacteria. To get rid of repeated shaving or waxing and all the other side effects, the very popular and effective method is laser treatment. ",
        image: "/images/laser/laser7.jpg",
        p3: "For hair reduction of arms or underarms, Alexandrite Laser Treatment is one option. This is a long pulse laser treatment. It is named so because the alexandrite crystal is used as a laser source. Alexandrite is as effective as Diode. This is a photothermolytic treatment in which the laser beam is absorbed by the melanin in hair follicles. It works well for fine hair. The heat destroys the hair follicle and thus stops the hair growth eventually. The treatment is virtually pain-free. In this treatment, the surrounding tissues are not harmed at all. "
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
