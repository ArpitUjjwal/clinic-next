import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Hair Growth Factor",
        p1: "Hair fall and hair thinning have been a whining problem for most people these days. People usually relate this issue with stressful living conditions or unhealthy eating and sleep patterns. Whatever the reason be, this impounding issue results in a serious loss of confidence. Further, if such hair loss or thinning leads to an irreparable loss such as inducing baldness, then it would be terrible! However, there is no need to panic when your personal hair care clinic – Dermaiims Clinic is here to provide you with the best solution for all your hair related issues!",
        p2: "Skinroots Clinic is your personal Hair Care centre. The clinic has the best Dermatologists and Hair experts to provide you the best consultations and guided procedures for all your hair related issues. Therefore, whether you are feeling low because of constant hair loss or have started to show patches of baldness, book your consultations with Skinroots Clinic today and solve your issues easily and safely!",
        image: "/images/hair/img7.jpg",
        p3: "Hair growth factor is the short form for Platelet Rich Plasma treatment for hair loss. The Platelet Rich Plasma Treatment for hair loss is a scientifically proven therapy for inducing natural hair growth and thus is almost a natural way to treat issues like hair loss and hair thinning.The Platelet Rich Plasma Treatment for hair loss at the Skinroots Clinic is a three step process. Your blood is taken, it is processed, and it is injected into your scalp. The Hair growth factor treatment has been used for various other issues of your body such as healing injured tendons, ligaments, and muscles for decades. However, Hair growth factor treatment for treating hair loss too has been found to be as effective as the other treatments using the same therapy.In fact, platelet rich plasma treatment for hair loss has been found to have effective results even in treating male pattern baldness. The Hair growth factor treatment is also put into use to stimulate the growth of hair after a hair transplant surgery."
    };

    return (
        <>
            <PageBanner
                pageTitle={data.heading}
                homePageUrl="/"
                homePageText="Home"
                activePageText="Hair Treatments"
                bgImage="page-title-hair"
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
