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
        <div className="pomoc-container">
          <h1>POMOC</h1>
          <p>- Kako izvesti polnjenje WTQ računa(RECHARGE),</p>
          <p>- Kako izvesti prenos sredstev(WITDROW) iz WTQ računa,</p>
          <p>- Kako poslati poker nagrade,</p>
          <p>- Koko prenesti sredstva iz digitalne denarnice na REVOLUT,</p>
          <p>- Kaj je REVOLUT,</p>
          <p>- Kako izvesti naloge in kam jih poslati,</p>
          <p>- Kje najdem zadnje akcije.</p>
          <video width="200px" height="auto" controls>
            <source src={BinanceSetup} type="video/mp4" />
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
}
