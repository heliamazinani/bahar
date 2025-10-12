import Navbar_menu from "../components/Navbar_menu";
import Slider from "../components/Slider";
import Discounted from "../components/Discounted";
import Footer from "../components/Footer";
function Home(){
    return (
      <div>
        <Navbar_menu />
        <Slider></Slider>
        <Discounted title={"   تخفیف دار های هفته"}></Discounted>
        <Discounted title={"     جدید ترین‌ها "}></Discounted>
      </div>
    );
}
export default Home;