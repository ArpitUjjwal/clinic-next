import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const VideoIntro = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-wrap">
        <Tabs>
          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={() => setOpen(true)}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>

                      <div className="video-content">
                        <h3>Specialized Expertise</h3>
                        <p>
                          A dermatology clinic is distinguished by its specialized expertise in diagnosing and treating disorders of the skin, hair, and nails. Dermatologists at such clinics possess in-depth knowledge of various skin conditions, including acne, eczema, psoriasis, and skin cancers. The clinic is equipped to offer a range of medical, surgical, and cosmetic dermatological services, addressing the diverse needs of patients seeking solutions for both medical and aesthetic concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>

                      <div className="video-content">
                        <h3>Advanced Technology and Treatments</h3>
                        <p>
                          Leading dermatology clinics leverage advanced technology and innovative treatments to provide the highest quality care. This may include state-of-the-art diagnostic tools for accurate assessments, laser therapies, cosmetic procedures like Botox and fillers, and cutting-edge techniques for dermatologic surgeries. The incorporation of modern technology allows dermatologists to offer effective and minimally invasive solutions, ensuring optimal outcomes for patients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>
                      <div className="video-content">
                        <h3>Comprehensive Care and Patient Education</h3>
                        <p>
                          A key aspect of a dermatology clinic is its commitment to providing comprehensive care. This involves not only treating existing skin conditions but also educating patients on preventive measures and skincare routines. Dermatologists in these clinics often take the time to discuss lifestyle factors, skincare habits, and sun protection to empower patients in maintaining healthy skin. Patient education is integral to long-term skin health, and a dermatology clinic plays a crucial role in fostering an informed and proactive approach to skincare.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabList>
            <Tab>Hospital Introduction</Tab>
            <Tab>Advanced Technology and Treatments</Tab>
            <Tab>Comprehensive Care and Patient Education</Tab>
          </TabList>
        </Tabs>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="xyz"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default VideoIntro;
