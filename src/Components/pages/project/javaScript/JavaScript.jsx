import React from 'react'
import "./js.scss"
import ProjectItem from '../project-item/ProjectItem';
import Weather from '../../home/projects-landing/img/weather.jpg'
import Todo from "../../home/projects-landing/img/todos.jpg";

function JavaScript() {
  return (
    <div>
      <div className="text-project">
        <h1>JavaScript</h1>
      </div>
      <ProjectItem
        dark={true}
        info="JavaScript"
        title="Weather UZ"
        desc="A weather website made using an API from visualcrossing"
        siteLink="https://weatherruz.netlify.app/"
        source="https://github.com/azizbakirov/weather-javascsript"
        img={Weather}
      />
      <ProjectItem
        dark={false}
        info="JavaScript"
        title="Todo UZ"
        desc="Todo list website"
        siteLink="https://todouzweb.netlify.app/"
        source="https://github.com/azizbakirov/todoweb"
        img={Todo}
      />
    </div>
  );
}

export default JavaScript