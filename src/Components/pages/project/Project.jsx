import React from 'react'
import ProjectItem from './project-item/ProjectItem';
import "./project.scss"
import Footer from "../home/footer/Footer"

function Project() {
  return (
    <div className="project">
      <ProjectItem
        dark={true}
        info="Web design"
        title="Kobra"

        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        // img={Design}
      />
      <ProjectItem
        dark={false}
        info="Web design"
        title="Kobra"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        // img={Design}
      />


      <Footer />
    </div>
  );
}

export default Project