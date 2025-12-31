import Slider from "../../components/Slider/Slider";
import Discounted from "../../components/Discounted/Discounted";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div>
      <Slider></Slider>
      <Discounted title={"   تخفیف دار های هفته"} onSale={true}></Discounted>
      <Discounted title={"     جدید ترین‌ها "} onSale={false}></Discounted>
    </div>
  );
}
export default Home;
