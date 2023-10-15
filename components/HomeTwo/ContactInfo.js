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
                  <p>01145091986</p>
                  <p>8447400400</p>
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
                <i className="icofont-ambulance-crescent"></i>
                <div className="emergency-inner">
                  <h3>Ambulance</h3>
                  <p>+07 5554 3332 456</p>
                  <p>+07 5554 3332 294</p>
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
