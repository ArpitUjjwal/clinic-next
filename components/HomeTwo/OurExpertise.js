import React from "react";

const OurExpertise = () => {
  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-7">
              <div className="speciality-left">
                <div className="section-title-two">
                  <span>Speciality</span>
                  <h2>Our Services</h2>
                </div>

                <div className="speciality-item">
                  <div className="row m-0">
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Hair Transplant</h3>
                        <p>
                          Restore your natural hair with our advanced hair transplant procedures. Our expert doctors at Dermaiims can help you achieve the look you desire.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Hair Fall and Hair Loss</h3>
                        <p>
                          Suffering from hair fall and hair loss? Dermaiims offers personalized solutions to address and combat these issues effectively.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Laser Treatment</h3>
                        <p>
                          Experience the benefits of cutting-edge laser treatments for various skin conditions. Our dermatologists provide safe and effective solutions.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Dermatology</h3>
                        <p>
                          Trust in our experienced dermatologists to address all your skin-related concerns. We offer comprehensive dermatological services for your well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 pr-0">
              <div className="speciality-item speciality-right">
                <img src="/images/expert-clinic-img.jpg" alt="Speciality" />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>Call Us</h3>
                  <p>+011 4509 1986</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
