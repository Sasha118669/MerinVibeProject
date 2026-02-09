import React from "react";
import "./СustomBtn.css";
import { useState } from "react";

import {
ArrowOnBtnIcon,
BatIcon
} from "../../assets/assets.js";
export default function СustomBtn() {
  const [mouseOnBtn, setMouseOnBtn] = useState(false);
  return (
    <>
    <button className="custom-btn" 
        onMouseEnter={() => setMouseOnBtn(true)} onMouseLeave={() => setMouseOnBtn(false)}>
        <span>
          {mouseOnBtn ? "Made By Merin" : "Book Now"}
        </span> 
        <div className="arrow">
          {mouseOnBtn ? <BatIcon /> : <ArrowOnBtnIcon />}
          
        </div>
        </button>
    </>
  );
}
