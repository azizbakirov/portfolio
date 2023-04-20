import React from 'react'
import ProjectItem from '../project-item/ProjectItem'
import Designs from "../../home/projects-landing/img/1.png";
import "./design.scss"

function Design() {
  return (
    <div>
      <div className="text-project">
        <h1>Design</h1>
      </div>
      <ProjectItem
        dark={false}
        info="Web design"
        title="Design"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        img={Designs}
      />
      <ProjectItem
        dark={true}
        info="Web design"
        title="Design"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        img={Designs}
      />
    </div>
  );
}

export default Design