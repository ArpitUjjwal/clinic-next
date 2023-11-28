import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="welcome-area ptb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 p-0">
              <div className="welcome-item welcome-left">
                <img src="/images/IMG-3887.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="welcome-item welcome-right">
                <div className="section-title-two">
                  <span>About Us</span>
                  <h2>Best Dermatology and Hair transplant clinic in Delhi</h2>
                </div>
                <ul>
                  <li>
                    <i className="icofont-doctor-alt"></i>
                    <div className="welcome-inner">
                      <h3>Scientific approach and result-oriented</h3>
                      <p>
                        Our approach is rooted in scientific methods, ensuring that your treatments are result-oriented and effective. We prioritize your well-being and satisfaction.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-stretcher"></i>
                    <div className="welcome-inner">
                      <h3>World-class infrastructure and safety protocols</h3>
                      <p>
                        We pride ourselves on maintaining world-class infrastructure and rigorous safety protocols, providing you with the highest standards of care and comfort.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-info"></i>
                    <div className="welcome-inner">
                      <h3>Experts DERMATOLOGIST from AIIMS</h3>
                      <p>
                        Our team comprises expert dermatologists from AIIMS, ensuring you receive top-tier medical expertise and personalized care for your skin and hair concerns.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
