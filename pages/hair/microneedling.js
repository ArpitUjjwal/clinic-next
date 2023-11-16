import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Microneedling/Dermaroller",
        p1: "Hair loss has been a great loss for most people. Yes! This is because hair loss is just the beginning and this loss would turn into serious anxiety which would then cause worry and that would cause further hair loss! Therefore, the problem of hair loss has been considered to be a great problem for most people. Do you suffer from this problem too? If yes, stop worrying right now! Or else you would lose one more strand of hair and those strands would continue falling. So what to do? Connect with your expert Hair expert in the town – Dermaiims Clinic for the most professional solutions for your hair loss.Dermaiims Clinic has the best Hair Fall experts who study your hair profile, analyse the underlying causes of your hair fall, and try to resolve your problems in the most professional way possible. While some issues require medications and changes in dietary and lifestyle patterns, there are other cases that require professional therapies such as dermaroller treatment for hair or microneedling for hair loss.",
        p2: "Microneedling is a cosmetic procedure that has a positive impact on reducing the various signs of ageing. While the process of microneedling has been used by therapists for various skin issues, various research have found that the same process can be used to treat issues like hair loss too!Microneedling for hair loss helps in increasing the collagen production in your skin. It is a process that uses a skin roller that is fitted with small needles. These needles when rolled over your scalp causes minor skin injuries that would help in regenerating the health of your hair follicles, thus helping you increase your hair density. This treatment works best for conditions like Alopecia areata.",
        image: "/images/hair/img8.jpg",
        p3: "What is dermaroller treatment for hair? Dermaroller treatment for hair is an at-home alternative to microneedling. The process of dermaroller treatment for hair helps stimulate hair growth by working on your scalp. Dermaroller is essentially a hand held device and the roller is covered with small needles. Though the needles would not inflict much pain, tolerable discomfort is what you can expect.Should you use dermaroller treatment for hair or go for a microneedling procedure?That is not an easy answer. The dermatologist can decide on the choice of treatment only after analyzing your scalp and the severity of your hair loss issue. Therefore, connect with Dermaiims Clinic – the best hair expert for professional yet customized solutions for your hair loss!"
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
