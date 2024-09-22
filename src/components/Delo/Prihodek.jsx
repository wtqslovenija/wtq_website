import React, { useState, useEffect } from "react";
import { PrihodekItems } from "./PrihodekContent";

export default function Prihodek() {
  const slides = PrihodekItems; // Array of slides
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index

  // Function to go to the next slide
  const handleSlide = (slide) => {
    setCurrentSlide(slide);
  };

  return (
    <div className="delo-content">
      <h1>Pasivni Prihodek</h1>
      <div className="delo-nagrada-text">
        <p>
          <br />S pridobitvijo člana v vaši organizacijski strukturi do nivoja
          3, vam dnevno pripada pasivni prihodek. V spodnji preglednici sta
          prikazana primera za LV3 in LV4:
          <br />
          <br />
        </p>
      </div>
      <div className="delo-flex">
        <div className="delo-tabela">
          <table>
            <thead>
              <tr>
                <th>Nivo</th>
                <th>Rabatno razmerje</th>
                <th>
                  Provizija opravljenih nalog
                  <br />
                  (LV3 - 44USDT)
                </th>
                <th>Provizija opravljenih nalog (SLV3 - 64USDT) - VIP račun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LV1</td>
                <td>{"<3%>"}</td>
                <td>1.32</td>
                <td>1,92</td>
              </tr>
              <tr className="lv-color">
                <td>LV2</td>
                <td>{"<2%>"}</td>
                <td>0,88</td>
                <td>1,28</td>
              </tr>
              <tr>
                <td>LV3</td>
                <td>{"<1%>"}</td>
                <td>0,44</td>
                <td>0.64</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>Nivo</th>
                <th>Rabatno razmerje</th>
                <th>
                  Provizija opravljenih nalog
                  <br />
                  (LV4 - 104USDT)
                </th>
                <th>
                  Provizija opravljenih nalog (SLV4 - 144USDT) - VIP račun
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LV1</td>
                <td>{"<3%>"}</td>
                <td>3.12</td>
                <td>4.32</td>
              </tr>
              <tr className="lv-color">
                <td>LV2</td>
                <td>{"<2%>"}</td>
                <td>2.08</td>
                <td>2.88</td>
              </tr>
              <tr>
                <td>LV3</td>
                <td>{"<1%>"}</td>
                <td>1.04</td>
                <td>1.44</td>
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
          </div>
        </div>
      </div>
    </div>
  );
}
