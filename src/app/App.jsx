import React from 'react'
import "./app.scss"
import Home from '../Components/pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Components/pages/about/About'
import Project from '../Components/pages/project/Project'
import Navbar from '../Components/pages/home/primary nav/Navbar'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App