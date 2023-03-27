import React from "react";
import "./projects.scss";
import Design from "./img/1.png";
import ProjectItem from "../../project/project-item/ProjectItem";
// import { createLogger } from "vite";
// import Design from "./img/1.jpg"

function Porjects() {
  const date = [
    {
      info: "Web design",
      title: "Kobra",
      btnNameLink: "google.com",
      btnName: "google.com",
      btnNameLink2: "google.com",
      btnName2: "google.uz",
      desc: "Lorem ipsum dolor sit amet",
      siteLink: "http://youtube.com",
      img: `${Design}`,
    },
    {
      info: "Web design",
      title: "Kobra",
      btnNameLink: "google.com",
      btnName: "google.com",
      btnNameLink2: "google.com",
      btnName2: "google.uz",
      desc: "Lorem ipsum dolor sit amet",
      siteLink: "http://youtube.com",
      img: `${Design}`,
    },
  ];

  
  return (
    <div className="cards">
    {date.map((item) =>{
      return (

    <ProjectItem date={item} />
      )
    })}
    </div>
  );
}

export default Porjects;
