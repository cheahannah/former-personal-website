import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../images/me.jpg";
import SocialFollow from "../components/SocialFollow";
import "./index.css";
import pdf from "../documents/resume.pdf";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="header-details">
          <h1>Hi, I'm Hannah Chea!</h1>
          <p>I'm a senior undergraduate student at UC Berkeley with a passion for data science, data engineering, and design.</p>
          <p>I play mellophone for the <a href="http://calband.berkeley.edu/">Cal Band</a>, support the AAPI community, and sometimes play a video game or two.</p>
          {/* <p>Feel free to check out my <a href={pdf}>resume!</a></p> */}
          <SocialFollow />
        </div>
        <img src={Image} alt="Hannah Chea" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
