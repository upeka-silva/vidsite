import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/AboutMe.css";
import logo from "../assets/logo.jpg";

const AboutMe = () => {
  return (
    <>
      <section id="how-it-works" className="black-body">
        <div className="aboutme-container">
          <div className="rounded-section">
            <div className="align-aboutme">
              <img
                className="rounded-image"
                src={logo} // Replace with your image
                alt="Vidvirtuoso"
              />
              <div className="aboutme-control">
                <h3 className="heading-4">Hey Guys!</h3>
                <p className="aboutme-paragraph">
                  I'm Vidvirtuoso, a passionate and professional video editor
                  with a unique approach and a diverse set of tools at my
                  disposal. With over 4 years of experience, I’ve successfully
                  edited creative, short-form videos, and high-quality projects
                  for clients around the globe Especially on Fiverr.Most of the
                  time I used Capcut for edit short form content
                </p>
                <p className="aboutme-paragraph">
                  In the past decade, I’ve completed more than 100 projects,
                  helping businesses and creators craft videos that leave
                  lasting impressions. From personal branding to full-scale
                  professional productions, I’m here to elevate your vision with
                  my expertise and creativity.
                </p>
                <p>
                  <b>
                    "Yo fam, catch me on Insta! Let’s vibe together ✌️📸✨"{" "}
                    <a href="https://www.instagram.com/virtuosovid/">Click</a>
                  </b>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
