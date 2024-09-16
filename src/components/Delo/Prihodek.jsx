import React, { useState, useEffect } from "react";
import { PrihodekItems } from "./PrihodekContent";

export default function Prihodek() {
  const slides = PrihodekItems; // Array of slides
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
      <h1>Pasivni Prihodek</h1>
      <div className="delo-nagrada-text">
        <p>
          S pridobitvijo člana v vaši organizacijski strukturi do 3.nivoja, vam
          dnevno pripada pasivni prihodek.
        </p>
      </div>
      <div className="delo-flex">
        <div className="delo-tabela">
          <table>
            <thead>
              <tr>
                <th>LEVEL</th>
                <th>Rebate Ratio</th>
                <th>Task Comission (3600USDT)</th>
                <th>Task Comission (3600USDT) - Vip Account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Level 1</td>
                <td>{"<3%>"}</td>
                <td>3.12</td>
                <td>4.32</td>
              </tr>
              <tr>
                <td>Level 2</td>
                <td>{"<2%>"}</td>
                <td>2.08</td>
                <td>2.88</td>
              </tr>
              <tr>
                <td>Level 3</td>
                <td>{"<1%>"}</td>
                <td>1.04</td>
                <td>1.44</td>
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
