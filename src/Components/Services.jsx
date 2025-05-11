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
     title: "Budget Management",
    description: "Set monthly budgets and get alerts when expenses exceed your limit.",
    link: "#",
  },
  {
    imgSrc: Service2,
    alt: "Vendor Integration",
    title: "Expense Tracking",
    description: "Easily record and categorize your daily expenses for better money management.",
    link: "#",
  },
];

const portfolioItemsRight = [
  {
    imgSrc: Service3,
    alt: "Analytics Dashboard",
    title: "Detailed Reports & Analytics",
    description: "Visualize your spending patterns with charts and downloadable reports.",
    link: "#",
  },
  {
    imgSrc: Service4,
    alt: "Mobile Access",
     title: "Anywhere Access",
    description: "Access your expense data securely from any device, anytime.",
    link: "#",
  },
];

const ServiceSection = () => {
  return (
    <section className="Service-section">
      <div className="section-header">
        <h2>Our Premium Services</h2>
        <p>Explore the key features of our Expense Tracker System that help streamline your expense management.</p>
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
