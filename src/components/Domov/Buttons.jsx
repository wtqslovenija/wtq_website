// buttons.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Domov.css";

import DeloIcon from "../../icons/briefcase.png";
import MedalIcon from "../../icons/first-medal.png";
import LevelIcon from "../../icons/trophy.png";
import PasiveIcon from "../../icons/money-income.png";

export default function Buttons() {
  return (
    <div className="home-button-container">
      <Link to="/delo" state={{ section: "vasedelo" }}>
        Vaše delo
        <img src={DeloIcon} alt="" />
      </Link>
      <Link to="/delo" state={{ section: "nivo" }}>
        Nivo
        <img src={MedalIcon} alt="" />
      </Link>
      <Link to="/delo" state={{ section: "nagrada" }}>
        Nagrada za vabilo
        <img src={LevelIcon} alt="" />
      </Link>
      <Link to="/delo" state={{ section: "prihodek" }}>
        Pasivni prihodek
        <img src={PasiveIcon} alt="" />
      </Link>
    </div>
  );
}
