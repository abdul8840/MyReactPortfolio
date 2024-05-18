import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Abdul</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testi" className="footer-link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/abdulrahman.laiq.7?mibextid=ZbWKwL"
            className="footer-social-icon"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/_abdul_0_rahman_/"
            className="footer-social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="www.instagram.com"
            className="footer-social-icon"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer-copy">
            &#169; Abdul Rahman. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
