import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Features from "./Features";
import About from "./About";
import Footer from "./Footer";

const Home = () => {


  // Helloooo
  return (
    <div>
      <section id="home" className="hero-section mt-5 pt-5"> 
      <h2>Welcome to XpenseHub</h2>
      <p>Manage your finances smarter — track spending, analyze trends, and stay in control effortlessly.</p>
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
