import React from "react";
import "./Footer_01.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const uem='/images/uem.png'

function Footer_01() {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "https://i.ibb.co/6XmC9rX/17584377aa0a3eef5038cc007940328e-1.png",
    },
    {
      name: "Sponsor 2",
      logo: "https://acm-uemj.uem.edu.in/assets/img/logo-1.png",
    },
    {
      name: "Sponsor 3",
      logo: "https://ahalia.ac.in/wp-content/uploads/2020/01/iic-logo.png",
    },
  ];
  return (
    <footer className="footer">
      <div className="floating-shapes">
        <div className="neon-shape yellow-shape"></div>
        <div className="neon-shape blue-shape"></div>
      </div>

      <div className="footer-content">
        <div className="footer-logo-section">
          <h1 className="footer-logo">
            <img
              src="https://i.ibb.co/ZxmbP2G/logo.png"
              alt="logo"
              border="0"
            />
          </h1>
          <p className="footer-quote">"Innovate, Elevate and Transform."</p>
        </div>

        <div className="footer-links">
          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#sponsors">Sponsors</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:technexus.community2024@gmail.com">
                  acehack@uem.edu.in
                </a>
              </li>
              <li>
                Phone: <a href="tel:+9162964991370">+916296499137</a>
              </li>
              <li>Location: UEM Jaipur, Rajasthan</li>
            </ul>
          </div>

          <div className="footer-contact-us">
            <h3>Contact With Us</h3>

            <div className="footer-media">
              <div className="linkedin">
                <a
                  href="https://linkedin.openinapp.co/acehack4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-10 h-10 p-1  "
                >
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
                    alt="LinkedIn"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <div className="instra">
                <a
                  href="https://insta.openinapp.co/acehack4  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-10 h-10 p-1 "
                >
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
                    alt="Instagram"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <div className="twitter">
                <a
                  href="https://twtr.openinapp.co/acehack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-10 h-10 p-1 "
                >
                  <img
                    src="https://img.icons8.com/ios7/600/FFFFFF/twitter.png"
                    alt="Twitter"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <hr className="custom-hr"></hr>

      <div className="sponsors-header">
        <h3>Organizing Partners</h3>
      </div>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-item">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
      <br></br>
      <hr className="custom-hr"></hr>

      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} AceHack. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer_01;
