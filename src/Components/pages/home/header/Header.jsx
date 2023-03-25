import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="wrapper">
      <div className="title-info">
        <span className="title">
          I create <span>beautifuls</span> experiences
        </span>
        <p>
          I work with people all over the world to create tailor-made Webflow
          experiences
        </p>
        <p className="para"> Available for freelance work</p>
      </div>
    </header>
  );
};

export default Header;