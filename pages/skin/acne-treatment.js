import React from "react";
import PageBanner from "../../components/Common/PageBanner";

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
                    </div>

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-details-inner-left">
                                <img src="/images/signup-bg.jpg" alt="Service" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="service-details-inner">
                                <h2>We Always Take Care of Our Patients</h2>
                                <p>
                                    At Dermaiims, our commitment to patient care is at the heart of everything we do. We understand that seeking medical treatment can be a significant decision, and we are dedicated to providing a caring and supportive environment for all our patients.
                                </p>
                                <p>
                                    We believe in providing the highest standard of quality and care, and our patients' trust and comfort are of utmost importance. Our state-of-the-art facilities, advanced technologies, and compassionate staff combine to create an environment where you can feel confident and well taken care of during your entire journey with us.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
