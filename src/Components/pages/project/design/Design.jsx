import React from 'react'
import ProjectItem from '../project-item/ProjectItem'

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
      />
      <ProjectItem
        dark={true}
        info="Web design"
        title="Design"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        // img={Design}
      />
    </div>
  );
}

export default Design