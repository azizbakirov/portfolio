import React, { useEffect, useState } from "react";
import "./top.scss";

function TopBtn() {
  const [topBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  },[]);

  const scroolUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="top">
      {topBtn && (
        <button
          className="animate__animated animate__fadeIn"
          onClick={scroolUp}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default TopBtn;
