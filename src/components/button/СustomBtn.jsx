import React from "react";
import "./СustomBtn.css";
import { useState } from "react";

export default function СustomBtn({
  text1,
  text2,
  icon1,
  icon2
}) {
  const [mouseOnBtn, setMouseOnBtn] = useState(false);
  return (
    <>
    <button className="custom-btn" 
        onMouseEnter={() => setMouseOnBtn(true)} onMouseLeave={() => setMouseOnBtn(false)}>
        <span>
          {mouseOnBtn ? text2 : text1}
        </span> 
        <div className="arrow">
          {mouseOnBtn ? icon2 : icon1}
          
        </div>
        </button>
    </>
  );
}
