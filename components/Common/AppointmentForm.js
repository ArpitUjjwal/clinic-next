import React from "react";

const AppointmentForm = () => {
  return (
    <>
      <div className="appointment-area ptb-100 plr-15">
        <div className="container-fluid p-0">
          <div className="appointment-item">
            <h2>Book your appointment</h2>
            <span>We will confirm your appointment within 2 hours</span>

            <div className="appointment-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man-alt-1"></i>
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-call"></i>
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Services</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Hair</option>
                            <option>Skin</option>
                            <option>Laser</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-doctor"></i>
                          <label>Timing</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                          >
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>01:00 PM</option>
                            <option>02:00 PM</option>
                            <option>03:00 PM</option>
                            <option>04:00 PM</option>
                            <option>05:00 PM</option>
                            <option>06:00 PM</option>
                            <option>07:00 PM</option>
                            <option>08:00 PM</option>
                          </select>
                        </div>
                      </div>

                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
