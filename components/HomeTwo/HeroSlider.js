import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="home-slider home-slider-two"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-two/IMG-3874c.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      <img src="/images/about-shape1.png" alt="Shape" />
                    </div>
                    <h1>India’s leading skin and hair
                      clinic founded by AIIMS dermatologist</h1>
                    <p>
                    Your Path to Healthy Skin and Natural Hair Restoration
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-two/IMG-3882c.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      <img src="/images/about-shape1.png" alt="Shape" />
                    </div>
                    <h1>India’s leading skin and hair
                      clinic founded by AIIMS dermatologist</h1>
                    <p>
                    Your Path to Healthy Skin and Natural Hair Restoration
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-two/IMG-6389c.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      <img src="/images/about-shape1.png" alt="Shape" />
                    </div>
                    <h1>India’s leading skin and hair
                      clinic founded by AIIMS dermatologist</h1>
                    <p>
                    Your Path to Healthy Skin and Natural Hair Restoration
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
