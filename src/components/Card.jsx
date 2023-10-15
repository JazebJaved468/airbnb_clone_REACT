import React from "react";
import "../css/Card.css";
import star from "../images/star.png";
import dot from "../images/dot.svg";
import image from "../images/image1.png";

export default function Card(props) {
  console.log(props);
  return (
    <>
      <div className="card-container">
        {/* Image */}
        <div className="card-image">
          <img src= {`src/images/${props.image}`} />
          <p className="badge">{props.status}</p>
        </div>

        {/* Reviews */}
        <div className="card-reviews">
          <img className="star" src={star} />
          <span>{props.rating}</span>
          <p>({props.reviewsCount})</p>
          <img src={dot} />
          <p>{props.country}</p>
        </div>

        {/* Title */}
        <div className="card-title">
          <p>{props.title}</p>
        </div>

        {/* Rate */}
        <div className="card-rate">
          
            <span>From ${props.price}</span> / person
         
        </div>
      </div>
    </>
  );
}
