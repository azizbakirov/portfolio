import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./about.scss";
import pdp from "./sertificate/pdp.jpg";
import pdpMin from "./sertificate/pdp-min.jpg";
import najotTalim from "./sertificate/najot.jpg";
import najotTalimMin from "./sertificate/najot-min.jpg";
import pdpFaundition from "./sertificate/faundition-min.jpg";
import pdpFaunditionMin from "./sertificate/faundition.jpg";
import FooterMin from "../home/footer/Footer";


const images = [
  {
    original: pdp,
    thumbnail: pdpMin,
    originalTitle: "Pdp Academy",
  },
  {
    original: pdpFaundition,
    thumbnail: pdpFaunditionMin,
    originalTitle: "Pdp Academy",
  },
  {
    original: najotTalim,
    thumbnail: najotTalimMin,
    originalTitle: "Najot Ta'lim",
  },
];


  console.log(images[0].title);

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about_pages">
          <div className="my_info">
            <p className="title">Aziz Bakirov</p>
            <p className="desc">
              I live in Tashkent, Uzbekistan, I am a Front-End Developer. My
              skill set includes designing, animating and coding products with
              the highest precision and attention to detail. I always strive to
              create interfaces that are not only aesthetically pleasing, but
              also provide a great user experience.
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
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a target="_blank" href=""></a>
              </div>
            </div>
          </div>
          <div className="my_certificate">
            <ImageGallery items={images} showNav={false} originalTitle={true} className="carusel" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
