import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";

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

 const slides = [
  "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img1.png",
  "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img2.png",
  "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img3.png",
  "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img4.png",
  "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img5.png",
  "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img6.png"
];
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

      <main className="main">
          <section className="about-us">
          <p>[About Us]</p>
          <div className="about-us-content">

          <p>It all Began with a single journey - a trip to the land of fire and ice that sparked a profound love for Nepal. Enchanted by its rugged beauty and rich culture, we knw we hand found something truly special.</p>

          <div className="statistics-container">
          <div className="statistics">
            <h2>95%</h2>
            <p>Customer Satisfaction</p>
          </div>

          <div className="statistics">
            <h2>72+</h2>
            <p>Popular Destinations</p>
          </div>

          <div className="statistics">
            <h2>250+</h2>
            <p>Experienced Guides</p>
          </div>
          </div>

          </div>
          </section>

          <section className="swiper">
          <div className="swiper-track">
          {slides.concat(slides).map((slide, index) => (
          <div className="swiper-slide" key={slide + index}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
    ))}
  </div>
          </section>
      </main>
    </>
  );
}