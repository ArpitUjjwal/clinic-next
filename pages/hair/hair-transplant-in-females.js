import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Hair Transplant in Females",
        p1: "They say Men are from Mars and Women are from Venus. However, different they are, there are some commonalities among them. No, it is not just the commonality of being human beings and breathing alike. There is a commonality in physical parameters too. Yes! They have the same kind of heart, brain (though there is a difference in the grey cells both genders argue), limbs, and skin. They also have the same kind of hair problems including problems of hair loss and alopecia.Alopecia or hair loss in women? Does that even happen? Is it an unusual happening affecting only a handful of women? No, this is not an uncommon feature affecting only a handful of women. Quite a few females experience Female Pattern Hair Loss due to the effects of androgens in their bodies. So do women get bald just like men? Well! The Female Pattern Hair Loss is not exactly like what happens in the case of Male members because of their genetic and hormonal construction.",
        p2: "However, Female Pattern Hair Loss is easy to treat with medications and various other procedures such as Hair Transplants for women. It is important to start the treatment early for better results. Females suffering from excessive hair loss should get a consultation with expert dermatologists to check the situation. The ideal candidates for effective hair transplantations are those females who have high hair density near the occipital scalp (the scalp area at the back of the head which becomes the donor region) and excessive hair loss or thinning in the frontal scalp or the crown region. Therefore, it is better to start the hair treatment early for best results.",
        image: "/images/hair/img3.jpg",
        p3: "Dermaiims Clinic is your personalised skin and hair treatment and cares expert providing you with just the right solution for all your skin and hair-related issues. Various methods of Hair Transplant treatment such as the Follicular Unit Transplantation (FUT) and Follicular Unit Extraction (FUE) techniques are administered by the experts at Dermaiims Clinic depending on the severity of the problem and the patient’s body requirements."
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
