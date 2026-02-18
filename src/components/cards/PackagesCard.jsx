import React from "react";
import "../cards/PackagesCard.css";
export default function PackagesCard({
packagesImg,
packagesTitle,
packagesText,
text1,
text2
}) {
  return (
    <>
        <div className="packages-card">
            <img src={packagesImg} alt={packagesTitle} />
            <div className="packages-card-content">
            {/* <div className="packages-card-infos"> */}
                <div className="packages-card-info">
                  <p className="packages-time-info">{text1}</p>
                  <p className="packages-price-info">{text2}</p>
                </div>
                <h2>{packagesTitle}</h2>
                <p>{packagesText}</p>
                {/* </div> */}
            </div>
            </div>
    </>
  );
}