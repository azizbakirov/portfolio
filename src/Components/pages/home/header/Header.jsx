import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="title-info animate__animated animate__fadeIn">
        <span className="title">Hi, I am</span>
        <h3 className="my_name">Aziz Bakirov</h3>
        <span className="text_title">Frontend developer</span>
        <p className="para"> </p>
      </div>
    </header>
  );
};

export default Header;
