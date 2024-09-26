import React, { useState, useEffect } from "react";
import { NivoItems } from "./NivoContent";
export default function Nivo() {
  const slides = NivoItems; // Array of slides
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index
  const [hiddenButton, setHiddenButton] = useState(1); // To track which button is hidden

  // Function to go to the next slide
  const handleSlide = (slide) => {
    setCurrentSlide(slide);
    setHiddenButton(slide); // Hide the pressed button
  };

  /*  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  }; */

  return (
    <div className="delo-content">
      <h1>Nivo</h1>
      <div className="delo-text">
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
                <th>Level</th>
                <th>Price (USDT)</th>
                <th>Daily Tasks</th>
                <th>Commission per Task (USDT)</th>
                <th>Daily income (USDT)</th>
                <th>Weekend income (USDT)</th>
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
              <tr className="lv-color">
                <td>LV1</td>
                <td>200</td>
                <td>12</td>
                <td>0.5</td>
                <td>6</td>
                <td>3</td>
              </tr>
              <tr className="lv-color">
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
              <tr className="lv-color">
                <td>LV3</td>
                <td>1560</td>
                <td>22</td>
                <td>2</td>
                <td>44</td>
                <td>22</td>
              </tr>
              <tr className="lv-color">
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
              <tr className="lv-color">
                <td>LV5</td>
                <td>7600</td>
                <td>40</td>
                <td>5</td>
                <td>200</td>
                <td>100</td>
              </tr>
              <tr className="lv-color">
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
              <tr className="lv-color">
                <td>LV7</td>
                <td>29800</td>
                <td>200</td>
                <td>6,5</td>
                <td>1300</td>
                <td>650</td>
              </tr>
              <tr className="lv-color">
                <td>LV7</td>
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
          <div className="delo-text" key={currentSlide}>
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].text}</p>
          </div>
          <div className="delo-text delo-choose-button">
            <p>Izberi nivo:</p>
          </div>
          <div className="button-flex">
            {[...Array(7).keys()].map(
              (index) =>
                index !== hiddenButton && (
                  <button
                    key={index}
                    onClick={() => handleSlide(index)}
                    className="slideshow-btn"
                  >
                    LV{index + 1}
                  </button>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
