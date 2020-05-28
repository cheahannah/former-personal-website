import React from "react";
import Navbar from "../components/Navbar";
import Image from "../images/me2.jpg";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import "./about.css";

const AboutPage = () => (
  <div>
    <Navbar />
    <PageLayout title="About me!" width={30} children={"Education", "Certifications"}>
      <div>
        <p>Meaningful data analysis, like a lotus flower, emerges from its complicated and murky environment when cultivated with hard work and care. </p>
        <p>Eager to cultivate my own career in this complicated and murky world, I am a third-year UC Berkeley student majoring in Data Science with an emphasis in Business and Industrial Analytics.
        I am 2nd-generation Cambodian-American raised in Bakersfield, CA, and my background and experiences have caused me to be a vibrant individual who is always looking for opportunities to think creatively and learn as much as I can.
        </p>
      </div>

      <div>
        <h1>Education</h1>
        <b>University of California, Berkeley</b>
        <p>B.A. in Data Science, Emphasis in Business and Industrial Analytics</p>
        <p></p>
        <b>Courses: </b>
        <ul class="columns" data-columns="2">
          <li>Principles and Techniques of Data Science</li>
          <li>Data Structures</li>
          <li>Artificial Intelligence</li>
          <li>Probability</li>
          <li>Linear Algebra</li>
          <li>Multivariable Calculus</li>
          <li>Principles of Business</li>
          <li>Bioinspired Design</li>
          <li>Perception</li>
        </ul>
      </div>

      <div>
        <h1>Certifications</h1>
        <li>Sutardja Center for Entrepreneurship and Technology Certificate in Entrepreneurship and Technology</li>
        <li>Berkeley Certificate in Design Innovation</li>
      </div>
    </PageLayout>
    <Footer />
  </div>
);

export default AboutPage;
