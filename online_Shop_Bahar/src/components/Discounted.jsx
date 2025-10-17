import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { products } from "../DummyData/Products";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";

import S1 from "../assets/images/Slider/Slider1.jpg";
import S2 from "../assets/images/Slider/Slider2.jpg";
import S3 from "../assets/images/Slider/Slider3.jpg";

function Discounted(  {title , onSale}) {
  const filteredProducts = onSale ? products.filter((p) => p.onSale) : products;
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
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Discounted;
