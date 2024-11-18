import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <h2 className="m-0">Vidvirtuoso</h2>
          </a>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="#projects"
                  onClick={() => lenis.scrollTo("#projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="#how-it-works"
                  onClick={() => lenis.scrollTo("#how-it-works")}
                >
                  How it Works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="#pricing"
                  onClick={() => lenis.scrollTo("#pricing")}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="#faq"
                  onClick={() => lenis.scrollTo("#faq")}
                >
                  FAQ
                </a>
              </li>
            </ul>

            {/* Join Waitlist Button */}
            <a
              //   href="https://editozclub.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
