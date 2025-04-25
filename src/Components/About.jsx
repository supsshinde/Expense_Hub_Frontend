import React from 'react';
import "../styles/About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
        Welcome to the Expense Hub Tracking System, your smart solution for managing, analyzing, and optimizing personal
         or organizational expenses. Our system empowers users to seamlessly track daily expenditures, categorize spending, 
         set budgets, and gain actionable insights through intuitive reports and analytics. Whether you're an individual,
         a business, or a finance team, Expense Hub simplifies financial tracking, enhances transparency, and supports better 
         decision-making through real-time data and intelligent dashboards.        </p>
        <p className="about-text">
        Our mission is to simplify financial tracking, empower users to manage expenses effortlessly, and provide smart insights 
        for better budgeting decisions. With Expense Hub, discover how easy it is to take control of your spending, set financial goals,
         and build a more secure financial future.        
         </p>
      </div>
    </section>
  );
};

export default About;
