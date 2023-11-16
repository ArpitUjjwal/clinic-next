import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Leg Hair Reduction",
        p1: "Laser for leg hair removal is also beneficial for men as well as it reduces the chances of ingrown hairs and blemishes. This treatment makes muscle appearance more defined in men by removing dark hair from the skin.Laser hair removal is the best treatment for getting smooth and hair-free legs. It eliminates all the risks of burns, pain, itching, and razor cuts associated with traditional hair removal methods. It not only improves the looks of legs but also lasts longer than waxing, shaving, or other traditional methods. Laser leg hair removal is also a less expensive treatment compared to traditional hair removal methods in the long run.",
        p2: "Laser treatment works according to the skin type, hair color, and type of hair growth of a person. Thus, prior to beginning laser treatment hair and skin type of the person will be evaluated to determine the course of treatment. Then according to the schedule, the first session will begin. Waxing should be avoided for 6 weeks before undergoing laser treatment apart from this in-between sessions are also required. Six to eight sessions of laser treatment may be required to target the hair follicle in the growth cycle to destroy it.  Laser technology used for leg hair removal concentrates light via an energy source, which is absorbed by the pigment of the hair follicle. It destroys the hair follicle and delays the regrowth of the hair follicle. Thus, one can surely get comfortable and satisfactory results after laser hair removal treatment.",
        image: "/images/laser/laser3.jpg",
        p3: "Prior to the beginning of laser leg hair removal sessions, avoid direct sun exposure for at least 2 weeks because it may damage the skin. Sunburn makes skin unsafe for laser treatment and raises the chances of side effects. Do not wax your legs before laser treatment. While undergoing treatment sessions, avoid using certain beauty products.After laser leg hair removal treatment, care for skin and avoid direct sun exposure. Avoid traditional methods of hair removal and use body products recommended by laser specialists only. Avoid using certain beauty products and creams. This may cause irritation. However, this treatment is comfortable and does not cause any side-effects. There is little or no downtime needed after laser treatment. Thus, laser hair removal is the best treatment for removing unwanted hair."
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
