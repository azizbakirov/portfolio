import React from "react";
import "./about.scss";
import myImg from "./myPhotos/man.png";
import Footer from "../home/footer/Footer";

function About() {
  return (
    <div className="about">
      <div className="info">
        <h1>Aziz Bakirov</h1>
        <p>
          I live in Tashkent, Uzbekistan, I am a Front-End Developer. My skill
          set includes designing, animating and coding products with the highest
          precision and attention to detail. I always strive to create
          interfaces that are not only aesthetically pleasing, but also provide
          a great user experience.
        </p>
        <div className="my_skills">
          <h2>My Skill</h2>
          <div className="skill">
            <a target="_blank" href="https://html5.org/">
              <i className="fa-brands fa-html5"></i>
            </a>
            <a target="_blank" href="https://www.css3.com/">
              <i className="fa-brands fa-css3-alt"></i>
            </a>
            <a target="_blank" href="https://sass-lang.com/">
              <i className="fa-brands fa-sass"></i>
            </a>
            <a target="_blank" href="https://www.javascript.com/">
              <i className="fa-brands fa-js"></i>
            </a>
            <a target="_blank" href="https://react.dev/">
              <i className="fa-brands fa-react"></i>
            </a>
          </div>
        </div>
        <div className="location">
          <div className="location_icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <span>
            My address is the city of Alimkent, Oqqorgon District, Tashkent
            Region, Uzbekistan
          </span>
        </div>
      </div>
      <div className="info_img">
        <img src={myImg} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
