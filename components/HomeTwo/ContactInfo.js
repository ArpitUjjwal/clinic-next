import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="emergency-area">
        <div className="container">
          <div className="row justify-content-center emergency-bg">
            <div className="col-sm-6 col-lg-4">
              <div className="emergency-item">
                <i className="icofont-ui-call"></i>
                <div className="emergency-inner">
                  <h3>Call Us</h3>
                  <p>+011 4509 1986</p>
                  <p>+91 8447 400 400</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="emergency-item">
                <i className="icofont-location-pin"></i>
                <div className="emergency-inner">
                  <h3>Location</h3>
                  <p>B-4/1, Ground floor, Safdarjung Enclave, New Delhi- 110029</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="emergency-item">
                <i className="icofont-email"></i>
                <div className="emergency-inner">
                  <h3>Mail</h3>
                  <p>dermaiimsclinic@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
