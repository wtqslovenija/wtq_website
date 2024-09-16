import React from "react";
import "../components/Akcije/Akcije.css";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
export default function Akcije() {
  return (
    <>
      <NavBar />
      <div className="akcije-wrapper">
        <div className="akcije-container">
          <h1>AKCIJE</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
