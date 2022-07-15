import { useState, useEffect } from 'react'
import API from '../API'

//Navigation
import { useNavigate } from 'react-router'

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      if (email === "") return;

      try {
        setError(false);
        setLoading(true);
        const exists = await API.checkEmailExists(email);
        if (googleLogin && exists) {
          const token = await API.googleLogin(email);
          localStorage.authorization = token;
          navigate('/');
        }
        else if (exists) {
          navigate('/signin');
        }
        else {
          setEmailExists(exists);
        }
      }
      catch {
        setError(true);
      }
      setLoading(false);
    }
    verifyEmail();
  }, [email, googleLogin, navigate])

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

  return { email, emailExists, setGoogleLogin, setEmail, setPassword, loading, error };
};

