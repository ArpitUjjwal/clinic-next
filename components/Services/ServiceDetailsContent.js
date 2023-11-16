import React from "react"; 

const ServiceDetailsContent = ({heading, p1, p2, p3, image}) => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            {/* <img src="/images/service-details-bg.jpg" alt="Service Details" /> */}
            {/* <h2>{heading}</h2> */}
            <p>
              {p1}
            </p>
            <p>
              {p2}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left">
                <img src={image} alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <p>
                  {p3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
