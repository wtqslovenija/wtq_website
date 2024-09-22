import React from "react";
import "../components/Kontakt/Kontakt.css";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Kontakt() {
  return (
    <>
      <NavBar />
      <div className="kontakt-wrapper">
        <h1>O NAS</h1>
        <div className="kontakt-container">
          <Link to="mailto:wtq.saso@gmail.com">wtq.saso@gmail.com</Link>
          <p>040 619-246</p>
          <form action="">
            <input placeholder="Ime*" type="text" />
            <input placeholder="Priimek*" type="text" />
            <input placeholder="E-mail*" type="text" />
            <input placeholder="Povpraševanje*" type="text" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
