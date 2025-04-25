import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mess Store Prediction System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
