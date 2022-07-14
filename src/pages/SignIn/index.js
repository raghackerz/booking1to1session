import React from 'react';

//hooks
import { useSignInFetch } from '../../hooks/useSignInFetch'

const SignIn = () => {
  const { setEmail, setPassword, loading, error } = useSignInFetch();
  return (
    <div>
    </div>
  );
}

export default SignIn;
