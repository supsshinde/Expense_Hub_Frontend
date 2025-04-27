import React from "react";
import "../styles/Services.css";

import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";
import Service4 from "../assets/Service4.png";

const portfolioItemsLeft = [
  {
    imgSrc: Service1,
    alt: "Inventory Management",
    title: "Smart Inventory Tracking",
    description: "Real-time monitoring of all stock items with automated alerts for low inventory.",
    link: "#",
  },
  {
    imgSrc: Service2,
    alt: "Vendor Integration",
    title: "Vendor Integration",
    description: "Seamless connection with suppliers for automated ordering and communication.",
    link: "#",
  },
];

const portfolioItemsRight = [
  {
    imgSrc: Service3,
    alt: "Analytics Dashboard",
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with predictive analytics for better decision making.",
    link: "#",
  },
  {
    imgSrc: Service4,
    alt: "Mobile Access",
    title: "Mobile Access",
    description: "Manage your inventory from anywhere with our mobile-friendly interface.",
    link: "#",
  },
];

const ServiceSection = () => {
  return (
    <section className="Service-section">
      <div className="section-header">
        <h2>Our Premium Services</h2>
        <p>Explore the key features of our Mess Store Prediction System that help streamline your inventory management.</p>
      </div>

      <div className="Service-grid">
        <div className="column">
          {portfolioItemsLeft.map((item, index) => (
            <div className="Service-card" key={index}>
              <img src={item.imgSrc} alt={item.alt} className="Service-image" />
              <div className="Service-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="view-details">View Details →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="column">
          {portfolioItemsRight.map((item, index) => (
            <div className="Service-card" key={index + 2}>
              <img src={item.imgSrc} alt={item.alt} className="Service-image" />
              <div className="Service-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="view-details">View Details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
