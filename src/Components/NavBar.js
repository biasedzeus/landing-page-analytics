import React from 'react';
import logo from '../assessts/mainLogo.png'
import './NavBar.css'

const NavBar = () => {
    return (
      <nav id="navbar-container" className="navbar navbar-expand-lg navbar-dark bg-black ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img className="logo-img" src={logo} alt=""/>
      
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-us">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Vision</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
          <button id="contact-button" type="button" className="btn btn-light">Contact Us</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;
