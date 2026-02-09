import React from "react";
import "./Home.css";
import { useState } from "react";

import {
InstagramIcon,
YouTubeIcon,
TwitterIcon,
BottomArrowIcon,
ArrowOnBtnIcon,
СustomBtn
} from "./assets/assets.js";
export default function Home() {
 const [text, setText] = useState("Explore More"); 
  return (
    <>
      <header className="header">
        <section className="header-top-sect">
          <div className="logo-header">
            <h1>MerinVibe</h1>
          </div>

          <div className="nav-header">
                  <a href="#home">Home</a>
 
                  <a href="#destination">Destination</a>
   
                  <a href="#gallery">Gallery</a>

                  <a href="#travelPackages">Travel Packages</a> 
          </div>

          <div className="language-header">
            <p>EN</p>
          </div>

          <div className="Burger">
<input type="checkbox" id="burger-toggle" className="burger-checkbox" />

<label htmlFor="burger-toggle" className="burger">
  <span></span>
  <span></span>
  <span></span>
</label>

<div className="burger-menu">
  <a href="#home">Home</a>
 
                  <a href="#destination">Destination</a>
   
                  <a href="#gallery">Gallery</a>

                  <a href="#travelPackages">Travel Packages</a>
</div>
</div>
        </section>

        <section className="header-middle-sect">
        <p>Weaving Your Dreams into Unforgettable Adventures</p>
        <div className="social-media">
          <InstagramIcon className="social-icon"/>
          <TwitterIcon className="social-icon"/>
          <YouTubeIcon className="social-icon"/>
        </div>
        </section>

        <section className="header-bottom-sect">
          <div className="discover">  
      <СustomBtn />

            <p>
              Discover the captivating allure of Arctic wonders, from stunning landscapes to vibrant culture, on an unforgettable journey throught the North.
            </p>
          </div>
          <div className="explore-more">
            {
            <p
              onMouseEnter={() => setText("Scroll down")}
              onMouseLeave={() => setText("Explore More")}
        >
          {text}
        </p>
          }
            <BottomArrowIcon />
          </div>
          
        </section>
      </header>
    </>
  );
}
