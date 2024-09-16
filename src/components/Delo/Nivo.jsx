import React, { useState, useEffect } from "react";
import { NivoItems } from "./NivoContent";
export default function Nivo() {
  const slides = NivoItems; // Array of slides
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
      <h1>Nivo</h1>
      <div className="delo-nivo-text">
        <p>
          Sistem je nastavljen, da se trudi stimulirati vaš trud, ob pridobitvi
          vsakega novega člana.
        </p>
      </div>
      <div className="delo-flex">
        <div className="delo-tabela">
          <table>
            <thead>
              <tr>
                <th>LEVEL</th>
                <th>PRICE (USDT)</th>
                <th>DAILY TASKS</th>
                <th>COMMISSION PER TASK (USDT)</th>
                <th>DAILY INCOME (USDT)</th>
                <th>WEEKEND INCOME (USDT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LV0</td>
                <td>4</td>
                <td>4</td>
                <td>1</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>LV0 (VIP)</td>
                <td>4</td>
                <td>4</td>
                <td>0.5</td>
                <td>2</td>
                <td>1</td>
              </tr>
              <tr>
                <td>LV1</td>
                <td>200</td>
                <td>12</td>
                <td>0.5</td>
                <td>6</td>
                <td>3</td>
              </tr>
              <tr>
                <td>SLV1 (VIP)</td>
                <td>200</td>
                <td>16</td>
                <td>1</td>
                <td>8</td>
                <td>4</td>
              </tr>
              <tr>
                <td>LV2</td>
                <td>680</td>
                <td>20</td>
                <td>1</td>
                <td>20</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SLV2 (VIP)</td>
                <td>680</td>
                <td>28</td>
                <td>1</td>
                <td>28</td>
                <td>14</td>
              </tr>
              <tr>
                <td>LV3</td>
                <td>1560</td>
                <td>22</td>
                <td>2</td>
                <td>44</td>
                <td>22</td>
              </tr>
              <tr>
                <td>SLV3 (VIP)</td>
                <td>1560</td>
                <td>32</td>
                <td>2</td>
                <td>64</td>
                <td>32</td>
              </tr>
              <tr>
                <td>LV4</td>
                <td>3600</td>
                <td>26</td>
                <td>4</td>
                <td>104</td>
                <td>52</td>
              </tr>
              <tr>
                <td>SLV4 (VIP)</td>
                <td>3600</td>
                <td>36</td>
                <td>4</td>
                <td>144</td>
                <td>72</td>
              </tr>
              <tr>
                <td>LV5</td>
                <td>7600</td>
                <td>40</td>
                <td>5</td>
                <td>200</td>
                <td>100</td>
              </tr>
              <tr>
                <td>SLV5 (VIP)</td>
                <td>7600</td>
                <td>56</td>
                <td>5</td>
                <td>280</td>
                <td>140</td>
              </tr>
              <tr>
                <td>LV6</td>
                <td>16800</td>
                <td>112</td>
                <td>5</td>
                <td>560</td>
                <td>280</td>
              </tr>
              <tr>
                <td>SLV6 (VIP)</td>
                <td>16800</td>
                <td>160</td>
                <td>5</td>
                <td>800</td>
                <td>400</td>
              </tr>
              <tr>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="delo-slideshow">
          <div key={currentSlide}>
            <p>{slides[currentSlide].title}</p>
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
