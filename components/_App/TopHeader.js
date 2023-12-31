import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <a href="tel:+07554332322">
                        <i className="icofont-ui-call"></i>
                        Call : +011 4509 1986
                      </a>
                    </li>
                    <li>
                      <a href="mailto:dermaiimsclinic@gmail.com">
                        <i className="icofont-ui-message"></i>
                         dermaiimsclinic@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="https://maps.app.goo.gl/SzAF9LeJBzeWYTWk6" target="_blank">
                      <i className="icofont-location-pin"></i>
                      B-4/1, Ground floor, Safdarjung Enclave, New Delhi- 110029
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61551930346891" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
