// src/components/Footer/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/footer.less";
import logo from "../assets/images/logo/fraudsnitchlogo.svg"; // Your logo

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <Link
            to="/"
            className="footer-logo-link"
          >
            <img
              src={logo}
              alt="FraudSnitch Logo"
              className="footer-logo"
            />
          </Link>
          <p className="footer-tagline">
            Your trusted partner in fraud prevention and awareness.
          </p>
        </div>

        <div className="footer-section footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li>
              <Link
                to="/"
                className="footer-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/educational"
                className="footer-link"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/newsroom"
                className="footer-link"
              >
                Newsroom
              </Link>
            </li>
            <li>
              <Link
                to="/watchtower"
                className="footer-link"
              >
                Watchtower
              </Link>
            </li>
            <li>
              <Link
                to="/report"
                className="footer-link"
              >
                Report a Scam
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="footer-link"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:info@fraudsnitch.com"
              className="footer-link"
            >
              info@fraudsnitch.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="footer-link"
            >
              +1 (234) 567-890
            </a>
          </p>
          <div className="social-links">
            {/* Replace with actual social media icons/links if you have them */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              F
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              in
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} FraudSnitch. All rights reserved.
        </p>
        <div className="footer-legal-links">
          <Link
            to="/privacy"
            className="footer-link"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="footer-link"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
