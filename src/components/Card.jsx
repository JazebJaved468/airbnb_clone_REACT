import React from "react";
import "../css/Card.css";
import star from "../images/star.png";
import dot from "../images/dot.svg";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default function Card(props) {

  console.log(props);

  let badgeText = "";
  if (props.item.openSpots === 0) {
    badgeText = "sold out";
  }
  else if(props.item.location === "Online") {
    badgeText = "online";
  }
  else {
    badgeText = "";
  }

  let image = "";
  if (props.item.coverImg === "image1.png") {
    image = image1;
  }
  else if (props.item.coverImg === "image2.png") {
    image = image2;
  }
  else {
    image = image3;
  }


  return (
    <>
      <div className="card-container">
        {/* Image */}
        <div className="card-image">
          <img src= {image} />
          {badgeText && <p className="badge">{badgeText}</p>}
        </div>

        {/* Reviews */}
        <div className="card-reviews">
          <img className="star" src={star} />
          <span>{props.item.stats.rating}</span>
          <p>({props.item.stats.reviewCount})</p>
          <img src={dot} />
          <p>{props.item.location}</p>
        </div>

        {/* Title */}
        <div className="card-title">
          <p>{props.item.title}</p>
        </div>

        {/* Rate */}
        <div className="card-rate">
          
            <span>From ${props.item.price}</span> / person
         
        </div>
      </div>
    </>
  );
}
