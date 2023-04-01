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
          <span>HOME</span> <img src={Arrow} alt="" />
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink className="link abouts" to="/about" onClick={scroolUp}>
          <span>ABOUT</span> <img src={Arrow} alt="" />
          <i class="fa-solid fa-address-card"></i>
        </NavLink>
        <NavLink
          className="link projects"
          to="/project/design"
          onClick={scroolUp}
        >
          <span>PROJECTS</span> <img src={Arrow} alt="" />
          <i class="fa-solid fa-briefcase"></i>
        </NavLink>
          <i onClick={scroolUp} class="fa-solid fa-arrow-up"></i>
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