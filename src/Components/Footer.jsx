import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="mb-2">XpenseHub System</h5>
            <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
