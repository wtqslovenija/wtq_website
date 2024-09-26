// delo.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../components/Delo/Delo.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Nagrada from "../components/Delo/Nagrada";
import Nivo from "../components/Delo/Nivo";
import Prihodek from "../components/Delo/Prihodek";
import VaseDelo from "../components/Delo/VaseDelo";

import DeloIcon from "../icons/briefcase.png";
import MedalIcon from "../icons/first-medal.png";
import LevelIcon from "../icons/trophy.png";
import PasiveIcon from "../icons/money-income.png";

export default function Delo() {
  const location = useLocation();
  const initialSection = location.state?.section || "vasedelo"; // Read the section from state
  const [visibleDiv, setVisibleDiv] = useState(initialSection);

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
              <img src={DeloIcon} alt="" />
            </button>
            <button onClick={() => handleButtonClick("nivo")}>
              Nivo
              <img src={MedalIcon} alt="" />
            </button>
            <button onClick={() => handleButtonClick("nagrada")}>
              Nagrada za vabilo
              <img src={LevelIcon} alt="" />
            </button>
            <button onClick={() => handleButtonClick("prihodek")}>
              Pasivni prihodek
              <img src={PasiveIcon} alt="" />
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
