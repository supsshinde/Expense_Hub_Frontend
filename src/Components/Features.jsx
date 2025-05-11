// src/Components/Features.js
import React from "react";
import "../styles/Features.css";
import { FaArrowRight } from "react-icons/fa";

// Import images
import inventoryImg from "../assets/Analysis.jpg";
import vendorImg from "../assets/Reports1.jpg";
import analyticsImg from "../assets/Analysis.jpg";
import mobileImg from "../assets/Reports1.jpg";

const features = [
  {
    id: 1,
    image: inventoryImg,
    // title: "Smart Inventory Tracking",
    // description: "Real-time monitoring of all stock items with automated alerts for low inventory.",
    title: "Budget Management",
    description: "Set monthly budgets and get alerts when expenses exceed your limit.",
  },
  {
    id: 2,
    image: vendorImg,
    // title: "Vendor Integration",
    // description: "Seamless connection with suppliers for automated ordering and communication.",
    title: "Expense Tracking",
    description: "Easily record and categorize your daily expenses for better money management.",
  },
  {
    id: 3,
    image: analyticsImg,
    title: "Detailed Reports & Analytics",
    description: "Visualize your spending patterns with charts and downloadable reports.",
  },
  {
    id: 4,
    image: mobileImg,
    title: "Anywhere Access",
    description: "Access your expense data securely from any device, anytime.",
  },
];

const Features = () => (
  <section className="portfolio" id="portfolio">
    <div className="section-header">
      <h2>Our Features</h2>
      <p>Explore the key features of our System.</p>
    </div>
    <div className="portfolio-grid">
      {features.map((item) => (
        <div key={item.id} className="portfolio-item animate">
          <img src={item.image} alt={item.title} className="portfolio-image" />
          <div className="portfolio-info">
            <h3 className="portfolio-title">{item.title}</h3>
            <p className="portfolio-description">{item.description}</p>
            <a href="#" className="portfolio-link">
              View Details <FaArrowRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
