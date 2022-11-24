import React from "react";

//hooks
import { useSignInFetch } from "../../hooks/useSignInFetch";

//components
import Form from "../../components/Form";

const SignIn = () => {
  const {
    setEmail,
    setPassword,
    loading,
    error,
    name,
    setName,
    emailExists,
    setGoogleLogin,
  } = useSignInFetch();
  const items = [
    {
      label: "Email",
      id: "email",
      type: "email",
    },
    {
      label: "Password",
      id: "password",
      type: "password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target[0].value);
    setPassword(e.target[1].value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <Form
      header="Sign In"
      items={items}
      handleSubmit={handleSubmit}
      googleLogin
      setEmail={setEmail}
      setName={setName}
      setGoogleLogin={setGoogleLogin}
      buttonText="Sign In"
      type="signin"
    />
  );
};

export default SignIn;
