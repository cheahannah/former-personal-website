import { Link } from "gatsby";
import React from "react";
import "./Navbar.css";
import pdf from "../documents/resume.pdf";

const links = ["about", "projects", 'contact'];

const Navbar = ({ selected }) => {
  return (
    <div className="navbar">
      <div className="title-meta">
        <Link to="/">
          <p>hannah chea</p>
        </Link>
      </div>
      <div className="links">
        <Link to="/about">about</Link>
        <a href={pdf} target="_blank" rel="noreferrer">resume</a>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
