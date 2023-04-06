import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="title-links">
        <p>Aziz Bakirov</p>
        <div className="links">
          <a href="https://t.me/azizbakirov" target="_blank">
            <span>Telegram</span> <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="https://github.com/azizbakirov" target="_blank">
            <span>Github</span> <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/azizoficiall_" target="_blank">
            <span> Instagram </span>
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
      <div className="title">
        <h1>I am interested in working with a team</h1>
      </div>
      <div className="coprghyt">
        <p>©2023 – All Rights Reserved</p>
        <p>
          Copyright by <span>My Web site</span>
        </p>
      </div>
    </footer>
    
  );
}

export default Footer;
