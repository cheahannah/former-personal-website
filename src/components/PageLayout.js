import React from "react";
import "./common.css";

const PageLayout = ({ title, subTitle, width, children }) => {
  return (
    <div>
      <div className="hero-container">
        <div className="content">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
