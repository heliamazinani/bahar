import Slider from "../../components/Slider/Slider";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../../../shared/components/Footer/Footer";
function Home() {
  return (
    <div>
      <Slider></Slider>
      <Carousel title={"   تخفیف دار های هفته"} onSale={true}></Carousel>
      <Carousel title={"     جدید ترین‌ها "} onSale={false}></Carousel>
    </div>
  );
}
export default Home;
