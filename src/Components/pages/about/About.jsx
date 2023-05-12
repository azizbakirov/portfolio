import React from "react";
import "./about.scss";
import myImg from "./myPhotos/man.png";
import certificate from "./sertificate/certificate.png";
import Footer from "../home/footer/Footer";

function About() {
  return (
    <div className="about">
      <div className="about_pages">
        <div className="my_info">
          <p className="title">Aziz Bakirov</p>
          <p className="desc">
            I live in Tashkent, Uzbekistan, I am a Front-End Developer. My skill
            set includes designing, animating and coding products with the
            highest precision and attention to detail. I always strive to create
            interfaces that are not only aesthetically pleasing, but also
            provide a great user experience.
          </p>
          <div className="skils link">
            <p>My skills</p>
            <div className="icon_link">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-sass"></i>
              <i className="fa-brands fa-js"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="social_media link">
            <div className="icon_link social">
              <a target="_blank" href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/azizoficiall_/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a target="_blank" href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a target="_blank" href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a target="_blank" href="">
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a target="_blank" href=""></a>
            </div>
          </div>
        </div>
        <div className="my_certificate">
          <div className="certificate">
            <img src={certificate} alt="" />
            <p className="cer_title">PDP Academy FrontEnd</p>
            <div className="found">
              <img src={certificate} alt="" />
              <img src={certificate} alt="" />
              <img src={certificate} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
