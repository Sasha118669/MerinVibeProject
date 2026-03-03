import React from "react";
import "../cards/GalleriesCard.css";
import { useState } from "react";
export default function GalleriesCard({
galleriesImage,
galleriesTitle
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
      className={`gallerie-card ${expanded ? "expanded" : ""}`}>
        
      <div
        className="hover-trigger"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      />
      <img src={galleriesImage} alt={galleriesTitle} />
      <div className="gallerie-card-content">
        <h2>{galleriesTitle}</h2>
      </div>
    </div>
    </>
  );
}