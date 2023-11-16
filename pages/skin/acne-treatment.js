import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Acne Treatment",
        p1: "Acne is a condition where the tiny holes on your face known as hair follicle get blocked due to certain reasons. Sebaceous glands that are situated just under your skin can cause Acne when they become overactive and secrete excess oil. This excess oil attracts dirt and germs, thus causing a condition like acne. Some other reasons for Acne include abnormal shedding of dead skin cells of your face and proliferation of acne causing bacteria in your face area. Acne treatment in Delhi would help in controlling this condition.",
        p2: "Acne is a condition that cannot be cured but the condition can be treated successfully. Best Acne Treatment provided by Skinroots Clinic, helps in treating the acne affected area though there is no permanent cure for Acne. This is because Acne is a physiological condition and not a mere disease. Sometimes, the underlying cause of acne might be genetic and therefore finding a cure might not be easy.Lifestyle and your diet, though do not directly cause Acne, these factors can certainly exaggerate the issue, if not controlled timely. Consulting the Best Acne Treatment in Delhi would help you get the best treatment from the best skin experts. Further, the skin experts would also guide you about the diet and lifestyle you should practise to avoid the proliferation of Acne.",
        image: "/images/skin/skin1.jpg",
        p3: "There are specific combinations and drug specifications required to treat your acne and reduce its proliferation. It is advisable to book an appointment with Skinroots Clinic – the Best Acne Treatment centre in Delhi, to get the personalised advice on use of such medication for the best results!Some specialised therapies used to treat Acne include:Chemical Peeling,Steroid Injection,Light Therapy,Drainage and Extraction Methods.These are highly professional therapies that should be done under expert supervision only. Connect with Skinroots clinic today to get the best treatment and therapies today!"
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
