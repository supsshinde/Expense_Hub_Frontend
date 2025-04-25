import React from 'react';
import "../styles/About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Welcome to the Mess Store Prediction System, where we provide advanced tools to help you manage and predict your inventory effectively. Our system is designed to assist businesses in maintaining optimal stock levels, integrating with vendors, and making informed decisions based on real-time data.
        </p>
        <p className="about-text">
          Our mission is to streamline inventory management, enhance vendor relationships, and offer powerful analytics for better decision-making. Discover how our system can transform your inventory management process and drive your business forward.
        </p>
      </div>
    </section>
  );
};

export default About;
