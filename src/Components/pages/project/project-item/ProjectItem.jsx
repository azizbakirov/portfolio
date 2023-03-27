import React from 'react'
import "./projectItem.scss";


const ProjectItem = ({date}) => {


  const APIKEY = ''


  return (
    <div>
      <div className="card">
        <div className="titles">
          <span>{date.info}</span>
          <h3>{date.title}</h3>
          <div className="btn">
            <a href={date.btnNameLink}>{date.btnName}</a>
            <a href={date.btnNameLink2}>{date.btnName2}</a>
          </div>
          <p>
           {date.desc}
          </p>
          <div className="lets-btn">
            <a className="lets" href={date.siteLink}>
              View Site 
            </a>
          </div>
        </div>
        <div className="img">
          <img src={date.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem