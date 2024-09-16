import React from "react";
import "../components/Domov/Domov.css";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { Home1, Home2, HomeBackground } from "../index";
export default function Domov() {
  return (
    <>
      <NavBar />
      <div className="home-wrapper">
        <div className="home-container">
          <div className="home-div upper">
            <p>
              Vas zanima zaslužek od 12 do 144USD na dan in to vam bo vzelo do
              20min vašega prostega časa.{" "}
            </p>
            <img src={Home1} alt="" />
          </div>
          <div className="home-div lower">
            <p>
              Smo podjetje, ki se v glavnem osredotoča trženje proizvajalcev
              aplikacijskih produktov, merimo stopnjo prenosa in klikov in s tem
              povečujemo uvrstitev APP itd., aktivno se odzivamo na tržne
              potrebe proizvajalcev APP v različnih državah.
            </p>
            <p>
              Zagotavljanje profesionalne promocije in povratnih informacij
              uporabnikov.
            </p>
            <img src={Home2} alt="" />
          </div>
          <p>Smo globalno promocijsko podjetje </p>

          <div className="home-background">
            <img src={HomeBackground} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
