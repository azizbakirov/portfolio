import React from 'react'
import "./home.scss"
import Navbar from "./primary nav/Navbar"
import Header from './header/Header'
import Main from './main/Main';
import Porjects from './projects-landing/Porjects';
import Footer from './footer/Footer';

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Porjects />
      <Footer />
    </div>
  );
}

export default Home