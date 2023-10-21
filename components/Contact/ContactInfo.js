import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="location-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center location-wrap">
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-location-pin"></i>
                <h3>Location</h3>
                <p>
                B-4/1, Ground floor, Safdarjung Enclave, <br /> New Delhi- 110029
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-message"></i>
                <h3>Email</h3>
                <p>dermaiimsclinic@gmail.com</p>
                <br/>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-call"></i>
                <h3>Call</h3>
                <p>+011 4509 1986</p>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
