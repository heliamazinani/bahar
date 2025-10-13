import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Basket2 } from "react-bootstrap-icons";

import "swiper/css";
import "swiper/css/navigation";

import S1 from "../assets/images/Slider/Slider1.jpg";
import S2 from "../assets/images/Slider/Slider2.jpg";
import S3 from "../assets/images/Slider/Slider3.jpg";

function Discounted(  {title , onSale}) {
  const slides = [S1, S2, S3, S1, S2, S3];
  return (
    <div className="product-carousel ">
      <div class="title-container">
        <div class="title">
          <p>{title}</p>
        </div>
      </div>
      <div className="products-container">
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
              <Card className="product-card">
                <Card.Img className="product-img" variant="top" src={bgImage} />
                {onSale && (
                  <div className="text-container">
                    <p>تخفیف</p>
                  </div>
                )}
                {/* <div className="text-container">
                  <p>تخفیف</p>
                </div> */}
                <div dir="rtl">
                  <Card.Body>
                    <Card.Title className="card-title">اسم محصول</Card.Title>
                    <Card.Text className="card-text"></Card.Text>
                    <div>
                      <Container>
                        <Row>
                          {onSale && (
                            <Col xxl={5}>
                              <div className="ha">
                                <span className="old-price">130,000</span>
                              </div>
                            </Col>
                          )}
                          <Col>
                            <span>120,000</span>
                            <span>تومان</span>
                          </Col>
                        </Row>
                        <div className="overlay"></div>
                      </Container>
                      <div className="hover-buttons">
                        <Button
                          className="buy"
                          variant="outline-dark"
                          size="sm"
                        >
                          مشاهده و خرید
                        </Button>
                        <Button className="basket">
                          <Basket2 size={50} />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Discounted;
