import React from 'react';

import "./Footer.css";

import CHAT from '../../assets/Footer/chat.png';
import FACEBOOK from '../../assets/Footer/facebook.png';
import YOUTUBE from '../../assets/Footer/youtube.png';
import INSTAGRAM from '../../assets/Footer/instagram.png';
import LINKEDIN from '../../assets/Footer/linkedin.png';
import PROGRAMMINGPATSHAALALOGO from '../../assets/Footer/programmingpatshaalalogo.png';
import PROGRAMMINGPATSHALA from '../../assets/Footer/Programming Pathshala.png';
import TELEGRAM from '../../assets/Footer/telegram.png';




const Footer = () => {
  return (
    <>
      <div className="last-section--container">

        <div className="last-section">
          <div className="left">
            <h2 >Want to know more about our courses? </h2>
            <p id="txt1">Lets here all about it. <a href='#'>Contact Us</a></p>
            <div className="table">
              <table>
                <tr>
                  <td>Home</td>
                  <td>Pricing</td>
                  <td>Tech with us</td>
                </tr>
                <tr>
                  <td>Renaissance</td>
                  <td>Stories</td>
                  <td>Get Scholarships</td>
                </tr>
                <tr>
                  <td>Course Curriculam</td>
                  <td>Blogs</td>
                  <td>Terms And Condiitons</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Career</td>
                </tr>

              </table>
            </div>
          </div>
          <div className="right">
            <div className="right--ppa" >
              <img id="imgx" src={PROGRAMMINGPATSHAALALOGO} alt="" />
              <img src={PROGRAMMINGPATSHALA} alt="" />
            </div>
            <div className="right--txt">
              <p>We help our users to build skills, which are valued and enabling them to believe in themselves.</p>
            </div>
            <div className="right--logos">
              <div className="right--image-container">
                <img src={LINKEDIN} alt="" />
              </div>
              <div className="right--image-container">
                <img src={YOUTUBE} alt="" />
              </div>
              <div className="right--image-container">
                <img src={FACEBOOK} alt="" />
              </div>
              <div className="right--image-container">
                <img src={INSTAGRAM} alt="" />
              </div>
              <div className="right--image-container">
                <img src={TELEGRAM} alt="" />
              </div>
            </div>
            <div className="right--rectangle">
              <img src={CHAT} alt="" />
              <p id="ctxt">Chat with an Expert</p>
            </div>
          </div>
        </div>

      </div>

      <div className="footer">
        <p>All rights reserved with @Programming Pathshala</p>
      </div>
    </>
  );
}
export default Footer;
