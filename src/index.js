import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

/* Images */
import Home1 from "./images/home.jpg";
import Home2 from "./images/home.jpg";
import Home3 from "./images/home.jpg";
import HomeBackground from "./images/home.jpg";
// Tukej nalagaj slike

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Home1,
      Home2,
      Home3,
      HomeBackground,
      // Tukaj dodajaj importe za preload
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export { Home1, Home2, Home3, HomeBackground };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <PreloadImages />
      <App />
    </HashRouter>
  </React.StrictMode>
);
