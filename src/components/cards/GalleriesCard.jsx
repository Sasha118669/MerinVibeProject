import React from "react";
import "../cards/GalleriesCard.css";
export default function GalleriesCard({
galleriesImage,
galleriesTitle
}) {
  return (
    <>
        <div className="gallerie-card">
            <img src={galleriesImage} alt={galleriesTitle} />
            <div className="gallerie-card-content">
                <h2>{galleriesTitle}</h2>
                </div>
            </div>
    </>
  );
}