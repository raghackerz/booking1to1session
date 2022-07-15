import React /*,{ useEffect, useState }*/ from "react";

//utils
import jwt_decode from 'jwt-decode'

//Styles
import './SignUpComponent.css'

//images
import PPLOGO from "../../assets/Signup/Group 4.png"

//components
import GoogleLoginButton from "../GoogleLogin";

const SignUpComponent = ({ setEmail, setGoogleLogin, setName }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target[0].value)
  }

  const handleGoogleSuccess = (googleData) => {
    const googleObject = jwt_decode(googleData.credential);
    console.log(googleObject)
    setEmail(googleObject.email);
    setName(googleObject.name);
    setGoogleLogin(true);
  }

  return (
    <>
      <div className="signup__container">
        <div className="signup__navbar">
          <img className="" src={PPLOGO} alt="" />
          <div><h2>Programming Pathshala</h2></div>
        </div>
        <form className="signup__form" onSubmit={handleSubmit}>
          <div className="signup__header"><h1>Sign Up</h1></div>
          <label className="signup__label" htmlFor="signup__email">Email
            <input id="signup__email" className="signup__email" type="email" required />
          </label>
          <button className="signup__button">Set Password</button>
          <div className="">OR</div>
          <GoogleLoginButton handleSuccess={handleGoogleSuccess} handleFailure={handleGoogleSuccess} />
          <div className="">Already have an account?<a href="/">  Login</a></div>
        </form>
      </div>
    </>
  );
}

export default SignUpComponent;
