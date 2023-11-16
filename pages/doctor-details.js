import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AppointmentFormTwo from "../components/Common/AppointmentFormTwo";
import Footer from "../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <PageBanner
        pageTitle="Dr. Ramesh Pratap"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctor Details"
        bgImage="page-title-five"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/ramesh.jpeg" alt="Doctor" />

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call : +011 4509 1986
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      dermaiimsclinic@gmail.com
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      B-4/1, Ground floor, Safdarjung Enclave, New Delhi- 110029
                    </li>
                  </ul>
                </div>

                {/* <div className="doctor-details-work">
                  <h3>Working hours</h3>
                  <div className="appointment-item-two-right">
                    <div className="appointment-item-content">
                      <ul>
                        <li>
                          Monday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Tuesday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Wednesday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Sunday <span>9:00 AM - 8:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>Dr. Ramesh Pratap</h3>
                    <p>MBBS (AIIMS, NEW DELHI), MD (DERMATOLOGY, VENEREOLOGY & LEPROSY) AIIMS, Ex SR AIIMS, USMLE STEP 1 (USA), CERTIFIED BY ALLERGAN FOR BOTOX TOXIN, CERTIFIED BY RESTYLINE FOR FILLER INJECTION, CERTIFIED BY APTOS FOR THREAD LIFTING, MORE THAN 10 YEARS OF EXPERIENCE IN HAIR TRANSPLANT WITH EXCEPTIONALLY NATURAL RESULTS AND IN DERMATOLOGY & AESTHETICS; </p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>

                      Dr. Ramesh Pratap is a highly accomplished and skilled medical professional with a distinguished background in dermatology, venereology, leprosy, and aesthetics. He earned his MBBS degree from the prestigious All India Institute of Medical Sciences (AIIMS) in New Delhi, showcasing a solid foundation in medical education.
                    </p>

                    <p>
                      Continuing his pursuit of excellence, Dr. Pratap further specialized in Dermatology, Venereology, and Leprosy, obtaining a MD degree from AIIMS. His dedication to advancing his medical expertise is reflected in his successful completion of the United States Medical Licensing Examination (USMLE) Step 1, demonstrating a commitment to maintaining a global standard of medical proficiency.

                    </p>

                    <p>
                      Dr. Ramesh Pratap's professional journey includes serving as a Senior Resident at AIIMS, a renowned institution that has produced some of the finest medical professionals in the world. This experience has undoubtedly contributed to his comprehensive understanding of dermatological issues and treatment modalities.
                    </p>

                    <p>
                      In addition to his academic achievements, Dr. Pratap has acquired certifications from leading aesthetic companies, such as Allergan for Botox Toxin, Restylane for filler injections, and Aptos for thread lifting. These certifications highlight his expertise in utilizing cutting-edge techniques and technologies in the field of dermatology and aesthetics.

                    </p>

                    <p>

                      With a specialization in hair transplant procedures, Dr. Pratap brings over 10 years of valuable experience to his practice. His focus on achieving exceptionally natural results sets him apart in the field of hair transplantation, a testament to his dedication to providing the highest quality of care to his patients.
                    </p>

                    <p>
                      Dr. Ramesh Pratap has established his own clinic, located at B-4/1, Ground floor, Safdarjung Enclave, New Delhi-110029. This clinic serves as a testament to his commitment to making his expertise and services accessible to the community. His clinic is not only a physical space for medical consultations but also a hub for dermatological and aesthetic solutions, catering to the diverse needs of his patients.
                    </p>

                    <p>
                      In summary, Dr. Ramesh Pratap is a distinguished medical professional with a wealth of experience, a solid educational background, and a commitment to staying at the forefront of advancements in dermatology and aesthetics. His contributions to the field, coupled with his compassionate patient care, make him a respected figure in the medical community.

                    </p>

                    <p></p>
                  </div>

                  {/* <div className="doctor-details-biography">
                    <h3>Education</h3>
                    <ul>
                      <li>
                        PHD Degree in Neurology at University of UCLan School of
                        Medicine Preston (2006)
                      </li>
                      <li>
                        Master of Neurosurgery at University of University of
                        Exeter Medical School Exeter (2002)
                      </li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Experience</h3>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
