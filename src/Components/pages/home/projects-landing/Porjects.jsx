import React from "react";
import "./projects.scss";
import Design from "./img/1.png";
import Weather from "./img/weather.jpg";
import Todo from "./img/todos.jpg";
import ProjectItem from "../../project/project-item/ProjectItem";

function Porjects() {
  return (
    <div className="cards">
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

export default Porjects;
