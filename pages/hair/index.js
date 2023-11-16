import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import HairServices from "./HairServices";

const ServiceDetailsContent = () => {
    return (
        <>
            <PageBanner
                pageTitle="Hair Transplant"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Hair"
                bgImage="page-title-hair"
            />

            <div className="service-details-area ptb-100">
                <div className="container">
                    <div className="services-details-img">
                        <h2>Hair Transplant at Dermaiims</h2>
                        <p>
                            Hair transplant is a highly advanced and effective solution for individuals experiencing hair loss or baldness. At Dermaiims, we are dedicated to providing top-tier hair transplant procedures that can help you restore a full head of hair and regain your self-confidence.
                        </p>
                        <p>
                            Our team of skilled surgeons and dermatologists, with years of experience in the field, is committed to delivering exceptional results. We employ cutting-edge techniques and state-of-the-art technologies to ensure the success of your hair transplant procedure. Whether you're dealing with male pattern baldness, receding hairlines, or thinning hair, our customized solutions can address your specific needs.
                        </p>
                        <p>
                            Hair transplant at Dermaiims offers a permanent and natural-looking hair restoration. Our surgeons carefully assess your unique hair characteristics, hairline, and expectations to create a personalized treatment plan. We use advanced methods such as Follicular Unit Extraction (FUE) or Follicular Unit Transplantation (FUT) to harvest and transplant hair grafts. These methods provide minimal scarring and maximum results.
                        </p>
                        <p>
                            Say goodbye to the worries of hair loss and hello to a rejuvenated, confident you. Our comprehensive approach to hair transplant ensures not just a cosmetic transformation but also a boost in self-esteem. You can trust Dermaiims to provide a safe, comfortable, and successful hair transplant experience, making us the preferred destination for hair restoration in Delhi.
                        </p>
                        <HairServices />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
