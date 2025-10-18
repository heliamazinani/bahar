import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import S1 from "../assets/images/Slider/S1.png";
import S2 from "../assets/images/Slider/Slider2.jpg";
import S3 from "../assets/images/Slider/Slider3.jpg";


const Slider = () => {
  const slides = [S1,S2,S3];

  return (
    <header className="Slider slider slider-prlx o-hidden ">
      <div className="container-fluid p-0">
        <Swiper
          className="parallax-slider"
          modules={[Autoplay, Pagination, Navigation, Parallax]}
          speed={1000}
          loop={true}
          autoplay={{ delay: 4000 }}
          parallax={true}
          pagination={{ clickable: true }}

        >
          {slides.map((bgImage, index) => (
            <SwiperSlide className="Slide" key={index}>
              <div
                className="bg-img valign rounded"
                style={{
                  backgroundImage: `url(${bgImage})`,
                }}
                data-overlay-dark="7"
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default Slider;
