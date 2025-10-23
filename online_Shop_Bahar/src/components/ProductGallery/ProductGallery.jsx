import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductGallery({ images }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt={`product-${i}`} className="img-fluid rounded" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
