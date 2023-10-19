import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="newsletter-area ptb-100">
        <div className="container">
          <div className="row newsletter-wrap align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-item">
                <h2>Get in touch</h2>
                <p>
                  Share your mobile number and we'll contact you.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-item">
                <div className="newsletter-form">
                  <form className="newsletter-form">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Your Number"
                      name="EMAIL"
                      required
                    />

                    <button className="btn newsletter-btn" type="submit">
                      Share
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
