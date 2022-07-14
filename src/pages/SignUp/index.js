import React/*, { useState }*/ from 'react';
import SignUpComponent from '../../components/SignUpComponent';

//hooks
import { useSignUp } from '../../hooks/useSignUp'

const SignUp = () => {
  const { setEmail, setPassword, loading, error } = useSignUp();
  return (
    <SignUpComponent setEmail={setEmail} />
  );
}

export default SignUp;
