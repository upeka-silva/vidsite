import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-light py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo Section */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h1 className="footer-logo">Vidvirtuoso</h1>
          </div>

          {/* Copyright Section */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h4 className="copy-right">Copyright © 2024, Vidvirtuoso</h4>
          </div>

          {/* Team Section */}
          <div className="col-12 col-md-4">
            <h4 className="team">Teams of Service</h4>
            <p>vidvirtuoso2131@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
