import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

/* Images */
import HomeBackground from "./images/background_image.jpg";
// Tukej nalagaj slike

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      HomeBackground,
      // Tukaj dodajaj importe za preload
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export { HomeBackground };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <PreloadImages />
      <App />
    </HashRouter>
  </React.StrictMode>
);
