import React from 'react';

import "./CompanyLogo.css";

//images 
import GOOGLE from '../../assets/google.png';
import AMAZON from '../../assets/amazon.png';
import WALLMART from '../../assets/wallmart.png';
import ZYNGA from '../../assets/zynga.png';
import FLIPKART from '../../assets/flipkart.png';
import OLA from '../../assets/ola.png';
import MICROSOFT from '../../assets/microsoft.png';
import RAZORPAY from '../../assets/razorpay.png';
import ADOBE from '../../assets/adobe.png';

const CompanyLogo = () => {
  return (
    <>
      <div>
        <h2>Get Mentored By Industry Veterans</h2>
      </div>
      <div className="logoContainer">
        <div className="column">
          <div className="logo">
            <img src={WALLMART} className="logoImage" alt="" />
          </div>
        </div>
        <div className="column">
          <div className="logo">
            <img src={AMAZON} className="logoImage" alt="" />
          </div>
          <div className="logo">
            <img src={ZYNGA} className="logoImage" alt="" />
          </div>
        </div>
        <div className="column">
          <div className="logo">
            <img src={GOOGLE} className="logoImage" alt="" />
          </div>
          <div className="logo">
            <img src={FLIPKART} className="logoImage" alt="" />
          </div>
          <div className="logo">
            <img src={OLA} className="logoImage" alt="" />
          </div>
        </div>
        <div className="column">
          <div className="logo">
            <img src={MICROSOFT} className="logoImage" alt="" />
          </div>
          <div className="logo">
            <img src={RAZORPAY} className="logoImage" alt="" />
          </div>
        </div>
        <div className="column">
          <div className="logo">
            <img src={ADOBE} className="logoImage" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLogo;
