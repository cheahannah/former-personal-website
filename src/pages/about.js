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
        <p>B.A. in <i>Data Science</i>, Emphasis in <i>Business and Industrial Analytics</i> 
        <br/ >Minor in <i>Asian American and Asian Diaspora Studies</i></p>
        <b>Courses: </b>
        <ul class="columns" data-columns="2">
          <li>Principles and Techniques of Data Science, Artificial Intelligence, Data Structures, Human Contexts and Ethics of Data</li>
          <li>Statistics, Probability, Linear Algebra, Multivariable Calculus</li>
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
