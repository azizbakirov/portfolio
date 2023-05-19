import React from "react";
import "./main.scss";

function Main() {
  return (
    <div className="main">
      <div className="card">
        <div className="title">
          <h1>Eric S. Raymond</h1>
        </div>
        <div className="content">
          <p>
            “Computer science education cannot make anybody an expert programmer
            any more than studying brushes and pigment can make somebody an
            expert painter.”
          </p>
        </div>
        <div className="button">
          <a href="https://www.linkedin.com/in/joshua-murphy-7a20b2108/">
            LinkedIn
          </a>
          <a href="https://github.com/joshua-murphy">GitHub</a>
        </div>
      </div>
      <div className="card">
        <div className="title">
          <h1>Bill Gates</h1>
        </div>
        <div className="content">
          <p>
            “A great lathe operator commands several times the wage of an
            average lathe operator, but a great writer of software code is worth
            10,000 times the price of an average software writer.”
          </p>
        </div>
        <div className="button">
          <a href="https://www.linkedin.com/in/joshua-murphy-7a20b2108/">
            LinkedIn
          </a>
          <a href="https://github.com/joshua-murphy">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Main;
