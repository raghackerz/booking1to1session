import React from "react";

import "./CompanyLogo.css";

//images
import GOOGLE from "../../assets/google.png";
import AMAZON from "../../assets/amazon.png";
import WALLMART from "../../assets/wallmart.png";
import ZYNGA from "../../assets/zynga.png";
import FLIPKART from "../../assets/flipkart.png";
import OLA from "../../assets/ola.png";
import MICROSOFT from "../../assets/microsoft.png";
import RAZORPAY from "../../assets/razorpay.png";
import ADOBE from "../../assets/adobe.png";

const CompanyLogo = () => {
  return (
    <>
      <div className="companylogo">
        <div>
          <h2>Get Mentored By Industry Veterans</h2>
        </div>
        <div className="companylogo__container">
          <div className="companylogo__column">
            <div className="companylogo__logo">
              <img src={WALLMART} className="companylogo__logo-image" alt="" />
            </div>
          </div>
          <div className="companylogo__column">
            <div className="companylogo__logo">
              <img src={AMAZON} className="companylogo__logo-image" alt="" />
            </div>
            <div className="companylogo__logo">
              <img src={ZYNGA} className="companylogo__logo-image" alt="" />
            </div>
          </div>
          <div className="companylogo__column">
            <div className="companylogo__logo">
              <img src={GOOGLE} className="companylogo__logo-image" alt="" />
            </div>
            <div className="companylogo__logo">
              <img src={FLIPKART} className="companylogo__logo-image" alt="" />
            </div>
            <div className="companylogo__logo">
              <img src={OLA} className="companylogo__logo-image" alt="" />
            </div>
          </div>
          <div className="companylogo__column">
            <div className="companylogo__logo">
              <img src={MICROSOFT} className="companylogo__logo-image" alt="" />
            </div>
            <div className="companylogo__logo">
              <img src={RAZORPAY} className="companylogo__logo-image" alt="" />
            </div>
          </div>
          <div className="companylogo__column">
            <div className="companylogo__logo">
              <img src={ADOBE} className="companylogo__logo-image" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="skill">
        <h3>
          Learn that new skill, launch that project, land your dream career.
        </h3>
        <p>
          Your online mentor can elevate your career or be a shoulder to lean
          on. Get a personalized mentoring program, including curated study
          plans, regular check-ins, and unlimited actionable support. Be part of
          an online mentor community that spans across the globe.
        </p>
      </div>
    </>
  );
};

export default CompanyLogo;
