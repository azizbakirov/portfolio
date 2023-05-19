import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./about.scss";
import certificate from "./sertificate/certificate.png";
import Footer from "../home/footer/Footer";


const images = [
  {
    original: certificate,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    originalTitle: "Pdp Academy",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    originalTitle: "Pdp Academy",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalTitle: "Pdp Academy",
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
            <ImageGallery items={images} showNav={false} originalTitle={true} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
