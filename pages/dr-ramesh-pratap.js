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
            <div className="col-lg-4">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/ramesh.jpeg" alt="Doctor" />

                {/* <div className="doctor-details-contact">
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
                </div> */}

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

            <div className="col-lg-8">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>Dr. Ramesh Pratap</h3>
                    <p><b>MD (Dermatology, Venereology & Leprology) AIIMS, MBBS , (AIIMS), USMLE (USA) STEP I</b></p>
                  </div>

                  <div className="doctor-details-biography">
                    <p><b>Dr. Ramesh Pratap</b> is a highly accomplished dermatologist with a distinguished academic background and over
                      <b> 10 years of extensive experience in the field of Aesthetics, Hair Tansplant, Clinical Dermatology and Dermatosurgery</b>. He completed his <b>MBBS</b> from prestigious All India Institute of Medical Sciences <b>(AIIMS)</b>, New Delhi, India showcasing his commitment to excellence in medical education. Driven by a passion for dermatology, he pursued and successfully completed his <b>MD in Dermatology, Venereology & Leprology at All India Institute of Medical Sciences </b> (AIIMS).
                    </p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Education</h3>
                    <ul>
                      <li>
                        <b>MBBS</b>: All India Institute of Medical Sciences <b>(AIIMS)</b>, New Delhi, India
                      </li>
                      <li>
                        <b>MD (Dermatology, Venereology & Leprology)</b>: All India Institute of Medical Sciences (AIIMS), India
                      </li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Professional Experience</h3>
                    <ul>
                      <li><b>Senior Residency</b> (Dermatology, Venereology & Leprology): <b>AIIMS and VMMC & Safdarjung Hospital</b></li>
                      <li><b>Junior Residency</b> (Dermatology, Venereology & Leprosy): <b>AIIMS, New Delhi</b>, India</li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Achievements</h3>
                    <ul>
                      <li>
                        <b>Topper of MD (Dermatology, Venereology & Leprosy)</b> examination
                      </li>
                      <li>USMLE (USA) Step.</li>
                      <li> Ex Chief Hair Transplant Surgeon and Senior Consultant Dermatologist at Clinic
                        Dermatech</li>
                      <li> 1st Runner-up: Dermoscopy CME & Workshop Quiz at Post Graduate Institute of</li>
                      Medical Education and Research (PGIMER), Chandigarh
                      <li> Winner of the 100-meter breaststroke swimming competition at PULSE, 2011, AIIMS</li>
                      <li> Actively involved in various extracurricular activities, including serving as the Chief
                        Sports Secretary for PULSE 2010 and as the Ex Gymkhana Secretary, Student Union 2010-2011, AIIMS.
                      </li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Memberships</h3>
                    <ul>
                      <li>Member, Indian Association of Dermatologists, Venereologists, and Leprologists <b>(IADVL)</b></li>
                      <li>Member, <b>THE AIIMSONIANS</b> (AIIMS, New Delhi)</li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Medical Expertise</h3>
                    <ul>
                      <li>
                      <b>Over 10 years of experience</b> in aesthetics procedures
                      </li>
                      <li> More than 500 successful <b>hair transplant</b> surgeries <b>(FUE)</b> with natural and outstanding
                        results</li>
                      <li> Expertise in <b>thread lift</b> procedures <b>(Aptos certified)</b></li>
                      <li> Proficient in <b>botulinum toxin</b> injections (upper face, Masseters etc) <b>(Allergan Botox
                        trained)</b></li>
                      <li> Skilled in HA (hyaluronic acid) <b>dermal filler injections</b> (midface, under-eye, jawline and
                        chin) <b>(Galderma Restylane trained)</b></li>
                      <li> Proficient in <b>facial PRP (Platelet Rich Plasma), hair PRP</b>, GFC (Growth Factor
                        Concentrate), micro-needling and<b> mesotherapy with derma-pen 4</b>.</li>
                      <li> Well-versed in dermatosurgery procedures such as <b>Acne scar surgeries, Aautologous
                        Fat Grafting</b>, vitiligo surgery,<b> scar revision, Cyst excision</b>, Mole removal, laser treatments, <b>Punch Excision Biopsy</b>, Skin tag or <b>wart removal</b> and <b>MNRF (Microneedle Radiofrequency) Morpheus 8</b>, having successfully performed more than 1000 of these surgeries and procedures.</li>
                      <li> Mastered in various laser treatments like <b>LHR (Laser Hair Reduction)</b>, QS-NDYAG laser <b>(laser tonning, carbon laser facial</b>, tattoo removal) and CO2 laser, <b>Expert in Melasma</b> treatment and hair fall treatment.</li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <p><b>Dr. Ramesh Pratap</b> is dedicated to providing the highest quality of care to his patients, combining his academic excellence, clinical expertise, and commitment to continuous learning. His contributions to research, numerous publications in international PubMed indexed journals, and active participation in conferences, workshops, and CME programs reflect his passion for advancing the field of dermatology.
                    </p>
                  </div>
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
