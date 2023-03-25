import React from 'react'
import "./projectItem.scss";


const ProjectItem = (props) => {
  return (
    <div>
      <div className="card">
        <div className="titles">
          <span>{props.info}</span>
          <h3>{props.title}</h3>
          <div className="btn">
            <a href={props.btnNameLink}>{props.btnName}</a>
            <a href={props.btnNameLink2}>{props.btnName2}</a>
          </div>
          <p>
           {props.desc}
          </p>
          <div className="lets-btn">
            <a className="lets" href={props.siteLink}>
              View Site 
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

export default ProjectItem