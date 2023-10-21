import React from "react";
import Link from "next/link";

const LatestBlogPost = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/">
                    <img src="/images/blog/acne-blog.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/">
                    Top 10 Tips On How To Prevent Acne Scars?
                    </Link>
                  </h3>
                  <p>
                  Acne scars are the most common; about 80 percent of people between the ages of 11 and 30 experience them, and one out of five develops...
                  </p>
                  <ul>
                    <li>
                      <Link href="/">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      {/* <i className="icofont-calendar"></i>
                      Jan 03, 2022 */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/">
                    <img src="/images/blog/underarm-blog.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/">
                    Underarm Laser Hair Removal: Procedure, Cost & More
                    </Link>
                  </h3>
                  <p>
                  Underarm hair, also known as axillary hair, begins to emerge throughout adolescence. While underarm hair is important  as it minimises...
                  </p>
                  <ul>
                    <li>
                      <Link href="/">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      {/* <i className="icofont-calendar"></i>
                      Jan 03, 2022 */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/">
                    <img src="/images/blog/dandruff-blog.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/">
                    How To Avoid Dandruff In Winters?
                    </Link>
                  </h3>
                  <p>
                  It’s winter time! The time when the cold waves hit our sensitive skin. The skin during winters often dries up, getting stretchy, irritating, and ...
                  </p>
                  <ul>
                    <li>
                      <Link href="/">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      {/* <i className="icofont-calendar"></i>
                      Jan 03, 2022 */}
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

export default LatestBlogPost;
