import React, { useState } from "react";
import "../components/Delo/Delo.css";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Nagrada from "../components/Delo/Nagrada";
import Nivo from "../components/Delo/Nivo";
import Prihodek from "../components/Delo/Prihodek";
import VaseDelo from "../components/Delo/VaseDelo";

export default function Delo() {
  const [visibleDiv, setVisibleDiv] = useState("vasedelo");

  const handleButtonClick = (divName) => {
    setVisibleDiv(visibleDiv === divName ? null : divName);
  };
  return (
    <>
      <NavBar />
      <div className="delo-wrapper">
        <div className="delo-container">
          <div className="button-container">
            <button onClick={() => handleButtonClick("vasedelo")}>
              Vaše delo
            </button>
            <button onClick={() => handleButtonClick("nivo")}>Nivo</button>
            <button onClick={() => handleButtonClick("nagrada")}>
              Nagrada za vabilo
            </button>
            <button onClick={() => handleButtonClick("prihodek")}>
              Pasivni prihodek
            </button>
          </div>
          {visibleDiv === "vasedelo" && <VaseDelo />}
          {visibleDiv === "nagrada" && <Nagrada />}
          {visibleDiv === "nivo" && <Nivo />}
          {visibleDiv === "prihodek" && <Prihodek />}
        </div>
      </div>
      <Footer />
    </>
  );
}
