import React from "react";
import "../css/Card.css";
import star from "../images/star.png";
import dot from "../images/dot.svg";
import image from "../images/image1.png";

export default function Card() {
  return (
    <>
      <div className="card-container">
        {/* Image */}
        <div className="card-image">
          <img src={image} />
        </div>

        {/* Reviews */}
        <div className="card-reviews">
          <img className="star" src={star} />
          <span>5.0</span>
          <p>(6)</p>
          <img src={dot} />
          <p>USA</p>
        </div>

        {/* Title */}
        <div className="card-title">
          <p>Life lessons with Katie Zaferes</p>
        </div>

        {/* Rate */}
        <div className="card-rate">
          
            <span>From $136</span> / person
         
        </div>
      </div>
    </>
  );
}
