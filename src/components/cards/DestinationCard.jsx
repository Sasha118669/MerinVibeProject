import React from "react";
import "../cards/DestinationCard.css";
import {
  RightArrowIcon
} from "../../assets/assets.js";

export default function DestinationCard({
destinationImage,
destinationTitle,
destinationText
}) {
  return (
    <>
    <div className="destination-card">

    <img src={destinationImage} alt="Destination" />
    <div className="destination-card-arrow">
        <RightArrowIcon/>
    </div>
        <div className="destination-card-content">
            <h2>{destinationTitle}</h2>
            <p>{destinationText}</p>
        </div>

    </div>
    </>
  );
}