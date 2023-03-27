import React from "react";
import "./projects.scss";
import Design from "./img/1.png";
import ProjectItem from "../../project/project-item/ProjectItem";
// import { createLogger } from "vite";
// import Design from "./img/1.jpg"

function Porjects() {
  return (
    <div className="cards">
      <ProjectItem
        dark={true}
        info="Web design"
        title="Kobra"
        btnNameLink="google.com"
        btnName="google.com"
        btnNameLink2="google.com"
        btnName2="google.uz"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        img={Design}
      />
      <ProjectItem
        dark={false}
        info="Web design"
        title="Kobra"
        btnNameLink="google.com"
        btnName="google.com"
        btnNameLink2="google.com"
        btnName2="google.uz"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        img={Design}
      />
      <ProjectItem
        dark={true}
        info="Web design"
        title="Kobra"
        btnNameLink="google.com"
        btnName="google.com"
        btnNameLink2="google.com"
        btnName2="google.uz"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        img={Design}
      />
    </div>
  );
}

export default Porjects;
