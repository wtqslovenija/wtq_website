import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Domov from "./routes/Domov";
import Delo from "./routes/Delo";
import Pomoc from "./routes/Pomoc";
import Akcije from "./routes/Akcije";
import Kontakt from "./routes/Kontakt";

export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Domov />} />
          <Route path="/delo" element={<Delo />} />
          <Route path="/pomoc" element={<Pomoc />} />
          <Route path="/akcije" element={<Akcije />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </>
  );
}
