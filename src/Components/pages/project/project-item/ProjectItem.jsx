import React from "react";
import "./projectItem.scss";

const ProjectItem = (props) => {
  return (
    <div>
      <div className={props.dark ? "card" : "dark-card"}>
        <div className="titles">
          <div className="info-links">
            <span>{props.info}</span>
            <div className="source">
              <a target="_blank" href={props.siteLink}>
                <i className="fa-solid fa-link"></i>
              </a>
              <a target="_blank" href={props.siteLink}>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div className="lets-btn">
            <a className="lets" target="_blank" href={props.siteLink}>
              View Site
            </a>
            <a className="lets" target="_blank" href={props.siteLink}>
              Source Code
            </a>
          </div>
        </div>
        <div className="img">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
