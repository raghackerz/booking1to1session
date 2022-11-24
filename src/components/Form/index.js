import React /*,{ useEffect, useState }*/ from "react";

//utils
import jwt_decode from "jwt-decode";

//Styles
import "./Form.css";

//images
import PPLOGO from "../../assets/Signup/Group 4.png";

//components
import GoogleLoginButton from "../GoogleLogin";

//navigation
import { Link } from "react-router-dom";

const Form = ({
  header,
  items,
  buttonText,
  handleSubmit,
  googleLogin,
  setEmail,
  setName,
  setGoogleLogin,
  type,
}) => {
  const handleGoogleSuccess = (googleData) => {
    const googleObject = jwt_decode(googleData.credential);
    console.log(googleObject);
    setEmail(googleObject.email);
    setName(googleObject.name);
    setGoogleLogin(true);
  };

  return (
    <div className="form__container">
      <div className="form__navbar">
        <Link to="/">
          <img className="" src={PPLOGO} alt="" />
          <div>
            <h2>Programming Pathshala</h2>
          </div>
        </Link>
      </div>

      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form__header">
          <h1>{header}</h1>
        </div>
        {items.map((item) => (
          <label className="form__label" htmlFor={item.id}>
            {item.label}
            <input
              id={item.id}
              className="form__input"
              type={item.type}
              required
            />
          </label>
        ))}
        <button className="form__button">{buttonText}</button>

        {googleLogin ? (
          <>
            <div className="">OR</div>
            <GoogleLoginButton
              handleSuccess={handleGoogleSuccess}
              handleFailure={handleGoogleSuccess}
            />
          </>
        ) : null}

        {type && (
          <div className="">
            {type === "signup" ? (
              <p>
                Already have an account?<Link to="/signin"> Login</Link>
              </p>
            ) : (
              <p>
                Don't have an account?<Link to="/signup"> Signup</Link>
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
