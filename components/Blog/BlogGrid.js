import React from "react";
import Link from "next/link";

const BlogGrid = () => {
  const imgs = ["/images/gallery/img1.jpeg", "/images/gallery/img2.jpg", "/images/gallery/img3.jpg", "/images/gallery/img4.jpg", "/images/gallery/img5.jpg"]
  return (
    <>
      <div className="blog-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {imgs.map((img) => {
              return (
                <div className="col-md-6 col-lg-4">
                  <div className="blog-item">
                    <div className="blog-top">
                      <img src={img} alt="Blog" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
