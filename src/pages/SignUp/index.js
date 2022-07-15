import React/*, { useState }*/ from 'react';

//Components
import SignUpComponent from '../../components/SignUpComponent';

//hooks
import { useSignUp } from '../../hooks/useSignUp'

const SignUp = () => {
  const { email, name, emailExists, setGoogleLogin, setEmail, setPassword, setName, loading, error } = useSignUp();
  if (loading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>Something went wrong ...</div>
  }

  // !email -> signup
  // googleLogin, emailExists -> home  //navigate should be handled in hook
  // googleLogin, !emailExists -> setPassword
  // !googleLogin, !emailExists -> setPassword
  // !googleLogin, emailExists -> login // navigate to login page with email
  return (
    <>
      {!email ?
        <SignUpComponent setEmail={setEmail} setGoogleLogin={setGoogleLogin} setName={setName} />
        : !emailExists ?
          //show setPassword Component
          <SignUpComponent setPassword={setPassword} setName={setName} name={name} />
          : null
      }
    </>
  );
}

export default SignUp;
