import React from 'react'
import "./project.scss"
import ProjectItem  from './project-item/ProjectItem';


function Project() {
  return (
    <div className="project">
      <ProjectItem
        info="Web design"
        title="Kobra"
        btnNameLink="google.com"
        btnName="google.com"
        btnNameLink2="google.com"
        btnName2="google.uz"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        // img={Design}
      />
    </div>
  );
}

export default Project