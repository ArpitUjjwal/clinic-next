import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Hair Transplant in Males",
        p1: "They say, “Bald is the new Black” and it certainly is! Men with a bald heads can give them the hope to live with such quotes. However, receding hairline, going bald, or even experiencing heavy hair fall and hair thinning are not very positive events and certainly do not give quite much confidence to the person experiencing it! However, the situation is not a lost case and treatments such as Hair Transplants in men can certainly solve the situation and help you regain your lost confidence. Dermaiims, your personal Hair expert, helps you regain your confidence once again that too with the most natural-looking results.",
        p2: "Male Pattern Baldness is also known as Androgenetic Alopecia. Though some form of androgenetic alopecia is also observed in females, it is the most common form of hair loss and baldness among men. Among men, androgenetic alopecia has a defined pattern and the hair starts receding above both the temples. Your hairline gradually recedes to form an ‘M’ shape with time.",
        image: "/images/hair/img2.jpg",
        p3: "Of course! Medical science and its allied research have made treatment of Androgenetic Alopecia and other hair and skin-related issues possible. Hair Transplant in Males is a proven treatment to treat Alopecia. However, the decision to go ahead with Hair Transplant in Males is made only after determining the stage of baldness according to the grade of baldness pictures. Once your dermatologist confirms that the specific treatment of Hair Transplant for men would work wonders for your look, you can leave the rest to Dermaiims Clinic, your professional Hair Expert. Dermaiims Clinic assures you the best Hair Transplant in Males results and therefore you can relax once you are at Dermaiims Clinic!"
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
