import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/HeroSection.css";

const Hero = () => {
  return (
    <>
      <section className="hero-without-image">
        <div className="container"></div>
        <div className="hero-wrapper-two text-center">
          {/* Fixed Heading */}
          <h1 className="heading-2">
            Crafting Stories That Captivate Your Audience
          </h1>

          {/* Fixed Description */}
          <p className="margin-bottom-24px fivehundred">
            At Vidvirtuoso, we transform your ideas into compelling video
            content. From sleek edits to stunning animations, we help your brand
            shine in a crowded digital landscape.
          </p>

          {/* Action Buttons */}
          <div className="div-block mt-4">
            <a href="#pricing" className="button w-button sevenhundred">
              View Pricing
            </a>
            <a
              // href="https://editozclub.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="button-white w-button sevenhundred ms-3"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
