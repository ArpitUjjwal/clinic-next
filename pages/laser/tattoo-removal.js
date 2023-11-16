import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Tattoo Removal Treatment",
        p1: "The undesirable ink may now be securely removed from the easy reach of the Laser for tattoo removal technology. When you consult with our experts, we'll ensure minimal infection danger. We put your comfort and contentment first while providing the best care possible.Can lasers completely remove tattoos?Laser for tattoo removal erases undesired tattoos in the safest, most efficient manner. Before the tattoo is entirely erased, you might need numerous treatments. The size, age, location, and colour of the tattoo you wish to have removed will determine how many sessions you will require.",
        p2: "Lasers may erase tattoos by dispersing the pigment hues with a strong light beam. As black tattoo ink absorbs all laser wavelengths, it is the most straightforward colour to remove. Based on the pigment colour, certain lasers can only cure other hues. Benefits include a brief period of healing that lasts a few days to a few weeks. There would be no visible scars. ",
        image: "/images/laser/laser4.jpg",
        p3: "Getting Ready for Laser for tattoo removal. You must take the necessary steps to get rid of the tattoo if you want to be ready for laser removal. Other than that, getting ready won't take much work. We'll offer you a list of pre-treatment care instructions when you arrive for your initial appointment, including recommendations for drinking lots of water and sunscreen. In contrast, you shouldn't alter much of your everyday activities before your laser therapy session. Additionally, you may anticipate a lot more pleasurable tattoo removal experience than obtaining a tattoo because this procedure has no negative effects on your skin.The size of the tattoo and the number of sessions needed to completely remove the tattoo ink will impact how much the tattoo removal laser treatment will cost. After the process of Laser for tattoo removal, taking a stroll is a fantastic method to take care of your skin. Keep in mind that your immune system includes your lymphatic system. Walking improves circulation, which increases blood flow to the treated area and boosts immune system performance."
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
