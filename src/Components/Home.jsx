import React from "react";
import { Link } from "react-router-dom";

import Features from "./Features";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <section id="home" className="hero-section">  
        {/* hi */}
        <h2>Welcome to XpenseHub System</h2>
        <p>Track, Analyze, and Optimize Your Expenses with Ease</p>
        <div className="button">
        <Link to="/UserRegister">Get Started</Link>
        </div>
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
