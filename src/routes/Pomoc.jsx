import React from "react";
import "../components/Pomoc/Pomoc.css";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import BinanceSetup from "../videos/wtq_binance_setup.mp4";

export default function Pomoc() {
  return (
    <>
      <NavBar />
      <div className="pomoc-wrapper">
        <h1>POMOC</h1>
        <div className="pomoc-container">
          <ul>
            <li>Kako izvesti polnjenje WTQ računa(RECHARGE),</li>
            <li>Kako izvesti prenos sredstev(WITDROW) iz WTQ računa,</li>
            <li>Kako poslati poker nagrade,</li>
            <li>Kako prenesti sredstva iz digitalne denarnice na REVOLUT,</li>
            <li>Kaj je REVOLUT,</li>
            <li>Kako izvesti naloge in kam jih poslati,</li>
            <li>Kje najdem zadnje akcije.</li>
          </ul>
          <video width="200px" height="auto" controls>
            <source src={BinanceSetup} type="video/mp4" />
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
}
