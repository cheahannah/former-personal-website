import React from "react";
import Navbar from "../components/Navbar";
import Image from "../images/me3.jpg";
import Footer from "../components/Footer";
import "./about.css";

const AboutPage = () => (
  <div>
    <Navbar />
    <div className="hero-container">
      <div className="content">
        <h1>About me!</h1>
      </div>
    </div>

    <div className="content">
      <div className="home-container2">
        <img src={Image} alt="Hannah Chea" />
        <div className="header-details2">
          <p>Meaningful data analysis, like a lotus flower, emerges from its complicated and murky environment when cultivated with hard work and care. </p>
          <p>Eager to cultivate my own career in this complicated and murky world, I am a third-year UC Berkeley student interested in the intersection of data science, design, and business. 
          I am 2nd-generation Cambodian-American raised in Bakersfield, CA, and my background and experiences have caused me to be a vibrant individual who is always looking for opportunities to think creatively and learn as much as I can.</p>
        </div>
      </div>
      
      <h2>Education</h2>
      <ul>
        <b>University of California, Berkeley</b>
        <p />B.A. in Data Science, Emphasis in Business and Industrial Analytics
        <br />Minor in Asian American and Asian Diaspora Studies
        <p /><b>Courses: </b>
        <ul>
          <li>Principles and Techniques of Data Science, Artificial Intelligence, Data Structures, Human Contexts and Ethics of Data</li>
          <li>Statistics, Probability, Linear Algebra, Multivariable Calculus</li>
        </ul>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>Sutardja Center for Entrepreneurship and Technology Certificate in Entrepreneurship and Technology</li>
        <li>Berkeley Certificate in Design Innovation</li>
      </ul>
      </div>
    <Footer />
  </div>
);

export default AboutPage;
