import React from "react";
import "./app.scss";
import Home from "../Components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Components/pages/about/About";
import Project from "../Components/pages/project/Project";
import Navbar from "../Components/pages/home/primary nav/Navbar";
import TopBtn from "../Components/topBtn/TopBtn";
import JavaScript from "../Components/pages/project/javaScript/JavaScript";
import ReactJs from "../Components/pages/project/reactJs/ReactJs";
import Mini from "../Components/pages/project/miniProject/Mini";
import Design from "../Components/pages/project/design/Design";
import Blog from "../Components/pages/blog/Blog";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <TopBtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />}>
            <Route path="design" element={<Design />} />
            <Route path="javascript" element={<JavaScript />} />
            <Route path="react" element={<ReactJs />} />
            <Route path="mini" element={<Mini />} />
          </Route>
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
