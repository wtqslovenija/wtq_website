import React from "react";
import "../components/Domov/Domov.css";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { Home1, Home2, HomeBackground } from "../index";
import Buttons from "../components/Domov/Buttons";

import Profit from "../icons/profits.png";
import Office from "../icons/office-building.png";
import Profile from "../icons/profile.png";
import Global from "../icons/international.png";
export default function Domov() {
  return (
    <>
      <NavBar />
      <Hero />
      <Buttons />
      <div className="home-wrapper">
        <div className="home-container">
          <div className="home-flex upper">
            <img src={Profit} alt="" />
            <div className="home-div ">
              <p>
                Vas zanima zaslužek od 12 do 144USD na dan in to vam bo vzelo do
                20min vašega prostega časa.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="home-flex lower">
          <img src={Office} alt="" />
          <div className="home-div ">
            <p>
              Smo podjetje, ki se v glavnem osredotoča na trženje proizvajalcev
              aplikacijskih produktov, merimo stopnjo prenosa in klikov ter s
              tem povečujemo uvrstitev APP itd., aktivno se odzivamo na tržne
              potrebe proizvajalcev APP v različnih državah.
            </p>
          </div>
        </div>
        <div className="home-flex upper">
          <img src={Profile} alt="" />
          <div className="home-div ">
            <p>
              Zagotavljamo profesionalne promocije in povratne informacije
              uporabnikov.
            </p>
          </div>
        </div>
        <div className="home-flex lower">
          <img src={Global} alt="" />
          <div className="home-div ">
            <p>Smo globalno promocijsko podjetje.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
