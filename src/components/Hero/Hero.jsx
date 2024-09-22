import React from "react";
import "./Hero.css";
import BackgroundImage from "../../images/background_image.jpg";
import Logo from "../../images/logo_transparent.png";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="hero-margin"></div>
      <img src={BackgroundImage} alt="" />
    </div>
  );
}
