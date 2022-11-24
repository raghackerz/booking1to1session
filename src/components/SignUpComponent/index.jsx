import React /*,{ useEffect, useState }*/ from "react";

//components
import Form from "../Form";

const SignUpComponent = ({ setEmail, setGoogleLogin, setName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target[0].value);
  };

  const items = [
    {
      label: "Email",
      id: "email",
      type: "email",
    },
  ];

  return (
    <>
      {/*
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
      */}
      <Form
        header="Sign Up"
        items={items}
        handleSubmit={handleSubmit}
        googleLogin
        setEmail={setEmail}
        setName={setName}
        setGoogleLogin={setGoogleLogin}
        type="signup"
      />
    </>
  );
};

export default SignUpComponent;
