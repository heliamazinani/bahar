import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "swiper/css";
import "swiper/css/navigation";

import S1 from "../assets/images/Slider/Slider1.jpg";
import S2 from "../assets/images/Slider/Slider2.jpg";
import S3 from "../assets/images/Slider/Slider3.jpg";

function Discounted() {
      const slides = [S1, S2, S3,S1,S2,S3];
  return (
    <div className="">
      <h3> تخفیف</h3>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2, // small phones
          },
          576: {
            slidesPerView: 2, // sm (Bootstrap)
          },
          768: {
            slidesPerView: 3, // md
          },
          992: {
            slidesPerView: 4, // lg and up
          },
        }}
      >
        {slides.map((bgImage, index) => (
          <SwiperSlide key={index}>
            <Card>
              <Card.Img variant="top" src={bgImage} />
              <Card.Body>
                <Card.Title className= "card-title">Card Title</Card.Title>
                <Card.Text className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Discounted;
