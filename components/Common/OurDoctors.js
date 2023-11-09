import React from "react";
import Link from "next/link";

const OurDoctors = () => {
  return (
    <>
      <div className="doctors-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctors</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/ramesh.jpeg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Ramesh Pratap</Link>
                  </h3>
                  <span>MBBS, MD <i>(DERMATOLOGY, VENEREOLOGY & LEPROSY)</i> (AIIMS)</span>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor2.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Rupesh Pratap</Link>
                  </h3>
                  <span>MBBS (AIIMS)</span>
                </div>
              </div>
            </div> */}

          </div>

          <div className="doctor-btn">
            <Link href="/doctor-details">See All</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
