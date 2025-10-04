import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Home from "./pages/Home"
function App() {

  return (
    <>
      <div className=" px-lg-5 px-2">
        {" "}
        <Home></Home>
      </div>
    </>
  );
}

export default App;
