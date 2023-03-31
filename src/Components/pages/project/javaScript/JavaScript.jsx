import React from 'react'
import "./js.scss"
import ProjectItem from '../project-item/ProjectItem';

function JavaScript() {
  return (
    <div>
      <div className="text-project">
        <h1>JavaScript</h1>
      </div>
      <ProjectItem
        dark={true}
        info="Web design"
        title="Javascript"
        desc="Lorem ipsum dolor sit amet"
        siteLink="http://youtube.com"
        // img={Design}
      />
    </div>
  );
}

export default JavaScript