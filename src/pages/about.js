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
        <p>Like a lotus flower, meaningful data analysis emerges from its complicated and murky environment when cultivated with hard work and care.</p>
          
        <p>Eager to start my own career in this complicated and murky world, I am a senior UC Berkeley undergraduate student interested in data science, design, and business.
        Hailing from the farms of Bakersfield, CA, I am the proud daughter of Cambodian Chinese refugees who is always looking for opportunities to think creatively and learn as much as I can.</p>
        </div>
      </div>

    <h2>Fast Facts</h2>
    <ul>
    <li>My <a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator">Myers-Briggs Type Indicator</a> type is <a href="https://www.16personalities.com/enfp-personality">ENFP</a>.</li>
      <li>My <a href="https://en.wikipedia.org/wiki/Alignment_(Dungeons_%26_Dragons)">Dungeons & Dragons Alignment</a> is <a href="http://easydamus.com/chaoticgood.html">Chaotic Good</a>.</li>
      <li>I am a big fan of fashion and enjoy sewing & upcycling clothes.</li>
      <li>My go-to boba order is black milk tea with boba, 0% sugar, 0% ice. </li>
      <li>My favorite food is <a href='https://en.wikipedia.org/wiki/B%C3%A1nh_x%C3%A8o'>bánh xèo</a> because it's so colorful & a food that a strongly associate with my famiily.</li>
      <li>My favorite video game is any game from the <a href="https://borderlands.com/en-US/">Borderlands</a> series. </li>
    </ul>
   
      {/* <h2>Education</h2>
      <ul>
        <b>University of California, Berkeley</b>
        <p />B.A. in Data Science, Emphasis in Business & Industrial Analytics
        <br />Minor in Asian American and Asian Diaspora Studies
        <p /><b>Courses: </b>
        <ul>
          <li>Principles and Techniques of Data Science, Artificial Intelligence, Machine Learning, Data Structures, Algorithms, Human Contexts and Ethics of Data</li>
          <li>Statistics, Probability, Linear Algebra, Multivariable Calculus</li>
          <li>Business Analytics, Marketing, Design Thinking</li>
        </ul>
      </ul> */}

      {/* <h2>Certifications</h2>
      <ul>
        <li>Sutardja Center for Entrepreneurship and Technology Certificate in Entrepreneurship and Technology</li>
        <li>Berkeley Certificate in Design Innovation</li>
      </ul> */}
      </div>
    <Footer />
  </div>
);

export default AboutPage;
