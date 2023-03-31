import React from 'react'
import ProjectItem from './project-item/ProjectItem';
import "./project.scss"
import Footer from "../home/footer/Footer"
import { NavLink, Link, Outlet } from 'react-router-dom';

function Project() {
  return (
    <div className="project">
      <nav className="navbar-two">
        <NavLink className="nav" to="design">
          Design
        </NavLink>
        <NavLink className="nav" to="javascript">
          JavaScript
        </NavLink>
        <NavLink className="nav" to="react">
          React JS
        </NavLink>
        <NavLink className="nav" to="mini">
          Mini
        </NavLink>
      </nav>
      <Outlet />

      <Footer />
    </div>
  );
}

export default Project