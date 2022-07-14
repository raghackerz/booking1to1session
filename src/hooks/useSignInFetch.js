import { useEffect, useState } from 'react';
import API from '../API'

export const useSignInFetch = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchSignIn = async () => {
      if (email === "" || password === "") return;

      try {
        setLoading(true);
        setError(false);
        const token = await API.signIn(email, password);
        localStorage.authorization = `Bearer ${token.accessToken}`;
      }
      catch {
        setError(true);
      }
      setLoading(false);
    };

    fetchSignIn();
  }, [email, password])

  return { setEmail, setPassword, loading, error };
};
