import React from "react";

const Stats = () => {
  return (
    <>
      <div className="counter-area counter-area-two">
        <div className="container">
          <div className="row counter-bg">
            
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-people"></i>
                <h3>
                  <span className="counter">100</span>+
                </h3>
                <p>Happy Patients</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-doctor-alt"></i>
                <h3 className="counter">2</h3>
                <p>Doctors</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-badge"></i>
                <h3 className="counter">10+</h3>
                <p>Year Experience</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-patient-bed"></i>
                <h3 className="counter">1</h3>
                <p>Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
