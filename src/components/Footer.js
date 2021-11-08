import React from 'react';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/Tripadvisor/"><BsFacebook /></a>
        <a href="https://twitter.com/TripAdvisor"><BsTwitter /></a>
        <a href="https://www.instagram.com/tripadvisor/"><BsInstagram /></a>
        <p>&copy; 2021 tripadvisor.com</p>
      </div>
    </div>
  )
}

export default Footer
