import React from "react";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";
import ContactForm from '../components/ContactForm';
import SocialFollow from "../components/SocialFollow";
import "./contact.css";
import "../components/common.css";

const ContactPage = () => (
  <div>
    <Navbar />
    <div className="hero-container">
      <div className="content">
        <h1>Please talk to me!</h1>
        <p>Feel free to connect with me on social media! My email is <a href="mailto:cheahannah@berkeley.edu">cheahannah@berkeley.edu</a>, but you can also email me through the form below!</p>
        <center><SocialFollow /></center>
        <div className="form">
          <ContactForm />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactPage;