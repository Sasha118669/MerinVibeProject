import React from "react";
import "../cards/DestinationCard.css";
export default function DestinationCard({
destinationImage,
destinationTitle,
destinationText
}) {
  return (
    <>
    <div className="destination-card">

    <img src={destinationImage} alt="Destination" />

        <div className="destination-card-content">
            <h2>{destinationTitle}</h2>
            <p>{destinationText}</p>
        </div>

    </div>
    </>
  );
}