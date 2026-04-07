import React from "react";
import homeImg from "../assets/images/home_img.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="image">
          <img src={homeImg} alt="Home" />
        </div>

        <div className="text">
          <div className="title">Antimicrobial Resistance (AMR)</div>
          <div className="info">
            When microorganisms such as bacteria, viruses, fungi, and parasites
            evolve so that medicines designed to kill them no longer work
            effectively. As a result, infections become harder to treat, last
            longer, and can spread more easily.
          </div>
        </div>
      </div>

      <div class="why-detect">
        <div class="title">
          Why detect them in water?
        </div>
        <div class="info">
          Water is widely used for drinking, farming and daily activities. Resistant bacteria can silently spread through food and the environment. Water systems can act as distribution networks for resistance.
        </div>
      </div>
    </div>
  );
}

export default Home;