import { useState, useEffect } from 'react'
import API from '../API'

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      if (email === "") return;

      try {
        setError(false);
        setLoading(true);
        const exists = await API.checkEmailExists(email);

        setEmailExists(exists);
      }
      catch {
        setError(true);
      }
      setLoading(false);
    }
    verifyEmail();
  }, [email])

  useEffect(() => {
    const verifyPassword = async () => {
      if (password === "") return;
      try {
        setError(false);
        setLoading(true);
      }
      catch {
        setError(true);
      }
      setLoading(false);
    }
    verifyPassword();
  }, [password])

  return { emailExists, setEmail, setPassword, loading, error };
};

