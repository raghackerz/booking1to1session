import React /*, { useState }*/ from "react";

//Components
import Form from "../../components/Form";

//hooks
import { useSignUp } from "../../hooks/useSignUp";

const SignUp = () => {
  const {
    email,
    name,
    emailExists,
    setGoogleLogin,
    setEmail,
    setPassword,
    setName,
    loading,
    error,
  } = useSignUp();
  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Something went wrong ...</div>;
  }

  const signUpForm = [
    {
      label: "Email",
      id: "email",
      type: "email",
    },
  ];
  const signUpSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target[0].value);
  };

  const setPasswordForm = [
    {
      label: "Name",
      id: "name",
      type: "text",
    },
    {
      label: "Set Password",
      id: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      id: "confirmpassword",
      type: "text",
    },
  ];
  const setPasswordSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setPassword(e.target[1].value);
  };

  // !email -> signup
  // googleLogin, emailExists -> home  //navigate should be handled in hook
  // googleLogin, !emailExists -> setPassword
  // !googleLogin, !emailExists -> setPassword
  // !googleLogin, emailExists -> login // navigate to login page with email
  return (
    <>
      {!email ? (
        <Form
          header="Sign Up"
          items={signUpForm}
          buttonText="Sign Up"
          handleSubmit={signUpSubmit}
          googleLogin
          setEmail={setEmail}
          setName={setName}
          setGoogleLogin={setGoogleLogin}
          type="signup"
        />
      ) : !emailExists ? (
        <Form
          header="Set Password"
          buttonText="Set Password"
          items={setPasswordForm}
          handleSubmit={setPasswordSubmit}
        />
      ) : null}
    </>
  );
};

export default SignUp;
