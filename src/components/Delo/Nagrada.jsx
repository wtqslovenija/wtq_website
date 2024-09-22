import React, { useState, useEffect } from "react";
import { NagradaItems } from "./NagradaContent";

export default function Nagrada() {
  const slides = NagradaItems; // Array of slides
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index

  // Function to go to the next slide
  const handleSlide = (slide) => {
    setCurrentSlide(slide);
  };

  // Function to go to the previous slide
  /*const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };*/

  // Automatically change the slide every 3 seconds

  return (
    <div className="delo-content">
      <h1>Nagrada za povabljenega novega člana</h1>
      <div className="delo-nagrada-text">
        <p>
          <br />
          V spodnji preglednici si lahko ogledate nivoje, število opravljenih in
          plačilo za opravljene naloge.
          <br />
          <br />
        </p>
      </div>
      <div className="delo-flex">
        <div className="delo-tabela">
          <table>
            <thead>
              <tr>
                <th>LEVEL</th>
                <th>1 {"< 6% >"}</th>
                <th>2 {"< 4% >"}</th>
                <th>3 {"< 2% >"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LV1</td>
                <td>12</td>
                <td>8</td>
                <td>4</td>
              </tr>
              <tr className="lv-color">
                <td>LV2</td>
                <td>40.8</td>
                <td>27.2</td>
                <td>13.6</td>
              </tr>
              <tr>
                <td>LV3</td>
                <td>93.6</td>
                <td>62.4</td>
                <td>31.2</td>
              </tr>
              <tr className="lv-color">
                <td>LV4</td>
                <td>216</td>
                <td>144</td>
                <td>72</td>
              </tr>
              <tr>
                <td>LV5</td>
                <td>456</td>
                <td>304</td>
                <td>152</td>
              </tr>
              <tr className="lv-color">
                <td>LV6</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tr>
              <tr>
                <td>LV7</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="delo-slideshow">
          <div key={currentSlide}>
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].text}</p>
          </div>
          <div className="button-nagrada-flex">
            <button
              onClick={() => handleSlide(0)}
              className="slideshow-nagrada-btn"
            >
              PRIMER 1
            </button>
            <button
              onClick={() => handleSlide(1)}
              className="slideshow-nagrada-btn"
            >
              PRIMER 2
            </button>
            <button
              onClick={() => handleSlide(2)}
              className="slideshow-nagrada-btn"
            >
              PRIMER 3
            </button>
            <button
              onClick={() => handleSlide(3)}
              className="slideshow-nagrada-btn"
            >
              PRIMER 4
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
