import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Data from "./data/Data.json";

import {
  InstagramIcon,
  YouTubeIcon,
  TwitterIcon,
  BottomArrowIcon,
  ArrowOnBtnIcon,
  СustomBtn,
  DestinationCard,
  GalleriesCard,
} from "./assets/assets.js";
export default function Home() {
  const [text, setText] = useState("Explore More");

  const slides = [
    "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img1.png",
    "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img2.png",
    "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img3.png",
    "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img4.png",
    "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img5.png",
    "https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/slider-pack/slider-img6.png",
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
            <input
              type="checkbox"
              id="burger-toggle"
              className="burger-checkbox"
            />

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
            <InstagramIcon className="social-icon" />
            <TwitterIcon className="social-icon" />
            <YouTubeIcon className="social-icon" />
          </div>
        </section>

        <section className="header-bottom-sect">
          <div className="discover">
            <СustomBtn />

            <p>
              Discover the captivating allure of Arctic wonders, from stunning
              landscapes to vibrant culture, on an unforgettable journey
              throught the North.
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
            <p>
              It all Began with a single journey - a trip to the land of fire
              and ice that sparked a profound love for Nepal. Enchanted by its
              rugged beauty and rich culture, we knw we hand found something
              truly special.
            </p>

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

        <section className="destination">
          <p>[Destination]</p>
          <div className="destination-title">
            <h2>A unique blend of adventure, culture and natural wonders</h2>

            <p>
              Discover a fussion of adventure, culture and scenicbeauty across
              our diverse destinations, offering unforgettanble experince at
              every turn.
            </p>
          </div>

          <div className="destination-container">
            {Data.destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destinationImage={destination.image}
                destinationTitle={destination.title}
                destinationText={destination.text}
              />
            ))}
          </div>
        </section>

        <section className="galleries">
          <div className="gallerie-title">
            <p>[Galleries]</p>
            <h2>
              A visual journey through the lens, one snapshot at a time
              capturing the essence of our travel adventures around the world.
            </h2>
          </div>
          <div className="gallerie-content">
            <p>Explore More</p>
            {Data.galleries.map((gallerie) => (
              <GalleriesCard
                key={gallerie.id}
                galleriesImage={gallerie.image}
                galleriesTitle={gallerie.title}
              />
            ))}
          </div>
        </section>

        <section className="reservation">
          <div className="reservation-title">
            <p>[Reservation]</p>
            <h2>
              Secure Spot for an unforgettable journey through Trekking beauty
              and unique charms
            </h2>
          </div>
          <div className="reservation-container">
            <img src="https://pub-848096b3755f485d9ace04bb5ee26618.r2.dev/pictures/annapurnaTreks-img.png" alt="reservation-picture" />
            <div className="reservation-content">
              <h2>Annapurna Treks</h2>
              <p>
                The Annapurna region is one of Nepal’s most popular and diverse
                trekking destinations, offering a perfect blend of natural
                beauty, cultural richness, and adventure.
              </p>
              <div className="reservation-btns">
                <div className="reservation-btn">
                  <p>8 Days</p>
                </div>

                <div className="reservation-btn">
                  <p>Mar-Oct</p>
                </div>

                <div className="reservation-btn">
                  <p>Mar-Oct</p>
                </div>

                <div className="reservation-btn">
                  <p>Pokhara Airport</p>
                </div>

                <div className="reservation-btn">
                  <p>Flexible</p>
                </div>
                
              </div>
              <div className="reservation-footer">
                <p>From</p>
                <h2>Rs 8000</h2>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
