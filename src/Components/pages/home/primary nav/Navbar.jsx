import React from 'react'
import "./navbar.scss"
import { NavLink, Link, Outlet } from 'react-router-dom'
import Logo from "./logo/logo.png"
import Arrow from "./icon/Arrow.png"

function Navbar() {
  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="navbar animate__animated animate__slideInDown">
      <div className="logo">
        <Link className="links" to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className="nav">
        <NavLink className="link home" to="/" onClick={scroolUp}>
          HOME <img src={Arrow} alt="" />
        </NavLink>
        <NavLink className="link abouts" to="/about" onClick={scroolUp}>
          ABOUT <img src={Arrow} alt="" />
        </NavLink>
        <NavLink className="link projects" to="/project/design" onClick={scroolUp}>
          PROJECTS <img src={Arrow} alt="" />
        </NavLink>
      </nav>
      <Outlet />
      <div className="lets">
        <a href="">
          LETS TALK <img src={Arrow} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Navbar