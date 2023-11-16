import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import SkinServices from "./SkinServices";

const ServiceDetailsContent = () => {
    return (
        <>
            <PageBanner
                pageTitle="Skin Treatment"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Skin"
                bgImage="page-title-skin"
            />
            <div className="service-details-area ptb-100">
                <div className="container">
                    <div className="services-details-img">
                        <h2>Skin Treatment at Dermaiims</h2>
                        <p>
                            Achieving healthy, radiant skin is within your reach at Dermaiims. Our comprehensive skin treatment services are designed to address a wide range of skin concerns and conditions. Whether you're dealing with acne, pigmentation issues, aging signs, or any other skin problem, our team of skilled dermatologists is here to help you regain your skin's natural beauty.
                        </p>

                        <p>
                            At Dermaiims, we take a personalized approach to skin care. Our experts understand that each individual's skin is unique, and we tailor our treatments to suit your specific needs. From the latest aesthetic lasers to innovative skincare regimens, we offer a wide array of options to rejuvenate and revitalize your skin.
                        </p>

                        <p>
                            We pride ourselves on utilizing cutting-edge technology and proven methods to ensure that you receive top-quality skin treatments. Our dermatologists are well-trained in diagnosing and treating even the most challenging skin conditions. We're committed to providing you with a safe and comfortable experience while achieving the results you desire.
                        </p>

                        <p>
                            Your skin's health and appearance matter to us, and our patient-centric approach ensures that you'll receive the best possible care. Whether you're looking to enhance your skin's texture, reduce blemishes, or simply maintain its youthful glow, Dermaiims is your trusted partner on the journey to healthier, more beautiful skin.
                        </p>
                        <SkinServices/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
