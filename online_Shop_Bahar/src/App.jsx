import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar_menu from "./components/Navbar_menu";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <div className="wave-container ">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="animated-wave"
        >
          <defs>
            <linearGradient id="waveGradient">
              <stop offset="0%" stopColor="#ffd8ed">
                <animate
                  attributeName="stop-color"
                  values="#ffd8ed; #f7a7e1; #ffdef6; #ffd8ed"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#f7a7e1">
                <animate
                  attributeName="stop-color"
                  values="#f7a7e1; #ffdef6; #ffd8ed; #f7a7e1"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d=" M0,120 
     C360,180 1080,60 1440,120 
     L1440,0 
     L0,0 
     Z"
          ></path>
        </svg>
      </div>

      <div className="home px-lg-4 px-2">
        {" "}
        <BrowserRouter>
          {/* Navigation */}
          <Navbar_menu />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
