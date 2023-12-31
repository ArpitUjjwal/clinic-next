import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import LaserServices from "./LaserServices";

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

            <LaserServices/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
