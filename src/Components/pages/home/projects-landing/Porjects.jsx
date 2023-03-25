import React from 'react'
import "./projects.scss"
import Design from "./img/1.jpg"


function Porjects() {
  return (
    <div className="cards">
      <div className="card">
        <div className="titles">
          <span>CASE STUDIO</span>
          <h3>Korba</h3>
          <div className="btn">
            <a href="">Web design</a>
            <a href="">Development</a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
          <div className="lets-btn">
            <a className="lets" href="">
              See case study
            </a>
          </div>
        </div>
        <div className="img">
          <img src={Design} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="titles">
          <span>CASE STUDIO</span>
          <h3>Korba</h3>
          <div className="btn">
            <a href="">Web design</a>
            <a href="">Development</a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
          <div className="lets-btn">
            <a className="lets" href="">
              See case study
            </a>
          </div>
        </div>
        <div className="img">
          <img src={Design} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Porjects