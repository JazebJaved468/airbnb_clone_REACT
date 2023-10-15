import React from "react";
import "../css/Hero.css";
import photoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <>
      <div className="hero-container">

        {/* Photo Grid */}
        <div className="hero-photo-grid">
            <img src='src/images/photo-grid.png'/>
        </div>

        {/* Title */}
        <div className="hero-title">
          <h1>Online Experiences</h1>
        </div>

        {/* Sub Title */}
        <div className="hero-sub-title">
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>

      </div>
    </>
  );
}
