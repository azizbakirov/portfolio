import React from 'react'
import ProjectItem from './project-item/ProjectItem';
import "./project.scss"
import Footer from "../home/footer/Footer"
import { Link, Outlet } from 'react-router-dom';

function Project() {
  return (
    <div className="project">
      <nav className="navbar-two">
        <Link className="nav" to="design">
          Design
        </Link>
        <Link className="nav" to="javascript">
          JavaScript
        </Link>
        <Link className="nav" to="react">
          React JS
        </Link>
        <Link className="nav" to="mini">
          Mini
        </Link>
      </nav>
      <Outlet />
      <div className="projetcs">
        <ProjectItem
          dark={true}
          info="Web design"
          title="Kobra"
          desc="Lorem ipsum dolor sit amet"
          siteLink="http://youtube.com"
          // img={Design}
        />
        <ProjectItem
          dark={false}
          info="Web design"
          title="Kobra"
          desc="Lorem ipsum dolor sit amet"
          siteLink="http://youtube.com"
          // img={Design}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Project