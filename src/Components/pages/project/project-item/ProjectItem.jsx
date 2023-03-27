import React from "react";
import "./projectItem.scss";

const ProjectItem = (props) => {
  return (
    <div>
      <div className={props.dark ? "card" : "dark-card"}>
        <div className="titles">
          <span>{props.info}</span>
          <h3>{props.title}</h3>
          <div className="btn">
            <p>{props.btnName}</p>
            <p>{props.btnName2}</p>
          </div>
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
