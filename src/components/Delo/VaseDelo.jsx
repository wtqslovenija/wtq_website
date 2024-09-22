import React from "react";

import Phone from "../../images/phone_template.png";
import InstructionsVideo from "../../videos/wtq_binance_setup.mp4";
export default function VaseDelo() {
  return (
    <div className="delo-content">
      <h1>Vaše delo</h1>
      <div className="delo-vasedelo-flex">
        <div className="delo-vasedelo-text">
          <p>Za učinkovito in varno delo potrebujete:</p>
          <ul>
            <li>omrežno povezavo,</li>
            <li>internetni brskalnik,</li>
            <li>mobilni telefon ali osebni računalnik,</li>
            <li>sistem za prenašanje sporočil - TELEGRAM,</li>
            <li>
              digitalno denarnico, ki podpirata protokol TRC20 ali ERC20 za
              prenos sredstev,
            </li>
            <li>mentorja.</li>
          </ul>
        </div>
        <div className="delo-image-container">
          <img src={Phone} alt="" />
          <video controls>
            <source src={InstructionsVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="delo-vasedelo-flex">
        <div className="delo-vasedelo-text">
          <p className="bold">
            Pred začetkom z delom je potrebna aktivacija računa.
          </p>
          <p>
            V vsakem poslovnem okolju je delo urejeno hirarhnično od direktorja
            in do zadnjega v hierarhiji, ki skrbiijo, da delo poteka čim bolj
            usklajeno. Tudi pri nas imamo hierarhično ureditev, z manjšo
            razliko, da si vsak lahko zase poskrbi kako visoko bo v hierarhiji
            in koliko je sam pripravljen vložiti truda, da bo njegov trud
            primerno plačan.
            <br />
            <br />
            Vsa prejeta plačila si lahko dnevno prenašate na svojo digitalno
            denarnico omejitev je samo, da imate na WTQ računu več kot 15USDT.
            <br />
            <br />
            <p className="bold">Naše delo je urejeno z nivoji od 0 do 4.</p>
            Nivo 0 je spoznavni nivo z delom in je brezplačen. Sistem deluje 7
            dni. Po 7dneh je neaktiven.
            <br />
            <br />
            Nivo 1 do 4 so plačljivi. Pristojbina za aktivacijo nivoja računa je
            polog za delo in ne provizija. Po poteku enega leta, bo denar
            povrnjen na vaš WTQ račun. S pristojbino se zavežete, da boste
            naloge dnevno opravljali in s tem zagotovili, da se naročila
            podjetja lahko dokončajo pravočasno.
          </p>
        </div>
      </div>
    </div>
  );
}
