import React, { useState, useEffect } from "react";
import { NagradaItems } from "./NagradaContent";

export default function Nagrada() {
  const slides = NagradaItems; // Array of slides
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="delo-content">
      <h1>Nagrada za povabljenega novega člana</h1>
      <div className="delo-nagrada-text">
        <p>
          V spodnji preglednici si lahko ogledate nivoje, število opravljenih in
          plačilo za opravljene naloge.
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
              <tr>
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
              <tr>
                <td>LV4</td>
                <td>216</td>
                <td>144</td>
                <td>72</td>
              </tr>
              <tr>
                <td>LV5</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tr>
              <tr>
                <td>LV6</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="delo-slideshow">
          <div key={currentSlide}>
            {/* 
            <p>{slides[currentSlide].title}</p> */}
            <p>{slides[currentSlide].text}</p>
          </div>
          <div className="button-flex">
            <button onClick={prevSlide} className="slideshow-btn prev">
              Previous
            </button>
            <button onClick={nextSlide} className="slideshow-btn next">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
