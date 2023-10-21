import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:dermaiimsclinic@gmail.com">dermaiimsclinic@gmail.com</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+01145091986">Call: +011 4509 1986</a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      B-4/1, Ground floor, Safdarjung Enclave, New Delhi- 110029
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <Link href="/hair">Hair</Link>
                    </li>
                    <li>
                      <Link href="/skin">Skin</Link>
                    </li>
                    <li>
                      <Link href="/laser">Laser</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-feedback">
                  <h3>Feedback</h3>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="your_message"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-left">
                      <button type="submit" className="btn feedback-btn">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "}
              <a href="https://arpitujjwal.web.app/" target="_blank">
                Arpit Ujjwal
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
