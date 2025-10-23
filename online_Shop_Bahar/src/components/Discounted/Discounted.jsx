import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { products } from "../../DummyData/Products";
import ProductCard from "../ProductCard/ProductCard";
import "swiper/css";
import { useRef } from "react";
import "swiper/css/navigation";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { ArrowRightShort } from "react-bootstrap-icons";
import "./Discounted.css"

function Discounted({ title, onSale }) {
  const swiperRef = useRef();
  const filteredProducts = onSale ? products.filter((p) => p.onSale) : products;
  return (
    <div className="product-carousel ">
      <div className="title-container">
        <div className="title">
          <p>{title}</p>
        </div>
      </div>
      <div className="products-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
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
        <div className="nav-buttons">
          <button
            className="button-next"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowRightShort size={40}></ArrowRightShort>
          </button>
          <button
            className="button-prev"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowLeftShort size={40}></ArrowLeftShort>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Discounted;
