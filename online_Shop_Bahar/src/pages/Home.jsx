import Navbar_menu from "../components/Navbar_menu";
import Slider from "../components/Slider";
import Discounted from "../components/Discounted";
function Home(){
    return (
      <div>
        <Navbar_menu />
        <Slider></Slider>
        <Discounted></Discounted>
        <Discounted></Discounted>
      </div>
    );
}
export default Home;