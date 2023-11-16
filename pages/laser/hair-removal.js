import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Full Body Laser Treatment",
        p1: "Consider laser hair removal if you're unsatisfied with shaving, tweezing, or waxing to eliminate unwanted hair. Today, one of the most popular cosmetic operations worldwide is the best laser hair removal in Delhi. It entails shining very focused light into hair follicles. The pigment absorbs the light in the hair follicles, which results in hair removal. With highly skilled physicians and knowledgeable personnel, Skinroots provides you with modern Laser hair removal in Delhi. Our clinic has the most cutting-edge, world-class lasers, which truly distinguish us in the eyes of our clients. Our team of Dermatologists and laser therapists are highly skilled and experienced in carrying out Laser procedures. Our medical staff, which consists of a team of specialists, is committed to the security, comfort, and convenience of each patient.",
        image: "/images/laser/laser1.jpg",
        p3: "The results and sessions may vary from patient to patient as there are many factors which we consider before committing results of laser hair removal. For example hormonal imbalances, the colour of skin, and body hair thickness. While focusing on the philosophies of integrity and safety, we are committed to giving you the best results we can. Our main priority is making sure each patient is at ease and confident. With the newest technology, we provide you with the most reasonable and economical processes."
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
