import React from "react";
import Link from "next/link";

const OurDoctors = () => {
  return (
    <>
      <div className="doctors-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctor</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <Link href="/doctor-details">
                <div className="doctor-item">
                  <div className="doctor-top">
                    <img src="/images/ramesh.jpeg" alt="Doctor" />
                    {/* <Link href="/doctor-details">Know More</Link> */}
                  </div>
                  <div className="doctor-bottom">
                    <h3>
                      Dr. Ramesh Pratap
                    </h3>
                    <span>MBBS, MD <i>(DERMATOLOGY, VENEREOLOGY & LEPROSY)</i> (AIIMS)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
