import React, { useState, useEffect } from 'react';

//Styles
import './HomePageNavbar.css'

//images
import PPLOGO from "../../assets/Signup/Group 4.png"
import HAMBURGER from "../../assets/hamburger.png"

//navigation
import { useNavigate } from 'react-router'

const HomePageNavbar = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const navigate = useNavigate();


  return (
    <div className="nav-container">
      <div className="logo">
        <img src={PPLOGO} alt="Logo" />
        <p> Programming Pathshala</p>
      </div>
      <div className="nav" style={{ visibility: width < 1080 ? open ? 'visible' : 'hidden' : 'visible' }}>
        <li>
          <a href="/">Renaissance</a>
        </li>
        <li>
          <a href="/">Campus Programs</a>
        </li>
        <li>
          <a href="/">Hire With us</a>
        </li>
        <li>
          <a href="/">Stories</a>
        </li>
        <li>
          <a href="/">Events</a>
        </li>

        <li>
          <button id="log" onClick={() => navigate('/signin')}>Log In</button>
        </li>
        <li>
          <button id="free-trial" onClick={() => navigate('/signup')}>Start Free Trial</button>
        </li>
        <img className="hamburger" src={HAMBURGER} alt="" onClick={() => setOpen(!open)} />
      </div>
    </div >
  )
}

export default HomePageNavbar;
