import React from "react";
import PageBanner from "../../components/Common/PageBanner";

const ServiceDetailsContent = () => {
    return (
        <>
            <PageBanner
                pageTitle="Laser"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Laser"
                bgImage="page-title-laser"
            />
            <div className="service-details-area ptb-100">
                <div className="container">
                    <div className="services-details-img">
                        <h2>Our Hospital Always Provide Good Services</h2>
                        <p>
                            Laser treatment at Dermaiims offers advanced solutions for various skin and hair concerns. Our state-of-the-art laser technologies are carefully selected to provide safe and effective treatments for our patients. Whether you're seeking to address unwanted hair, skin blemishes, or signs of aging, our laser procedures can help you achieve your desired results.
                        </p>

                        <p>
                            Our expert team of dermatologists and laser specialists ensures that each laser treatment is tailored to your specific needs. We understand that every patient is unique, and we take the time to assess your concerns and develop a personalized treatment plan. With our patient-first approach, your well-being and safety are our top priorities.
                        </p>

                        <p>
                            Dermaiims takes pride in staying at the forefront of laser technology. We offer a wide range of laser treatments, including hair removal, skin rejuvenation, and scar reduction. Our advanced lasers are designed to deliver effective results while minimizing discomfort and downtime, so you can quickly get back to your daily routine.
                        </p>

                        <p>
                            When you choose Dermaiims for laser treatment, you're choosing a commitment to excellence. Our team is dedicated to providing the best care possible, ensuring that you achieve the desired outcomes for your skin and hair. Trust in Dermaiims for safe, efficient, and customized laser treatments that can transform your appearance and boost your self-confidence.
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
